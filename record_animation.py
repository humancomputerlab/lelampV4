#!/usr/bin/env python
"""
Record a servo animation by moving the lamp by hand.

Disables motor torque so you can freely pose the arm,
then records joint positions at 30 FPS to a CSV file
compatible with servo_controller.py.

Usage:
    uv run record_animation.py [animation_name]
    uv run record_animation.py idle --fps 60
"""

import argparse
import csv
import json
import time
from pathlib import Path

from lerobot.motors import Motor, MotorCalibration, MotorNormMode
from lerobot.motors.feetech import FeetechMotorsBus

PORT = "/dev/lelamp"
SCRIPT_DIR = Path(__file__).parent
CALIBRATION_FILE = SCRIPT_DIR / "lelamp.json"
ANIMATIONS_DIR = SCRIPT_DIR / "servo_animations"

MOTORS = {
    "base_yaw": 1,
    "base_pitch": 2,
    "elbow_pitch": 3,
    "wrist_roll": 4,
    "wrist_pitch": 5,
}


def load_calibration():
    with open(CALIBRATION_FILE) as f:
        data = json.load(f)
    return {
        name: MotorCalibration(
            id=c["id"],
            drive_mode=c["drive_mode"],
            homing_offset=c["homing_offset"],
            range_min=c["range_min"],
            range_max=c["range_max"],
        )
        for name, c in data.items()
    }


def make_bus():
    bus = FeetechMotorsBus(
        port=PORT,
        motors={
            name: Motor(mid, "sts3215", MotorNormMode.RANGE_M100_100)
            for name, mid in MOTORS.items()
        },
        calibration=load_calibration(),
    )
    bus.connect()
    return bus


def main():
    parser = argparse.ArgumentParser(description="Record a servo animation")
    parser.add_argument("name", nargs="?", help="Animation name (saved to servo_animations/<name>.csv)")
    parser.add_argument("--fps", type=int, default=30, help="Recording frame rate (default: 30)")
    args = parser.parse_args()

    name = args.name or input("Animation name: ").strip()
    if not name:
        print("No name given, aborting.")
        return 1

    out = ANIMATIONS_DIR / f"{name}.csv"
    if out.exists():
        if input(f"{out.name} exists. Overwrite? [y/N] ").strip().lower() != "y":
            return 0

    bus = make_bus()
    try:
        bus.disable_torque()
        print("Torque disabled. Move the lamp freely.")
        input("Press ENTER to start recording...")
        print(f"Recording at {args.fps} FPS -> {out.name}  (Ctrl+C to stop)")

        motor_names = list(MOTORS.keys())
        fields = ["timestamp"] + [f"{m}.pos" for m in motor_names]
        frame_delay = 1.0 / args.fps
        frames = 0

        with open(out, "w", newline="") as f:
            w = csv.DictWriter(f, fieldnames=fields)
            w.writeheader()
            try:
                while True:
                    t = time.perf_counter()
                    pos = bus.sync_read("Present_Position")
                    row = {"timestamp": t}
                    for m in motor_names:
                        row[f"{m}.pos"] = pos[m]
                    w.writerow(row)
                    frames += 1
                    print(f"\rFrames: {frames}", end="", flush=True)
                    wait = frame_delay - (time.perf_counter() - t)
                    if wait > 0:
                        time.sleep(wait)
            except KeyboardInterrupt:
                pass

        print(f"\nSaved {frames} frames ({frames / args.fps:.1f}s) -> {out}")
    finally:
        bus.disconnect()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
