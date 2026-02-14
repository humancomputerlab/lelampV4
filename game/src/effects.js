import * as THREE from 'three';

const PARTICLE_COUNT = 12;
const PARTICLE_SPEED = 15;
const PARTICLE_LIFE = 0.6;

export class EffectsSystem {
  constructor(scene) {
    this.scene = scene;
    this.explosions = [];
    this.projectiles = [];

    // Shared particle geometry
    this.particleGeo = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  }

  /** Spawn explosion particles at position. */
  explode(position, color = 0xff8800) {
    const particles = [];
    const mat = new THREE.MeshBasicMaterial({ color });

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const mesh = new THREE.Mesh(this.particleGeo, mat);
      mesh.position.copy(position);

      // Random velocity
      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
      ).normalize().multiplyScalar(PARTICLE_SPEED * (0.5 + Math.random() * 0.5));

      this.scene.add(mesh);
      particles.push({ mesh, vel });
    }

    this.explosions.push({ particles, life: PARTICLE_LIFE });
  }

  /** Spawn a solid ray beam from a point toward a target (or fallback direction). */
  spawnProjectile(from, to, fallbackDir) {
    from = from.clone();
    from.y += 1.5;
    const dir = to ? to.clone().sub(from).normalize() : (fallbackDir || new THREE.Vector3(0, 0, -1));
    const endpoint = to || from.clone().addScaledVector(dir, 100);
    const length = from.distanceTo(endpoint);
    const midpoint = from.clone().add(endpoint).multiplyScalar(0.5);

    const group = new THREE.Group();
    const rot = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);

    // Thin bright core
    const beamGeo = new THREE.CylinderGeometry(0.25, 0.25, length, 6, 1);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0xffff00,
      transparent: true,
      opacity: 0.9,
    });
    const beam = new THREE.Mesh(beamGeo, beamMat);
    beam.position.copy(midpoint);
    beam.quaternion.copy(rot);
    group.add(beam);

    // Wider outer glow
    const glowGeo = new THREE.CylinderGeometry(0.83, 0.83, length, 6, 1);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xffff00,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    glow.position.copy(midpoint);
    glow.quaternion.copy(rot);
    group.add(glow);

    this.scene.add(group);

    this.projectiles.push({ mesh: group, life: 0.62, beam, glow, startLife: 0.62 });
  }

  /** Spawn a hit marker (brief flash) at a world position. */
  spawnHitMarker(position) {
    const geo = new THREE.SphereGeometry(0.5, 8, 8);
    const mat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(position);
    this.scene.add(mesh);

    this.projectiles.push({ mesh, life: 0.1 });
  }

  tick(dt) {
    // Update explosions
    for (let i = this.explosions.length - 1; i >= 0; i--) {
      const exp = this.explosions[i];
      exp.life -= dt;

      if (exp.life <= 0) {
        // Remove all particles
        for (const p of exp.particles) {
          this.scene.remove(p.mesh);
        }
        this.explosions.splice(i, 1);
        continue;
      }

      // Move particles outward, shrink
      const scale = exp.life / PARTICLE_LIFE;
      for (const p of exp.particles) {
        p.mesh.position.addScaledVector(p.vel, dt);
        p.mesh.scale.setScalar(scale);
      }
    }

    // Update projectiles/hit markers
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const proj = this.projectiles[i];
      proj.life -= dt;
      if (proj.life <= 0) {
        this.scene.remove(proj.mesh);
        if (proj.mesh.geometry) proj.mesh.geometry.dispose();
        this.projectiles.splice(i, 1);
      } else if (proj.beam) {
        // Fade the beam out
        const t = proj.life / proj.startLife;
        proj.beam.material.opacity = 0.9 * t;
        proj.glow.material.opacity = 0.3 * t;
      }
    }
  }

  clear() {
    for (const exp of this.explosions) {
      for (const p of exp.particles) {
        this.scene.remove(p.mesh);
      }
    }
    this.explosions = [];
    for (const proj of this.projectiles) {
      this.scene.remove(proj.mesh);
    }
    this.projectiles = [];
  }
}
