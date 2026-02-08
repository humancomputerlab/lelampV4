import csv
import json
import logging
import asyncio
from pathlib import Path
from typing import Optional, List, Dict

from lerobot.motors import Motor, MotorCalibration, MotorNormMode
from lerobot.motors.feetech import FeetechMotorsBus, OperatingMode

logger = logging.getLogger(__name__)

DEFAULT_CALIBRATION_PATH = Path(__file__).parent / "lelamp.json"
DEFAULT_ANIMATIONS_DIR = Path(__file__).parent / "servo_animations"


class SimpleServoController:
    MOTORS = {
        "base_yaw": 1,
        "base_pitch": 2,
        "elbow_pitch": 3,
        "wrist_roll": 4,
        "wrist_pitch": 5,
    }

    def __init__(
            self,
            port: str = "/dev/lelamp",
            calibration_path: str | Path = DEFAULT_CALIBRATION_PATH,
            animations_dir: str | Path = DEFAULT_ANIMATIONS_DIR,
            fps: int = 30,
            auto_connect: bool = True
    ):
        self.port = port
        self.fps = fps
        self._connected = False
        self._calibration_path = calibration_path
        self._animations_dir = Path(animations_dir)

        # Initialize bus object (not yet connected to hardware)
        # Note: Assumes Motor/FeetechMotorsBus initialization doesn't involve time-consuming IO
        # If it does, should be moved to connect method
        # TODO: improve performance
        self.bus = None

        self._action_queue = asyncio.Queue()
        self._consumer_task: Optional[asyncio.Task] = None
        self._stop_current_action = False  # Used to interrupt currently playing action

        self._idle_animation_path: Optional[str] = None
        self._is_playing_idle = False

        if auto_connect:
            # TODO: Researching on if there are better arch
            self.connect()

    def _load_calibration(self, calibration_path: str | Path) -> dict:
        path = Path(calibration_path)
        if not path.exists():
            logger.warning(f"Calibration file does not exist: {path}")
            return {}

        try:
            with open(path, 'r') as f:
                data = json.load(f)

            calibration = {}
            for motor_name, cal_data in data.items():
                calibration[motor_name] = MotorCalibration(
                    id=cal_data["id"],
                    drive_mode=cal_data["drive_mode"],
                    homing_offset=cal_data["homing_offset"],
                    range_min=cal_data["range_min"],
                    range_max=cal_data["range_max"],
                )
            return calibration
        except Exception as e:
            logger.error(f"Failed to load calibration file: {e}")
            return {}

    def connect(self) -> None:
        """Connect motors and start background consumer"""
        if self._connected:
            return

        try:
            # 1. Prepare bus object
            calibration = self._load_calibration(self._calibration_path)
            norm_mode = MotorNormMode.RANGE_M100_100

            self.bus = FeetechMotorsBus(
                port=self.port,
                motors={name: Motor(id, "sts3215", norm_mode)
                        for name, id in self.MOTORS.items()},
                calibration=calibration,
            )

            # 2. Physical connection (assuming this is a synchronous blocking call, use caution if very time-consuming)
            self.bus.connect()
            self._configure_motors()
            self._connected = True

            # 3. Start background consumer task
            # Get currently running event loop
            try:
                loop = asyncio.get_running_loop()
                self._consumer_task = loop.create_task(self._consumer_loop())
                logger.info("Background action consumer task started")
            except RuntimeError:
                logger.error("Initialization error: No running asyncio event loop. Please ensure instantiating this class in an async function.")
                # If no loop, cannot start background task, hardware connected but actions cannot play

            logger.info(f"Servo controller connected: {self.port}")

        except Exception as e:
            logger.error(f"Connection failed: {e}")
            self._connected = False
            raise

    async def disconnect(self) -> None:
        if not self._connected:
            return

        logger.info("Disconnecting...")

        # 1. Cancel background task
        if self._consumer_task:
            self._consumer_task.cancel()
            try:
                await self._consumer_task
            except asyncio.CancelledError:
                pass
            self._consumer_task = None

        # 2. Physical disconnect
        if self.bus:
            try:
                # Assuming bus.disconnect is synchronous
                self.bus.disconnect()
            except Exception as e:
                logger.error(f"Bus disconnect exception: {e}")

        self._connected = False
        logger.info("Servo controller disconnected")

    def _configure_motors(self) -> None:
        """Configure motor parameters"""
        if not self.bus: return
        with self.bus.torque_disabled():
            self.bus.configure_motors()
            for motor in self.bus.motors:
                self.bus.write("Operating_Mode", motor, OperatingMode.POSITION.value)
                self.bus.write("P_Coefficient", motor, 8)
                self.bus.write("D_Coefficient", motor, 10)
                self.bus.write("Torque_Limit", motor, 200)

    def write_position(self, positions: dict[str, float]) -> None:
        """Write position (synchronous method)"""
        if not self._connected or not self.bus:
            logger.warning("Attempted to write position but not connected")
            return
        self.bus.sync_write("Goal_Position", positions)

    def read_position(self) -> dict[str, float]:
        if not self._connected or not self.bus:
            raise RuntimeError("Not connected")
        return self.bus.sync_read("Present_Position")

    def _resolve_animation_path(self, csv_path: str) -> Path:
        """
        Resolve animation file path.
        If csv_path is a relative path (no directory), look in animations_dir.
        Otherwise, use as-is.
        """
        path = Path(csv_path)
        if not path.is_absolute() and path.parent == Path('.'):
            # Just a filename, look in animations directory
            return self._animations_dir / path
        return path

    def set_idle_animation(self, csv_path: Optional[str]) -> None:
        """
        Set idle animation

        Args:
            csv_path: Idle animation CSV file path, pass None to disable idle animation
        """
        if csv_path is not None:
            resolved_path = self._resolve_animation_path(csv_path)
            if not resolved_path.exists():
                raise FileNotFoundError(f"Idle animation file does not exist: {resolved_path}")
            self._idle_animation_path = str(resolved_path)
        else:
            self._idle_animation_path = None

        if csv_path is None:
            logger.info("Idle animation disabled")
            # If currently playing idle animation, stop it
            if self._is_playing_idle:
                self._stop_current_action = True
        else:
            logger.info(f"Idle animation set: {self._idle_animation_path}")
            # Send wake signal to let blocked consumer immediately check idle animation
            try:
                self._action_queue.put_nowait(None)  # None as wake signal
            except asyncio.QueueFull:
                pass  # Queue full means consumer won't block

    async def play_action(self, csv_path: str, interrupt: bool = False) -> None:
        """
        Submit an action file to the playback queue

        Args:
            csv_path: Action file path
            interrupt: Whether to immediately interrupt current action and clear queue
        """
        resolved_path = self._resolve_animation_path(csv_path)
        if not resolved_path.exists():
            raise FileNotFoundError(f"Action file does not exist: {resolved_path}")

        # If playing idle animation, interrupt it
        if self._is_playing_idle:
            self._stop_current_action = True

        if interrupt:
            logger.info("Interrupt command received: Clearing queue and stopping current action...")
            # 1. Set flag to notify running _play_csv to stop
            self._stop_current_action = True

            # 2. Clear tasks not yet started in queue
            while not self._action_queue.empty():
                try:
                    self._action_queue.get_nowait()
                    self._action_queue.task_done()
                except asyncio.QueueEmpty:
                    break

        await self._action_queue.put(str(resolved_path))

    async def stop_playback(self) -> None:
        self._stop_current_action = True
        while not self._action_queue.empty():
            try:
                self._action_queue.get_nowait()
                self._action_queue.task_done()
            except asyncio.QueueEmpty:
                break

    async def wait_until_finished(self):
        """Wait for all queued actions to complete"""
        await self._action_queue.join()

    async def _consumer_loop(self) -> None:
        logger.debug("Consumer loop started")
        try:
            while True:
                # Try non-blocking task retrieval, if queue empty then play idle animation
                try:
                    csv_path = self._action_queue.get_nowait()
                except asyncio.QueueEmpty:
                    # Queue empty, check if there's an idle animation to play
                    if self._idle_animation_path:
                        self._is_playing_idle = True
                        self._stop_current_action = False
                        try:
                            logger.debug(f"Starting idle animation: {self._idle_animation_path}")
                            await self._play_csv(self._idle_animation_path)
                        except Exception as e:
                            logger.error(f"Error playing idle animation: {e}")
                        finally:
                            self._is_playing_idle = False
                        continue
                    else:
                        # No idle animation, block wait for new task
                        csv_path = await self._action_queue.get()

                # Reset stop flag before starting new task
                self._stop_current_action = False
                self._is_playing_idle = False

                # Check if it's a wake signal (None)
                if csv_path is None:
                    self._action_queue.task_done()
                    continue  # Skip, re-check queue/idle animation

                try:
                    logger.info(f"Starting action playback: {csv_path}")
                    await self._play_csv(csv_path)
                    logger.info(f"Action playback complete: {csv_path}")
                except Exception as e:
                    logger.error(f"Error playing action: {e}")
                finally:
                    # Mark task complete
                    self._action_queue.task_done()

        except asyncio.CancelledError:
            logger.info("Consumer task cancelled, exiting...")

    async def _play_csv(self, csv_path: str) -> None:
        """Specific playback logic"""
        loop = asyncio.get_running_loop()

        # Key optimization: Put file reading into thread pool to avoid blocking event loop
        def read_csv_sync(csv_path: str) -> List[Dict]:
            """Synchronous CSV reading helper function (runs in Executor)"""
            with open(csv_path, 'r') as f:
                reader = csv.DictReader(f)
                return list(reader)
        try:
            rows = await loop.run_in_executor(None, read_csv_sync, csv_path)
        except Exception as e:
            logger.error(f"Failed to read file: {e}")
            return

        if not rows:
            return

        # Parse column names
        motor_columns = [col for col in rows[0].keys()
                         if col != 'timestamp' and col.endswith('.pos')]

        frame_delay = 1.0 / self.fps

        for row in rows:
            # Check for interrupt signal
            if self._stop_current_action:
                logger.info("Current action interrupted")
                break

            # Extract data
            positions = {}
            for col in motor_columns:
                motor_name = col.removesuffix('.pos')
                if motor_name in self.MOTORS:
                    try:
                        positions[motor_name] = float(row[col])
                    except ValueError:
                        pass

            # Write to hardware
            if positions:
                # If sync_write takes very short time (<1ms), can call directly
                # If takes longer, recommend also putting in run_in_executor
                # TODO: run in executor
                self.write_position(positions)

            # Wait for next frame
            await asyncio.sleep(frame_delay)

    # Support context manager
    async def __aenter__(self):
        if not self._connected:
            self.connect()
        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        await self.disconnect()


async def main():
    csv_filename = "idle.csv"
    try:
        async with SimpleServoController(auto_connect=True) as ctrl:
            cycle_counter = 0
            while True:
                cycle_counter += 1
                print("cycle: ", cycle_counter)
                await ctrl.play_action(csv_filename)
                await ctrl.wait_until_finished()
                logger.info("Playback finished", extra={'cycle_count': cycle_counter})
    except KeyboardInterrupt:
        print("\nUser manually stopped (KeyboardInterrupt)")
    except FileNotFoundError as e:
        logger.error(f"File error: {e}")
    except Exception as e:
        logger.error(f"Unexpected error occurred: {e}")
    finally:
        logger.info("--- Test ended ---")

if __name__ == "__main__":
    asyncio.run(main())
