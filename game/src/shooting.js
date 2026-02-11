import * as THREE from 'three';

const SHOOT_INTERVAL = 1.0; // seconds

export class ShootingSystem {
  constructor(camera) {
    this.camera = camera;
    this.timer = 0;
    this.raycaster = new THREE.Raycaster();
    this.screenCenter = new THREE.Vector2(0, 0);
    this.active = false;
  }

  start() {
    this.timer = 0;
    this.active = true;
  }

  stop() {
    this.active = false;
  }

  /** Returns cooldown progress 0..1 (1 = about to fire). */
  get cooldownProgress() {
    return Math.min(this.timer / SHOOT_INTERVAL, 1.0);
  }

  /**
   * Tick the auto-shoot timer.
   * Returns { fired: boolean, hit: Mesh|null } when a shot occurs.
   */
  tick(dt, enemyMeshes) {
    if (!this.active) return null;

    this.timer += dt;
    if (this.timer < SHOOT_INTERVAL) return null;

    // Fire!
    this.timer = 0;

    // Raycast from screen center
    this.raycaster.setFromCamera(this.screenCenter, this.camera);
    const intersects = this.raycaster.intersectObjects(enemyMeshes);

    if (intersects.length > 0) {
      return { fired: true, hit: intersects[0].object, point: intersects[0].point };
    }
    return { fired: true, hit: null, point: null };
  }
}
