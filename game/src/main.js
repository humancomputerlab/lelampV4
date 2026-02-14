import * as THREE from 'three';
import { GameWebSocket } from './websocket.js';
import { CameraController } from './camera.js';
import { PlayerModel } from './player.js';
import { EnemySystem } from './enemies.js';
import { ShootingSystem } from './shooting.js';
import { HUD } from './hud.js';
import { EffectsSystem } from './effects.js';
import { Leaderboard } from './leaderboard.js';

// --- Configuration ---
const WS_PORT = 8765;
const MAX_HEALTH = 3;
const POINTS_PER_KILL = 100;
const WAVE_DELAY = 3; // seconds between waves

// --- Detect debug mode from URL ---
const urlParams = new URLSearchParams(window.location.search);
let debugMode = urlParams.has('debug');
const godMode = urlParams.has('godmode');

// --- Three.js setup ---
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
scene.fog = new THREE.Fog(0x000000, 40, 80);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 200);
camera.position.set(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// Lighting
const ambient = new THREE.AmbientLight(0x808080, 1.2);
scene.add(ambient);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(10, 20, 10);
scene.add(dirLight);

// Light aimed at the far wall so it's not dark
const frontLight = new THREE.DirectionalLight(0xffffff, 0.6);
frontLight.position.set(0, 15, 5);
frontLight.target.position.set(0, 10, -60);
scene.add(frontLight);
scene.add(frontLight.target);

// Warehouse walls
function createGridTexture() {
  const size = 512;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#999999';
  ctx.fillRect(0, 0, size, size);

  ctx.strokeStyle = '#222222';
  ctx.lineWidth = 2;
  const cellSize = size / 8;
  for (let i = 0; i <= 8; i++) {
    const pos = i * cellSize;
    ctx.beginPath();
    ctx.moveTo(pos, 0);
    ctx.lineTo(pos, size);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, pos);
    ctx.lineTo(size, pos);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 4);
  return texture;
}

{
  // Corridor that expands into a larger room ahead
  // Narrow near the player, wide at the far end (funnel shape)
  const corridorLength = 60;   // depth from player to front wall
  const nearHalfWidth = 5;     // half-width at the player end
  const farHalfWidth = 40;     // half-width at the far end
  const wallHeight = 30;

  // Side wall geometry: a trapezoid built from two triangles
  // Each side wall goes from (±nearHalfWidth, 0) to (±farHalfWidth, -corridorLength)
  // We build custom geometry for the angled walls
  function buildSideWall(nearX, farX, side) {
    // 'side' = 1 for right wall, -1 for left wall (controls normal direction)
    const geo = new THREE.BufferGeometry();
    const halfH = wallHeight / 2;
    // Vertices: near-bottom, near-top, far-bottom, far-top
    const vertices = new Float32Array([
      nearX, -halfH, 0,            // 0: near bottom
      nearX,  halfH, 0,            // 1: near top
      farX,  -halfH, -corridorLength, // 2: far bottom
      farX,   halfH, -corridorLength, // 3: far top
    ]);
    // Two triangles, wound so normal faces inward
    let indices;
    if (side > 0) {
      // Right wall: normal faces -X (inward)
      indices = [0, 2, 1, 1, 2, 3];
    } else {
      // Left wall: normal faces +X (inward)
      indices = [0, 1, 2, 1, 3, 2];
    }
    geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geo.setIndex(indices);
    // UVs for texturing
    const uvs = new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]);
    geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    geo.computeVertexNormals();
    return geo;
  }

  // Front wall (wide, at the far end)
  const frontWallWidth = farHalfWidth * 2;
  const frontWallGeo = new THREE.PlaneGeometry(frontWallWidth, wallHeight);
  const frontTex = createGridTexture();
  const frontMat = new THREE.MeshStandardMaterial({ map: frontTex, side: THREE.FrontSide });
  const frontMesh = new THREE.Mesh(frontWallGeo, frontMat);
  frontMesh.position.set(0, wallHeight / 2 - 0.5, -corridorLength);
  scene.add(frontMesh);

  // Left wall (angled portion: player to far end)
  const leftGeo = buildSideWall(-nearHalfWidth, -farHalfWidth, -1);
  const leftTex = createGridTexture();
  const leftMat = new THREE.MeshStandardMaterial({ map: leftTex, side: THREE.DoubleSide });
  const leftMesh = new THREE.Mesh(leftGeo, leftMat);
  leftMesh.position.y = wallHeight / 2 - 0.5;
  scene.add(leftMesh);

  // Right wall (angled portion: player to far end)
  const rightGeo = buildSideWall(nearHalfWidth, farHalfWidth, 1);
  const rightTex = createGridTexture();
  const rightMat = new THREE.MeshStandardMaterial({ map: rightTex, side: THREE.DoubleSide });
  const rightMesh = new THREE.Mesh(rightGeo, rightMat);
  rightMesh.position.y = wallHeight / 2 - 0.5;
  scene.add(rightMesh);

  // Straight extensions behind the player (z=0 to z=+behindLength) at nearHalfWidth
  const behindLength = 15;
  const behindWallGeo = new THREE.PlaneGeometry(behindLength, wallHeight);

  // Left behind extension
  const leftBehindTex = createGridTexture();
  const leftBehindMat = new THREE.MeshStandardMaterial({ map: leftBehindTex, side: THREE.DoubleSide });
  const leftBehindMesh = new THREE.Mesh(behindWallGeo, leftBehindMat);
  leftBehindMesh.position.set(-nearHalfWidth, wallHeight / 2 - 0.5, behindLength / 2);
  leftBehindMesh.rotation.set(0, Math.PI / 2, 0);
  scene.add(leftBehindMesh);

  // Right behind extension
  const rightBehindTex = createGridTexture();
  const rightBehindMat = new THREE.MeshStandardMaterial({ map: rightBehindTex, side: THREE.DoubleSide });
  const rightBehindMesh = new THREE.Mesh(behindWallGeo, rightBehindMat);
  rightBehindMesh.position.set(nearHalfWidth, wallHeight / 2 - 0.5, behindLength / 2);
  rightBehindMesh.rotation.set(0, Math.PI / 2, 0);
  scene.add(rightBehindMesh);

  // Back wall connecting the two extensions (dead end)
  const backWallWidth = nearHalfWidth * 2;
  const backWallGeo = new THREE.PlaneGeometry(backWallWidth, wallHeight);
  const backTex = createGridTexture();
  const backMat = new THREE.MeshStandardMaterial({ map: backTex, side: THREE.FrontSide });
  const backMesh = new THREE.Mesh(backWallGeo, backMat);
  backMesh.position.set(0, wallHeight / 2 - 0.5, behindLength);
  backMesh.rotation.set(0, Math.PI, 0);
  scene.add(backMesh);

  // Floor (full rectangular, extends under the corridor)
  const floorGeo = new THREE.PlaneGeometry(farHalfWidth * 2, corridorLength * 1.5);
  const floorTex = createGridTexture();
  floorTex.repeat.set(8, 8);
  const floorMat = new THREE.MeshStandardMaterial({ map: floorTex, side: THREE.FrontSide });
  const floorMesh = new THREE.Mesh(floorGeo, floorMat);
  floorMesh.rotation.x = -Math.PI / 2;
  floorMesh.position.set(0, -0.5, -corridorLength * 0.4);
  scene.add(floorMesh);

  // Ceiling
  const ceilGeo = new THREE.PlaneGeometry(farHalfWidth * 2, corridorLength * 1.5);
  const ceilTex = createGridTexture();
  const ceilMat = new THREE.MeshStandardMaterial({ map: ceilTex, side: THREE.FrontSide });
  const ceilMesh = new THREE.Mesh(ceilGeo, ceilMat);
  ceilMesh.rotation.x = Math.PI / 2;
  ceilMesh.position.set(0, wallHeight - 0.5, -corridorLength * 0.4);
  scene.add(ceilMesh);
}

// --- Systems ---
const hud = new HUD();
const leaderboard = new Leaderboard();
const player = new PlayerModel(scene);
const enemies = new EnemySystem(scene);
const shooting = new ShootingSystem(camera);
const effects = new EffectsSystem(scene);
let cameraCtrl = null;

// --- WebSocket ---
const ws = new GameWebSocket();

ws.addEventListener('connected', () => hud.setConnected(true));
ws.addEventListener('disconnected', () => hud.setConnected(false));

ws.addEventListener('config', (e) => {
  // Server can indicate debug mode
  if (e.detail.debug && !debugMode) {
    debugMode = true;
    initCamera();
  }
});

ws.addEventListener('position', (e) => {
  if (cameraCtrl) {
    cameraCtrl.update(e.detail.yaw, e.detail.pitch);
  }
  if (e.detail.joints) {
    for (const [name, rad] of Object.entries(e.detail.joints)) {
      if (name === 'servo1') continue; // base yaw handled by camera
      player.setJoint(name, rad);
    }
    player._suppressJointLogs();

    // Feed wrist_roll (servo4) to shooting system for reload detection
    if (e.detail.joints.servo4 !== undefined) {
      const reloaded = shooting.updateWristRoll(e.detail.joints.servo4);
      if (reloaded) {
        hud.announceReload();
        ws.send({ type: 'reload' });
      }
    }
  }
});

// --- Game state ---
let gameState = 'start'; // 'start' | 'playing' | 'wave_transition' | 'game_over'
let health = MAX_HEALTH;
let wave = 0;
let waveTimer = 0;
const clock = new THREE.Clock();

// --- Camera init ---
function initCamera() {
  cameraCtrl = new CameraController(camera, renderer, debugMode);
  hud.setDebugMode(debugMode);
}

// --- Game flow ---
function startGame() {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('game-over-screen').style.display = 'none';
  document.getElementById('hud').style.display = 'block';

  gameState = 'playing';
  health = MAX_HEALTH;
  wave = 0;
  hud.reset();
  enemies.clear();
  effects.clear();
  shooting.start();

  nextWave();
}

function nextWave() {
  wave++;
  hud.updateWave(wave);
  hud.announceWave(wave);
  enemies.startWave(wave);

  ws.send({ type: 'wave_start', wave });
}

function gameOver() {
  gameState = 'game_over';
  shooting.stop();
  document.getElementById('hud').style.display = 'none';

  const screen = document.getElementById('game-over-screen');
  screen.style.display = 'flex';
  screen.querySelector('.final-wave').textContent = `REACHED WAVE ${wave}`;
  screen.querySelector('.final-score').textContent = `SCORE: ${hud.score}`;

  leaderboard.show(wave, hud.score);

  ws.send({ type: 'game_over', score: hud.score, wave });
}

// --- Input ---
document.getElementById('start-screen').addEventListener('click', () => {
  startGame();
});

document.querySelector('#game-over-screen .restart-hint').addEventListener('click', () => {
  startGame();
});

// Debug: press R to reload stamina
window.addEventListener('keydown', (e) => {
  if (debugMode && e.key === 'r' && gameState === 'playing') {
    if (shooting.forceReload()) {
      hud.announceReload();
    }
  }
});

// --- Resize ---
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// --- Game loop ---
function animate() {
  requestAnimationFrame(animate);

  const dt = Math.min(clock.getDelta(), 0.1); // Cap delta to prevent spiraling

  if (cameraCtrl) {
    cameraCtrl.tick();
    player.setYaw(cameraCtrl.currentYawValue);
  }

  if (gameState === 'playing') {
    // Update enemies
    const reached = enemies.tick(dt);
    if (reached > 0 && !godMode) {
      health -= reached;
      hud.updateHealth(health);
      if (health <= 0) {
        gameOver();
        return;
      }
    }

    // Auto-shoot
    const shotResult = shooting.tick(dt, enemies.meshes);
    if (shotResult?.fired) {
      ws.send({ type: 'shoot' });

      // Projectile visual — originates from the player model
      const camForward = new THREE.Vector3();
      camera.getWorldDirection(camForward);
      effects.spawnProjectile(player.mesh.position.clone(), shotResult.point, camForward);

      if (shotResult.hit) {
        // Hit!
        const pos = shotResult.hit.position.clone();
        enemies.removeEnemy(shotResult.hit);
        effects.explode(pos, 0xff4400);
        if (shotResult.point) effects.spawnHitMarker(shotResult.point);
        hud.addScore(POINTS_PER_KILL);
        ws.send({ type: 'hit', points: POINTS_PER_KILL });
      } else {
        ws.send({ type: 'miss' });
      }
    }

    // Nearest enemy indicator
    if (enemies.enemies.length > 0) {
      let nearestDist = Infinity;
      let nearestScreen = null;

      for (const enemy of enemies.enemies) {
        const dist = enemy.mesh.position.length();
        if (dist < nearestDist) {
          nearestDist = dist;
          nearestScreen = enemy.mesh.position.clone().project(camera);
        }
      }

      const angleDeg = Math.atan2(nearestScreen.x, nearestScreen.y) * (180 / Math.PI);
      const opacity = THREE.MathUtils.clamp(1 - nearestDist / 50, 0.3, 1.0);
      const screenDist = Math.sqrt(nearestScreen.x ** 2 + nearestScreen.y ** 2);
      const visible = screenDist > 0.1;

      hud.updateEnemyIndicator(angleDeg, opacity, visible);
    } else {
      hud.updateEnemyIndicator(0, 0, false);
    }

    // Cooldown ring
    hud.updateCooldown(shooting.cooldownProgress);

    // Stamina bar
    hud.updateStamina(shooting.staminaFraction, shooting.needsReload);

    // Wave completion check
    if (enemies.waveComplete) {
      gameState = 'wave_transition';
      waveTimer = WAVE_DELAY;
    }
  } else if (gameState === 'wave_transition') {
    waveTimer -= dt;
    if (waveTimer <= 0) {
      gameState = 'playing';
      nextWave();
    }
  }

  // Effects always tick
  effects.tick(dt);

  renderer.render(scene, camera);
}

// --- Init ---
async function init() {
  // Connect WebSocket to the server on the same host (or localhost for debug)
  const wsHost = window.location.hostname || 'localhost';
  ws.connect(`ws://${wsHost}:${WS_PORT}`);

  // Load the URDF robot model before starting the game loop
  await player.load();

  initCamera();
  hud.updateHealth(MAX_HEALTH);

  clock.start();
  animate();
}

init();
