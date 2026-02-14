"""Bridge server: reads servo positions, computes FK, broadcasts to game via WebSocket.

Usage:
    uv run python -m bridge.server           # Normal mode (requires hardware)
    uv run python -m bridge.server --debug    # Debug mode (no hardware needed)
"""

import argparse
import asyncio
import json
import logging
from pathlib import Path

import websockets

from .forward_kinematics import compute_fk, joints_to_radians
from .sounds import play_shoot

logger = logging.getLogger(__name__)

POLL_HZ = 30
POLL_INTERVAL = 1.0 / POLL_HZ
WS_PORT = 8765

connected_clients: set = set()
rgb_controller = None
servo_controller = None
calibration_data: dict | None = None


def load_calibration() -> dict | None:
    cal_path = Path(__file__).parent.parent / "lelamp.json"
    if not cal_path.exists():
        logger.warning("No lelamp.json found, FK will use fallback ranges")
        return None
    try:
        with open(cal_path) as f:
            data = json.load(f)
        # Convert to simple dicts with range_min/range_max
        cal = {}
        for name, entry in data.items():
            cal[name] = {
                "range_min": entry.get("range_min", -180),
                "range_max": entry.get("range_max", 180),
            }
        return cal
    except Exception as e:
        logger.error(f"Failed to load calibration: {e}")
        return None


async def broadcast(message: dict):
    global connected_clients
    if not connected_clients:
        return
    data = json.dumps(message)
    dead = set()
    for ws in connected_clients:
        try:
            await ws.send(data)
        except websockets.ConnectionClosed:
            dead.add(ws)
    connected_clients -= dead


async def handle_game_event(event: dict):
    """Handle events sent from the game (hit, miss, shoot, wave, game_over)."""
    global rgb_controller
    event_type = event.get("type")

    if event_type == "shoot":
        play_shoot()

    if rgb_controller is None:
        return
    try:
        if event_type == "shoot":
            rgb_controller.set_solid(255, 255, 0)  # Yellow flash
            await asyncio.sleep(0.15)
            rgb_controller.set_solid(0, 0, 0)
        elif event_type == "hit":
            rgb_controller.set_solid(0, 255, 0)  # Green flash
            await asyncio.sleep(0.2)
            rgb_controller.set_solid(0, 0, 0)
        elif event_type == "miss":
            rgb_controller.set_solid(255, 0, 0)  # Red flash
            await asyncio.sleep(0.15)
            rgb_controller.set_solid(0, 0, 0)
        elif event_type == "wave_start":
            # Rainbow animation for 2 seconds
            await _rainbow_flash(2.0)
        elif event_type == "game_over":
            # Police animation for 3 seconds
            await _police_flash(3.0)
    except Exception as e:
        logger.error(f"LED feedback error: {e}")


async def _rainbow_flash(duration: float):
    """Simple rainbow sweep on LEDs."""
    global rgb_controller
    if rgb_controller is None:
        return
    import time
    start = time.monotonic()
    while time.monotonic() - start < duration:
        t = time.monotonic() - start
        for i in range(len(rgb_controller.pixels)):
            hue = ((i / len(rgb_controller.pixels)) + t * 0.5) % 1.0
            r, g, b = _hsv_to_rgb(hue, 1.0, 1.0)
            rgb_controller.pixels[i] = (int(r * 255), int(g * 255), int(b * 255))
        rgb_controller.pixels.show()
        await asyncio.sleep(0.03)
    rgb_controller.set_solid(0, 0, 0)


async def _police_flash(duration: float):
    """Alternating red/blue flash."""
    global rgb_controller
    if rgb_controller is None:
        return
    import time
    start = time.monotonic()
    toggle = False
    while time.monotonic() - start < duration:
        half = len(rgb_controller.pixels) // 2
        if toggle:
            for i in range(half):
                rgb_controller.pixels[i] = (255, 0, 0)
            for i in range(half, len(rgb_controller.pixels)):
                rgb_controller.pixels[i] = (0, 0, 255)
        else:
            for i in range(half):
                rgb_controller.pixels[i] = (0, 0, 255)
            for i in range(half, len(rgb_controller.pixels)):
                rgb_controller.pixels[i] = (255, 0, 0)
        rgb_controller.pixels.show()
        toggle = not toggle
        await asyncio.sleep(0.15)
    rgb_controller.set_solid(0, 0, 0)


def _hsv_to_rgb(h, s, v):
    import colorsys
    return colorsys.hsv_to_rgb(h, s, v)


async def ws_handler(websocket):
    logger.info(f"Game client connected: {websocket.remote_address}")
    connected_clients.add(websocket)

    # Send config so the game knows the mode
    debug = servo_controller is None
    await websocket.send(json.dumps({
        "type": "game_config",
        "debug": debug,
    }))

    try:
        async for message in websocket:
            try:
                event = json.loads(message)
                logger.debug(f"Game event: {event}")
                asyncio.create_task(handle_game_event(event))
            except json.JSONDecodeError:
                logger.warning(f"Invalid JSON from game: {message}")
    except websockets.ConnectionClosed:
        pass
    finally:
        connected_clients.discard(websocket)
        logger.info("Game client disconnected")


async def servo_poll_loop():
    """Poll servo positions at POLL_HZ and broadcast FK results."""
    global servo_controller, calibration_data
    logger.info(f"Starting servo polling at {POLL_HZ}Hz")

    while True:
        try:
            positions = servo_controller.read_position()
            yaw, pitch = compute_fk(positions, calibration_data)
            joints = joints_to_radians(positions, calibration_data)
            await broadcast({
                "type": "position",
                "yaw": round(yaw, 2),
                "pitch": round(pitch, 2),
                "joints": joints,
            })
        except Exception as e:
            logger.error(f"Servo poll error: {e}")

        await asyncio.sleep(POLL_INTERVAL)


async def main(debug: bool = False):
    global servo_controller, rgb_controller, calibration_data

    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s [%(name)s] %(levelname)s: %(message)s",
    )

    if not debug:
        # Initialize hardware
        from servo_controller import SimpleServoController

        calibration_data = load_calibration()

        logger.info("Initializing servo controller...")
        sc = SimpleServoController(auto_connect=False)
        sc.connect()
        servo_controller = sc

        # Stop idle animation and disable torque for leader mode
        await servo_controller.stop_playback()
        servo_controller.set_idle_animation(None)
        await asyncio.sleep(0.1)  # Let consumer settle
        servo_controller.disable_torque()
        logger.info("Torque disabled — lamp is in leader mode")

        # Try to initialize RGB controller
        try:
            from rgb_controller import RgbController
            rgb_controller = RgbController()
            rgb_controller.set_solid(0, 0, 0)  # Start dark
            logger.info("RGB controller initialized")
        except Exception as e:
            logger.warning(f"RGB controller unavailable: {e}")
            rgb_controller = None
    else:
        logger.info("Debug mode — skipping hardware initialization")

    # Start WebSocket server
    logger.info(f"Starting WebSocket server on port {WS_PORT}")
    async with websockets.serve(ws_handler, "0.0.0.0", WS_PORT):
        if not debug:
            # Run servo polling alongside the WS server
            await servo_poll_loop()
        else:
            # In debug mode, just keep the server running
            logger.info("Debug mode: WebSocket server ready, no servo polling")
            await asyncio.Future()  # Run forever


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="LeLamp Space Invaders Bridge")
    parser.add_argument("--debug", action="store_true", help="Run without hardware")
    args = parser.parse_args()

    try:
        asyncio.run(main(debug=args.debug))
    except KeyboardInterrupt:
        logger.info("Bridge server stopped")
    finally:
        if servo_controller is not None:
            servo_controller.enable_torque()
