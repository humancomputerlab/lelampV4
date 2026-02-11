"""Forward kinematics for the LeLamp 5-DOF arm.

Computes end-effector yaw/pitch from 5 joint positions using
the kinematic chain defined in my_robot/robot.urdf.
"""

import math
import numpy as np


def _rot_z(angle: float) -> np.ndarray:
    c, s = math.cos(angle), math.sin(angle)
    return np.array([
        [c, -s, 0, 0],
        [s,  c, 0, 0],
        [0,  0, 1, 0],
        [0,  0, 0, 1],
    ])


def _rot_x(angle: float) -> np.ndarray:
    c, s = math.cos(angle), math.sin(angle)
    return np.array([
        [1, 0,  0, 0],
        [0, c, -s, 0],
        [0, s,  c, 0],
        [0, 0,  0, 1],
    ])


def _rot_y(angle: float) -> np.ndarray:
    c, s = math.cos(angle), math.sin(angle)
    return np.array([
        [ c, 0, s, 0],
        [ 0, 1, 0, 0],
        [-s, 0, c, 0],
        [ 0, 0, 0, 1],
    ])


def _transform_from_origin(xyz: tuple, rpy: tuple) -> np.ndarray:
    """Build a 4x4 homogeneous transform from URDF origin (xyz + rpy)."""
    x, y, z = xyz
    roll, pitch, yaw = rpy

    T = np.eye(4)
    T[0, 3] = x
    T[1, 3] = y
    T[2, 3] = z

    # URDF convention: R = Rz(yaw) @ Ry(pitch) @ Rx(roll)
    R = _rot_z(yaw) @ _rot_y(pitch) @ _rot_x(roll)
    T[:3, :3] = R[:3, :3]
    return T


# Joint origin transforms extracted from robot.urdf
# Each joint: (xyz, rpy) from the <origin> tag
JOINT_ORIGINS = [
    # servo1: base_plate -> base_subassembly
    ((0.0, 0.0, 0.01834), (-math.pi, 0.0, math.pi / 2)),
    # servo2: base_subassembly -> bottom_link_subassembly
    ((-0.05211, 0.0194928, -0.05853), (math.pi / 2, math.pi / 2, 0.0)),
    # servo3: bottom_link_subassembly -> top_link_subassembly
    ((0.183124, -0.0804099, 0.0), (math.pi, 0.0, 2.6358)),
    # servo4: top_link_subassembly -> head_link_subassembly
    ((0.0598592, 0.163523, -0.0194359), (math.pi / 3, -math.pi / 2, 0.0)),
    # servo5: head_link_subassembly -> head_subassembly
    ((0.0195834, 0.0, -0.04261), (math.pi / 2, 1.53584, -math.pi / 2)),
]


def normalized_to_radians(
    normalized: float,
    range_min: float,
    range_max: float,
) -> float:
    """Convert a normalized position (-100..100) to radians.

    range_min and range_max are the calibration values in degrees
    that correspond to -100 and +100 respectively.
    """
    frac = (normalized + 100.0) / 200.0
    degrees = range_min + frac * (range_max - range_min)
    return math.radians(degrees)


def compute_fk(
    joint_positions: dict[str, float],
    calibration: dict | None = None,
) -> tuple[float, float]:
    """Compute forward kinematics and return (yaw_deg, pitch_deg).

    Args:
        joint_positions: Dict of motor_name -> normalized position (-100..100)
            Keys: base_yaw, base_pitch, elbow_pitch, wrist_roll, wrist_pitch
        calibration: Optional calibration dict from lelamp.json.
            Each entry has range_min and range_max in degrees.

    Returns:
        (yaw_deg, pitch_deg) — the direction the lamp head is pointing.
    """
    motor_names = ["base_yaw", "base_pitch", "elbow_pitch", "wrist_roll", "wrist_pitch"]

    # Convert normalized positions to radians
    angles = []
    for name in motor_names:
        norm_val = joint_positions.get(name, 0.0)
        if calibration and name in calibration:
            cal = calibration[name]
            rad = normalized_to_radians(
                norm_val,
                cal.get("range_min", -180),
                cal.get("range_max", 180),
            )
        else:
            # Fallback: treat normalized as rough degrees
            rad = math.radians(norm_val * 1.8)  # -100..100 -> -180..180
        angles.append(rad)

    # Chain transforms: T = T_origin1 @ Rz(q1) @ T_origin2 @ Rz(q2) @ ...
    T = np.eye(4)
    for i, (origin, angle) in enumerate(zip(JOINT_ORIGINS, angles)):
        T_origin = _transform_from_origin(*origin)
        T = T @ T_origin @ _rot_z(angle)

    # The forward direction of the end-effector is its local Z-axis
    # (the joint axis), projected into world frame
    forward = T[:3, 2]

    # Extract yaw/pitch from the forward vector
    # yaw: rotation around world Z (horizontal aiming)
    # pitch: elevation angle
    yaw_rad = math.atan2(forward[1], forward[0])
    pitch_rad = math.asin(np.clip(forward[2], -1.0, 1.0))

    return math.degrees(yaw_rad), math.degrees(pitch_rad)
