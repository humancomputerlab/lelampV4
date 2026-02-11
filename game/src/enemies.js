import * as THREE from 'three';

const SPAWN_RADIUS = 50;
const REACH_DISTANCE = 3;

export class EnemySystem {
  constructor(scene) {
    this.scene = scene;
    this.enemies = [];
    this.wave = 0;
    this.enemiesRemaining = 0;
    this.spawnQueue = 0;
    this.spawnTimer = 0;
    this.baseSpeed = 4;

    // Shared geometry and material
    this.geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    this.materials = [
      new THREE.MeshPhongMaterial({ color: 0xff2222, emissive: 0x330000 }),
      new THREE.MeshPhongMaterial({ color: 0xff4444, emissive: 0x440000 }),
      new THREE.MeshPhongMaterial({ color: 0xcc1111, emissive: 0x220000 }),
    ];
  }

  startWave(waveNum) {
    this.wave = waveNum;
    const count = 5 + 3 * waveNum;
    this.spawnQueue = count;
    this.enemiesRemaining = count;
    this.spawnTimer = 0;
  }

  get waveComplete() {
    return this.enemiesRemaining <= 0 && this.spawnQueue <= 0;
  }

  /** Get all enemy meshes for raycasting. */
  get meshes() {
    return this.enemies.map(e => e.mesh);
  }

  removeEnemy(mesh) {
    const idx = this.enemies.findIndex(e => e.mesh === mesh);
    if (idx === -1) return;
    const enemy = this.enemies.splice(idx, 1)[0];
    this.scene.remove(enemy.mesh);
    enemy.mesh.geometry = undefined; // Release reference (shared geo)
    this.enemiesRemaining--;
  }

  tick(dt) {
    // Spawn enemies from queue
    this.spawnTimer -= dt;
    if (this.spawnQueue > 0 && this.spawnTimer <= 0) {
      this._spawnOne();
      this.spawnQueue--;
      // Stagger spawns: faster in later waves
      this.spawnTimer = Math.max(0.3, 1.5 - this.wave * 0.1);
    }

    // Move enemies toward origin
    const speed = this.baseSpeed + this.wave * 0.5;
    const toRemove = [];

    for (const enemy of this.enemies) {
      const dir = enemy.mesh.position.clone().negate().normalize();
      enemy.mesh.position.addScaledVector(dir, speed * dt);

      // Rotate for visual effect
      enemy.mesh.rotation.x += dt * 1.5;
      enemy.mesh.rotation.y += dt * 2.0;

      // Check if reached player
      if (enemy.mesh.position.length() < REACH_DISTANCE) {
        toRemove.push(enemy);
      }
    }

    // Remove enemies that reached the player, return count
    let reached = 0;
    for (const enemy of toRemove) {
      const idx = this.enemies.indexOf(enemy);
      if (idx !== -1) {
        this.enemies.splice(idx, 1);
        this.scene.remove(enemy.mesh);
        this.enemiesRemaining--;
        reached++;
      }
    }

    return reached; // Number of enemies that hit the player
  }

  _spawnOne() {
    // Random point on sphere
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    const x = SPAWN_RADIUS * Math.sin(phi) * Math.cos(theta);
    const z = SPAWN_RADIUS * Math.sin(phi) * Math.sin(theta);
    // Upper hemisphere only: y always positive
    const y = SPAWN_RADIUS * Math.abs(Math.cos(phi)) + 2;

    const pos = new THREE.Vector3(x, y, z);

    const mat = this.materials[Math.floor(Math.random() * this.materials.length)];
    const mesh = new THREE.Mesh(this.geometry, mat);
    mesh.position.copy(pos);

    this.scene.add(mesh);
    this.enemies.push({ mesh });
  }

  clear() {
    for (const enemy of this.enemies) {
      this.scene.remove(enemy.mesh);
    }
    this.enemies = [];
    this.spawnQueue = 0;
    this.enemiesRemaining = 0;
  }
}
