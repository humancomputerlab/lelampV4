import * as THREE from 'three';

const DEG2RAD = Math.PI / 180;

// --- Tuning knobs ---
const ORBIT_DIST = 3;           // sphere radius (distance from player)
const SHOULDER_OFFSET_X = 1.5;  // aim point right of player (player shifts left on screen)
const SHOULDER_OFFSET_Y = 0.8;  // aim point above player (player shifts down on screen)
const PLAYER_CENTER = new THREE.Vector3(0, 1.25, 2); // player capsule center

const PITCH_MIN = -85 * DEG2RAD;
const PITCH_MAX = 80 * DEG2RAD;
const MOUSE_SENSITIVITY = 0.003;

// Reusable vectors (avoid per-frame allocations)
const _right = new THREE.Vector3();
const _up = new THREE.Vector3(0, 1, 0);
const _lookAt = new THREE.Vector3();

/**
 * Over-the-shoulder orbit camera.
 * Orbits the player on a sphere, but looks PAST the player's right shoulder
 * so the player stays in the bottom-left of the screen.
 */
export class CameraController {
  constructor(camera, renderer, debugMode = false) {
    this.camera = camera;
    this.debugMode = debugMode;

    // Target and current angles (radians)
    this.targetYaw = 0;
    this.targetPitch = 0.3; // slight upward default
    this.currentYaw = 0;
    this.currentPitch = 0.3;

    this.smoothing = debugMode ? 0.5 : 0.15;

    if (debugMode) {
      this._locked = false;

      renderer.domElement.addEventListener('click', () => {
        if (!this._locked) {
          renderer.domElement.requestPointerLock();
        }
      });

      document.addEventListener('pointerlockchange', () => {
        this._locked = document.pointerLockElement === renderer.domElement;
      });

      document.addEventListener('mousemove', (e) => {
        if (!this._locked) return;
        this.targetYaw -= e.movementX * MOUSE_SENSITIVITY;
        this.targetPitch += e.movementY * MOUSE_SENSITIVITY;
        this.targetPitch = THREE.MathUtils.clamp(this.targetPitch, PITCH_MIN, PITCH_MAX);
      });
    }
  }

  /** Update target from WebSocket position data (normal mode). */
  update(yawDeg, pitchDeg) {
    if (this.debugMode) return;
    this.targetYaw = yawDeg * DEG2RAD;
    this.targetPitch = THREE.MathUtils.clamp(pitchDeg * DEG2RAD, PITCH_MIN, PITCH_MAX);
  }

  /** Current yaw value (radians) for rotating the player model. */
  get currentYawValue() {
    return this.currentYaw;
  }

  /** Call each frame to position the orbit camera. */
  tick() {
    // Smooth interpolation (angle-aware for yaw to avoid ±180° wraparound jump)
    let yawDiff = this.targetYaw - this.currentYaw;
    // Normalize to [-π, π] so we always take the shortest path
    yawDiff = ((yawDiff + Math.PI) % (2 * Math.PI)) - Math.PI;
    if (yawDiff < -Math.PI) yawDiff += 2 * Math.PI;
    this.currentYaw += yawDiff * this.smoothing;
    this.currentPitch += (this.targetPitch - this.currentPitch) * this.smoothing;

    // Aim direction (where the crosshair/player is looking)
    const cosPitch = Math.cos(this.currentPitch);
    const aimX = -Math.sin(this.currentYaw) * cosPitch;
    const aimY = -Math.sin(this.currentPitch);
    const aimZ = -Math.cos(this.currentYaw) * cosPitch;

    // Camera sits behind the player (opposite of aim) on the sphere
    this.camera.position.set(
      PLAYER_CENTER.x - aimX * ORBIT_DIST,
      PLAYER_CENTER.y - aimY * ORBIT_DIST,
      PLAYER_CENTER.z - aimZ * ORBIT_DIST,
    );

    // Shoulder offset — shift camera to the right of the aim direction
    _right.set(Math.cos(this.currentYaw), 0, -Math.sin(this.currentYaw));
    this.camera.position.addScaledVector(_right, SHOULDER_OFFSET_X);
    this.camera.position.y += SHOULDER_OFFSET_Y;

    // Clamp camera above ground
    this.camera.position.y = Math.max(this.camera.position.y, 0.5);

    // Look along the aim direction (pitch controls view, ground clamp doesn't affect it)
    _lookAt.set(
      this.camera.position.x + aimX * 100,
      this.camera.position.y + aimY * 100,
      this.camera.position.z + aimZ * 100,
    );
    this.camera.lookAt(_lookAt);
  }
}
