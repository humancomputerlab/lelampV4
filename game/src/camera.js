import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

/**
 * Camera controller: either follows servo FK (normal) or mouse (debug).
 */
export class CameraController {
  constructor(camera, renderer, debugMode = false) {
    this.camera = camera;
    this.debugMode = debugMode;
    this.smoothing = 0.15;

    // Target and current angles (radians)
    this.targetYaw = 0;
    this.targetPitch = 0;
    this.currentYaw = 0;
    this.currentPitch = 0;

    this.pointerLock = null;

    if (debugMode) {
      this.pointerLock = new PointerLockControls(camera, renderer.domElement);
      renderer.domElement.addEventListener('click', () => {
        if (!this.pointerLock.isLocked) {
          this.pointerLock.lock();
        }
      });
    }

    camera.rotation.order = 'YXZ';
  }

  /** Update target from WebSocket position data (normal mode). */
  update(yawDeg, pitchDeg) {
    if (this.debugMode) return;
    this.targetYaw = THREE.MathUtils.degToRad(yawDeg);
    this.targetPitch = THREE.MathUtils.degToRad(pitchDeg);
  }

  /** Call each frame to interpolate camera rotation. */
  tick() {
    if (this.debugMode) {
      // PointerLockControls handles rotation directly
      return;
    }

    this.currentYaw += (this.targetYaw - this.currentYaw) * this.smoothing;
    this.currentPitch += (this.targetPitch - this.currentPitch) * this.smoothing;

    this.camera.rotation.y = this.currentYaw;
    // Clamp pitch to avoid flipping (straight down to straight up)
    this.camera.rotation.x = THREE.MathUtils.clamp(this.currentPitch, -Math.PI / 2, Math.PI / 2);
  }
}
