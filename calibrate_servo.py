#!/usr/bin/env python
"""
Interactive calibration script for LeLamp servos.
This properly records homing offsets and motion ranges.

Usage:
    python calibrate_servo.py --port /dev/lelamp
"""

import argparse
import json
import logging
from pathlib import Path
from lerobot.motors import Motor, MotorCalibration, MotorNormMode
from lerobot.motors.feetech import FeetechMotorsBus, OperatingMode

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Motor configuration
MOTORS = {
    "base_yaw": 1,
    "base_pitch": 2,
    "elbow_pitch": 3,
    "wrist_roll": 4,
    "wrist_pitch": 5,
}

DEFAULT_PORT = "/dev/lelamp"
CALIBRATION_FILE = Path("./lelamp.json")


def save_calibration(calibration: dict, filepath: Path) -> None:
    """Save calibration data to JSON file."""
    # Convert MotorCalibration objects to dicts
    data = {}
    for motor_name, cal in calibration.items():
        data[motor_name] = {
            "id": cal.id,
            "drive_mode": cal.drive_mode,
            "homing_offset": cal.homing_offset,
            "range_min": cal.range_min,
            "range_max": cal.range_max,
        }
    
    with open(filepath, 'w') as f:
        json.dump(data, f, indent=4)
    
    logger.info(f"Calibration saved to: {filepath}")


def calibrate_interactive(port: str) -> None:
    """
    Interactive calibration for servos.

    This performs the actual calibration process:
    1. User positions the arm at center/neutral position
    2. Records homing offsets (half-turn homings)
    3. User moves each joint through its full range
    4. Records min/max ranges for each joint
    5. Saves calibration to file
    """
    logger.info(f"Starting interactive calibration on port: {port}")

    # Create motor bus without calibration (raw mode)
    motors = {
        name: Motor(id, "sts3215", MotorNormMode.RANGE_M100_100)
        for name, id in MOTORS.items()
    }
    
    bus = FeetechMotorsBus(
        port=port,
        motors=motors,
        calibration=None,  # No calibration - we want raw values
    )

    try:
        # Connect without applying existing calibration
        bus.connect(handshake=True)

        # Set all motors to position mode
        for motor in bus.motors:
            bus.write("Operating_Mode", motor, OperatingMode.POSITION.value)

        # Reset all servos to zero position (2048 = center for STS3215)
        print("\n" + "=" * 60)
        print("STEP 0: RESETTING SERVOS TO ZERO POSITION")
        print("=" * 60)
        print("\nMoving all servos to center position (2048)...")
        
        import time
        
        # Use low-level packet handler for raw writes (no calibration needed)
        # Torque_Enable is at address 40 (1 byte)
        # Goal_Position is at address 42 (2 bytes)
        for motor_name, motor in bus.motors.items():
            motor_id = motor.id
            try:
                # Enable torque
                bus.packet_handler.write1ByteTxRx(bus.port_handler, motor_id, 40, 1)
                time.sleep(0.02)
                # Write goal position 2048
                bus.packet_handler.write2ByteTxRx(bus.port_handler, motor_id, 42, 2048)
            except Exception as e:
                print(f"  Warning: Failed to reset {motor_name}: {e}")
        
        time.sleep(2)  # Wait for servos to reach position
        
        print("✓ All servos reset to zero position")
        
        # Now disable torque so user can move joints freely
        bus.disable_torque()
        print("✓ Torque disabled - you can now move the servos freely")

        print("\n" + "=" * 60)
        print("STEP 1: SET NEUTRAL/CENTER POSITION")
        print("=" * 60)
        print("\nMove ALL joints to their NEUTRAL/CENTER position.")
        print("This is typically where the arm looks 'natural' or 'idle'.")
        print("\nFor a 180° servo, center position is typically at 90° (2048 pulse).")
        print("\n⚠️  IMPORTANT: The arm should be in a safe, comfortable position")
        print("    where it has room to move in BOTH directions for each joint.\n")
        input("Press ENTER when the arm is in the neutral position...")

        # Record homing offsets (this sets current position as "zero"/neutral)
        homing_offsets = bus.set_half_turn_homings()
        print(f"\n✓ Homing offsets recorded: {homing_offsets}")

        print("\n" + "=" * 60)
        print("STEP 2: RECORD RANGE OF MOTION")
        print("=" * 60)
        print("\nNow move EACH JOINT through its FULL SAFE range of motion.")
        print("Move each joint from its minimum to maximum position.")
        print("\n⚠️  IMPORTANT: Only move within SAFE mechanical limits!")
        print("    Do NOT force any joint against hard stops.\n")
        print("Recording positions continuously...")
        print("Press ENTER when you have moved all joints through their ranges...\n")

        # Record min/max for each joint
        range_mins, range_maxes = bus.record_ranges_of_motion()

        print(f"\n✓ Range mins recorded: {range_mins}")
        print(f"✓ Range maxes recorded: {range_maxes}")

        # Validate ranges (warn if too small)
        print("\n" + "=" * 60)
        print("VALIDATION")
        print("=" * 60)
        small_ranges = []
        for motor in bus.motors:
            range_size = abs(range_maxes[motor] - range_mins[motor])
            degrees = range_size * 180.0 / 4096  # Convert to degrees (180° servo)
            print(f"  {motor}: {range_size} pulses ({degrees:.1f}°)")
            if range_size < 500:  # Less than ~22° is suspiciously small
                small_ranges.append(motor)

        if small_ranges:
            print(f"\n⚠️  WARNING: The following joints have very small ranges: {small_ranges}")
            print("   Consider recalibrating and moving these joints through a larger range.")
            response = input("\nContinue with calibration anyway? [y/N]: ")
            if response.strip().lower() != 'y':
                print("Calibration cancelled.")
                return

        # Build calibration data
        calibration = {}
        for motor, m in bus.motors.items():
            calibration[motor] = MotorCalibration(
                id=m.id,
                drive_mode=0,
                homing_offset=homing_offsets[motor],
                range_min=range_mins[motor],
                range_max=range_maxes[motor],
            )

        # Write calibration to motors
        bus.write_calibration(calibration)
        
        # Save calibration to file
        save_calibration(calibration, CALIBRATION_FILE)

        print(f"\n✓ Calibration saved to: {CALIBRATION_FILE}")
        print("\n" + "=" * 60)
        print("CALIBRATION COMPLETE")
        print("=" * 60)

    except Exception as e:
        logger.error(f"Calibration failed: {e}")
        raise
    finally:
        if bus.is_connected:
            bus.disconnect()


def main():
    parser = argparse.ArgumentParser(
        description="Interactive calibration for LeLamp servos"
    )
    parser.add_argument(
        '--port', '-p',
        type=str,
        default=DEFAULT_PORT,
        help=f'Serial port for the lamp (default: {DEFAULT_PORT})'
    )
    args = parser.parse_args()

    try:
        calibrate_interactive(args.port)
        return 0
    except Exception as e:
        logger.error(f"Calibration failed: {e}")
        return 1


if __name__ == "__main__":
    exit(main())
