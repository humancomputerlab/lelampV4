import * as THREE from 'three';

const SHOOT_INTERVAL = 1.0; // seconds
const MAX_STAMINA = 10; // number of shots before empty
const STAMINA_COST = 1; // stamina consumed per shot
const RELOAD_TILT_THRESHOLD = 0.6; // radians of wrist_roll change to trigger reload

export class ShootingSystem {
  constructor(camera) {
    this.camera = camera;
    this.timer = 0;
    this.raycaster = new THREE.Raycaster();
    this.screenCenter = new THREE.Vector2(0, 0);
    this.active = false;

    // Stamina
    this.stamina = MAX_STAMINA;
    this.maxStamina = MAX_STAMINA;
    this._empty = false;

    // Reload tracking — wrist_roll angle
    this._lastWristRoll = null;
    this._reloadAccum = 0; // accumulated absolute rotation since empty
  }

  start() {
    this.timer = 0;
    this.active = true;
    this.stamina = MAX_STAMINA;
    this._empty = false;
    this._lastWristRoll = null;
    this._reloadAccum = 0;
  }

  stop() {
    this.active = false;
  }

  /** Returns cooldown progress 0..1 (1 = about to fire). */
  get cooldownProgress() {
    return Math.min(this.timer / SHOOT_INTERVAL, 1.0);
  }

  /** Returns stamina as 0..1 fraction. */
  get staminaFraction() {
    return this.stamina / this.maxStamina;
  }

  /** Whether the magazine is empty and needs reload. */
  get needsReload() {
    return this._empty;
  }

  /**
   * Feed wrist_roll angle (radians) each frame.
   * Returns true if a reload was triggered.
   */
  updateWristRoll(rad) {
    if (this._lastWristRoll === null) {
      this._lastWristRoll = rad;
      return false;
    }

    // Accumulate absolute rotation delta
    const delta = Math.abs(rad - this._lastWristRoll);
    this._lastWristRoll = rad;

    // Ignore tiny jitter
    if (delta < 0.01) return false;

    this._reloadAccum += delta;

    if (this._reloadAccum >= RELOAD_TILT_THRESHOLD) {
      // Reload!
      this.stamina = MAX_STAMINA;
      this._empty = false;
      this._reloadAccum = 0;
      return true;
    }
    return false;
  }

  /** Force an immediate reload (e.g. debug key). Returns true if stamina wasn't already full. */
  forceReload() {
    if (this.stamina >= MAX_STAMINA) return false;
    this.stamina = MAX_STAMINA;
    this._empty = false;
    this._reloadAccum = 0;
    return true;
  }

  /**
   * Tick the auto-shoot timer.
   * Returns { fired: boolean, hit: Mesh|null } when a shot occurs.
   */
  tick(dt, enemyMeshes) {
    if (!this.active) return null;
    if (this._empty) return null;

    this.timer += dt;
    if (this.timer < SHOOT_INTERVAL) return null;

    // Fire!
    this.timer = 0;

    // Consume stamina
    this.stamina = Math.max(0, this.stamina - STAMINA_COST);
    if (this.stamina <= 0) {
      this._empty = true;
      this._reloadAccum = 0;
    }

    // Raycast from screen center
    this.raycaster.setFromCamera(this.screenCenter, this.camera);
    const intersects = this.raycaster.intersectObjects(enemyMeshes);

    if (intersects.length > 0) {
      return { fired: true, hit: intersects[0].object, point: intersects[0].point };
    }
    return { fired: true, hit: null, point: null };
  }
}
