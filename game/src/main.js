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
scene.background = new THREE.Color(0x888888);
scene.fog = new THREE.Fog(0x888888, 40, 80);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 200);
camera.position.set(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// Lighting
const ambient = new THREE.AmbientLight(0x808080, 0.8);
scene.add(ambient);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(10, 20, 10);
scene.add(dirLight);

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
  const wallSize = 120;
  const halfSize = wallSize / 2;
  const wallGeo = new THREE.PlaneGeometry(wallSize, wallSize);

  const walls = [
    { pos: [0, 0, -halfSize], rot: [0, 0, 0] },           // front
    { pos: [0, 0, halfSize], rot: [0, Math.PI, 0] },       // back
    { pos: [-halfSize, 0, 0], rot: [0, Math.PI / 2, 0] },  // left
    { pos: [halfSize, 0, 0], rot: [0, -Math.PI / 2, 0] },  // right
    { pos: [0, -0.5, 0], rot: [-Math.PI / 2, 0, 0], floor: true }, // floor
    { pos: [0, halfSize, 0], rot: [Math.PI / 2, 0, 0] },   // ceiling
  ];

  for (const w of walls) {
    const tex = createGridTexture();
    if (w.floor) tex.repeat.set(16, 16);
    const mat = new THREE.MeshStandardMaterial({ map: tex, side: THREE.FrontSide });
    const mesh = new THREE.Mesh(wallGeo, mat);
    mesh.position.set(...w.pos);
    mesh.rotation.set(...w.rot);
    scene.add(mesh);
  }
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
