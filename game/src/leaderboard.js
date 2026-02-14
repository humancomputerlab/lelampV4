const STORAGE_KEY = 'lelamp_leaderboard';
const MAX_ENTRIES = 10;

export class Leaderboard {
  constructor() {
    this.entries = this._load();
    this.currentEntryIndex = -1;

    this.bodyEl = document.getElementById('leaderboard-body');
    this.nameInput = document.getElementById('player-name');
    this.submitBtn = document.getElementById('submit-score');
    this.nameEntryEl = document.getElementById('name-entry');

    this.submitBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this._onSubmit();
    });

    this.nameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.stopPropagation();
        this._onSubmit();
      }
    });

    // Prevent clicks on the leaderboard area from restarting the game
    document.getElementById('leaderboard').addEventListener('click', (e) => e.stopPropagation());
    this.nameEntryEl.addEventListener('click', (e) => e.stopPropagation());
  }

  /** Show the game-over leaderboard with pending score submission. */
  show(wave, score) {
    this._pendingWave = wave;
    this._pendingScore = score;
    this.currentEntryIndex = -1;

    // Show name entry
    this.nameEntryEl.style.display = 'flex';
    this.nameInput.value = '';
    this.nameInput.focus();

    this._render();
  }

  _onSubmit() {
    const name = this.nameInput.value.trim().toUpperCase() || 'AAA';
    this._addEntry(name, this._pendingWave, this._pendingScore);
    this.nameEntryEl.style.display = 'none';
    this._render();
  }

  _addEntry(name, wave, score) {
    const entry = { name, wave, score, date: Date.now() };
    this.entries.push(entry);
    // Sort by wave descending, then score descending
    this.entries.sort((a, b) => b.wave - a.wave || b.score - a.score);
    // Trim to max
    this.entries = this.entries.slice(0, MAX_ENTRIES);
    // Find where the new entry ended up
    this.currentEntryIndex = this.entries.findIndex(
      (e) => e.date === entry.date && e.name === entry.name
    );
    this._save();
  }

  _render() {
    const rows = this.entries.map((entry, i) => {
      const isCurrent = i === this.currentEntryIndex;
      return `<tr class="${isCurrent ? 'current' : ''}">
        <td class="rank">${i + 1}.</td>
        <td>${entry.name}</td>
        <td>${entry.wave}</td>
        <td>${entry.score}</td>
      </tr>`;
    });

    // Fill remaining rows to always show at least a few
    while (rows.length < 5) {
      rows.push(`<tr><td class="rank">${rows.length + 1}.</td><td>---</td><td>-</td><td>-</td></tr>`);
    }

    this.bodyEl.innerHTML = rows.join('');
  }

  _load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch { /* ignore */ }
    return [];
  }

  _save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.entries));
  }
}
