import * as THREE from 'three';
import URDFLoader from 'urdf-loader';

/**
 * Player model loaded from the LeLamp URDF.
 */
export class PlayerModel {
  constructor(scene) {
    this.scene = scene;
    // Placeholder group so references to player.mesh work before load completes
    this.mesh = new THREE.Group();
    this.mesh.position.set(0, 0, 2);
    scene.add(this.mesh);

    this.robot = null;
  }

  /** Load the URDF model. Returns a promise that resolves when ready. */
  async load() {
    return new Promise((resolve, reject) => {
      const loader = new URDFLoader();

      // The URDF references meshes as relative paths like "assets/base_plate.stl".
      // URDFLoader auto-derives workingPath from the URL ("/models/"),
      // so "assets/base_plate.stl" resolves to "/models/assets/base_plate.stl".
      loader.load('/models/robot.urdf', (robot) => {
        this.robot = robot;
        console.log('[Player] URDF loaded. Available joints:', Object.keys(robot.joints));

        // URDF is in meters — scale up for the game world
        robot.scale.set(8, 8, 8);

        // Rotate so the robot stands upright (URDF Z-up → Three.js Y-up)
        robot.rotation.x = -Math.PI / 2;

        this.mesh.add(robot);
        resolve();
      }, undefined, (err) => {
        reject(err);
      });
    });
  }

  /** Rotate the model to face the given yaw (radians). */
  setYaw(rad) {
    this.mesh.rotation.y = rad;
  }

  /** Set a named joint to a value (radians). */
  setJoint(name, value) {
    if (this.robot) {
      const joint = this.robot.joints[name];
      if (joint) {
        const changed = joint.setJointValue(value);
        if (!this._loggedJoints) {
          console.log(`[Player] setJoint("${name}", ${value}) changed=${changed}`);
        }
      } else if (!this._loggedJoints) {
        console.warn(`[Player] Joint "${name}" not found in robot.joints`);
      }
    }
  }

  /** Call once after first setJoint batch to suppress further logs. */
  _suppressJointLogs() {
    this._loggedJoints = true;
  }
}
