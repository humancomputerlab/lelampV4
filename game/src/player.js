import * as THREE from 'three';

/**
 * Visible player capsule standing at the origin.
 */
export class PlayerModel {
  constructor(scene) {
    const geo = new THREE.CapsuleGeometry(0.5, 1.5, 8, 16);
    const mat = new THREE.MeshPhongMaterial({
      color: 0x00aaff,
      emissive: 0x003366,
      shininess: 60,
    });

    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.position.set(0, 1.25, 0);
    scene.add(this.mesh);
  }

  /** Rotate the capsule to face the given yaw (radians). */
  setYaw(rad) {
    this.mesh.rotation.y = rad;
  }
}
