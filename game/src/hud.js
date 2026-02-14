const COOLDOWN_CIRCUMFERENCE = 157; // 2 * PI * 25

export class HUD {
  constructor() {
    this.scoreEl = document.getElementById('score');
    this.waveEl = document.getElementById('wave-display');
    this.healthEl = document.getElementById('health');
    this.cooldownRing = document.getElementById('cooldown-ring');
    this.announceEl = document.getElementById('wave-announce');
    this.connectionEl = document.getElementById('connection-status');
    this.debugEl = document.getElementById('debug-indicator');
    this.enemyIndicator = document.getElementById('enemy-indicator');
    this.staminaBarFill = document.getElementById('stamina-bar-fill');
    this.staminaBarContainer = document.getElementById('stamina-bar-container');
    this.staminaLabel = document.getElementById('stamina-label');

    this.score = 0;
    this.wave = 1;
    this.health = 3;
    this._announceTimeout = null;
    this._reloadTimeout = null;
  }

  setDebugMode(on) {
    this.debugEl.style.display = on ? 'block' : 'none';
  }

  setConnected(connected) {
    this.connectionEl.textContent = connected ? 'CONNECTED' : 'DISCONNECTED';
    this.connectionEl.style.color = connected ? '#0f0' : '#888';
  }

  updateScore(score) {
    this.score = score;
    this.scoreEl.textContent = score;
  }

  addScore(points) {
    this.score += points;
    this.scoreEl.textContent = this.score;
  }

  updateWave(wave) {
    this.wave = wave;
    this.waveEl.textContent = `WAVE: ${wave}`;
  }

  updateHealth(health) {
    this.health = health;
    this.healthEl.textContent = '\u2764 '.repeat(health);
  }

  updateCooldown(progress) {
    // progress 0..1, ring fills up as cooldown progresses
    const offset = COOLDOWN_CIRCUMFERENCE * (1 - progress);
    this.cooldownRing.setAttribute('stroke-dashoffset', offset);

    // Color shifts from dim to bright as it fills
    if (progress >= 1) {
      this.cooldownRing.setAttribute('stroke', '#ff0');
    } else {
      this.cooldownRing.setAttribute('stroke', '#0f0');
    }
  }

  announceWave(wave) {
    clearTimeout(this._announceTimeout);
    this.announceEl.textContent = `WAVE ${wave}`;
    this.announceEl.style.opacity = '1';
    this._announceTimeout = setTimeout(() => {
      this.announceEl.style.opacity = '0';
    }, 2000);
  }

  updateStamina(fraction, empty) {
    this.staminaBarFill.style.width = `${fraction * 100}%`;
    if (empty) {
      this.staminaBarContainer.classList.add('empty');
      this.staminaLabel.classList.add('empty');
      this.staminaLabel.textContent = 'TILT TO RELOAD';
    } else {
      this.staminaBarContainer.classList.remove('empty');
      this.staminaLabel.classList.remove('empty');
      this.staminaLabel.textContent = 'STAMINA';
    }
  }

  announceReload() {
    clearTimeout(this._reloadTimeout);
    this.announceEl.textContent = 'RELOADED!';
    this.announceEl.style.opacity = '1';
    this._reloadTimeout = setTimeout(() => {
      this.announceEl.style.opacity = '0';
    }, 1000);
  }

  updateEnemyIndicator(angleDeg, opacity, visible) {
    if (!visible) {
      this.enemyIndicator.setAttribute('opacity', '0');
      return;
    }
    this.enemyIndicator.setAttribute('opacity', opacity.toFixed(2));
    this.enemyIndicator.setAttribute('transform', `rotate(${angleDeg} 30 30)`);
  }

  reset() {
    this.score = 0;
    this.wave = 1;
    this.health = 3;
    this.updateScore(0);
    this.updateWave(1);
    this.updateHealth(3);
    this.updateCooldown(0);
    this.updateStamina(1, false);
  }
}
