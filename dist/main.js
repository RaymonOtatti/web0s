/**
 * Web0S — Full-Width Scandinavian Design & Technology System
 * Inspired by Aino Agency (Gothenburg / Oslo)
 * 
 * Features:
 * 1. Real-time ScrollSpy & Browser Section Tracker
 * 2. Scandinavian Live Studio Clock (Buenos Aires, UTC-3)
 * 3. Fast & Whisper-Subtle Text Shimmer (.hoverchar)
 * 4. Microscopic Ambient Matrix Grid Canvas
 * 5. Procedural Retro Arcade Audio Synthesizer (Safe Web Audio API)
 * 6. High-Performance Retro Monospace Arcade: Snekst (Snake) & Textris (Tetris)
 * 7. Panic "Boss Key" Terminal Screen
 * 8. Project Detail Modal Dialog & Mobile Navigation
 */

// ==========================================================================
// 1. Projects Data Definition
// ==========================================================================
const projects = {
  laguardia: {
    id: 'la-guardia',
    count: '001',
    category: 'Real Estate / Web',
    discipline: 'Estrategia Digital, Web & Identidad',
    title: 'La Guardia Barrio Abierto',
    description: 'Un barrio abierto narrado desde su paisaje, su escala humana y la experiencia serena de vivir cerca de todo.',
    image: 'images/laguardia.webp',
    url: 'https://barriolaguardia.com/',
    year: '2026'
  },
  raymon: {
    id: 'raymon-otatti',
    count: '002',
    category: 'Portfolio Creativo / Web',
    discipline: 'Dirección de Arte & Creative Coding',
    title: 'Raymon Otatti Design & Co.',
    description: 'Una experiencia inmersiva y austera donde cada pieza de diseño y dirección de arte adquiere absoluto protagonismo.',
    image: 'images/raymon.webp',
    url: 'https://raymonotatti.com/',
    year: '2026'
  },
  franie: {
    id: 'franie-smith',
    count: '003',
    category: 'Música & Cultura / Web',
    discipline: 'Diseño Web, Identidad & Discografía',
    title: 'Franie Smith',
    description: 'Un espacio digital que reúne música, lanzamientos, fechas en vivo y el universo sonoro y visual de una artista singular.',
    image: 'images/franie.webp',
    url: 'https://franiesmith.com/',
    year: '2026'
  },
  svya: {
    id: 'svya',
    count: '004',
    category: 'Estudio Jurídico / Web',
    discipline: 'Diseño Editorial & Arquitectura Digital',
    title: 'Sáenz Valiente & Asociados',
    description: 'Una presencia sobria, tipográfica y editorial diseñada para un estudio jurídico con sólida trayectoria y visión contemporánea.',
    image: 'images/svya.webp',
    url: null,
    year: '2026'
  }
};

// ==========================================================================
// 2. Real-time ScrollSpy & Browser Section Tracking
// ==========================================================================
const sectionBadge = document.getElementById('current-section-label');
const mobSectionBadge = document.getElementById('mob-section-label');
const navLinks = document.querySelectorAll('.nav-link[data-section]');
const trackedSections = document.querySelectorAll('section[id], section[data-section-name]');

let activeSectionId = 'proyectos';

function updateActiveSection(sectionId, sectionName) {
  if (activeSectionId === sectionId && sectionBadge && sectionBadge.textContent === sectionName) {
    return;
  }
  activeSectionId = sectionId;

  // Update header badge
  if (sectionBadge) sectionBadge.textContent = sectionName;
  if (mobSectionBadge) mobSectionBadge.textContent = sectionName;

  // Update nav links active class
  navLinks.forEach((link) => {
    const isTarget = link.dataset.section === sectionId ||
      (sectionId === 'top' && link.dataset.section === 'proyectos');
    link.classList.toggle('active', isTarget);
  });

  // Update URL hash without jumping the page or polluting history
  if (window.history && window.history.replaceState && sectionId) {
    const newHash = sectionId === 'top' ? '#proyectos' : '#' + sectionId;
    if (window.location.hash !== newHash) {
      window.history.replaceState(null, '', newHash);
    }
  }
}

// High-precision IntersectionObserver for section tracking
if ('IntersectionObserver' in window) {
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -50% 0px',
    threshold: [0, 0.2, 0.5]
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id || 'proyectos';
        const name = entry.target.dataset.sectionName || id.toUpperCase();
        updateActiveSection(id, name);
      }
    });
  }, observerOptions);

  trackedSections.forEach((sec) => observer.observe(sec));
}

// Fallback scroll tracker
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 180;
  trackedSections.forEach((sec) => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    if (scrollPos >= top && scrollPos < top + height) {
      const id = sec.id || 'proyectos';
      const name = sec.dataset.sectionName || id.toUpperCase();
      updateActiveSection(id, name);
    }
  });
}, { passive: true });

// ==========================================================================
// 3. Scandinavian Live Studio Clock (Buenos Aires Time)
// ==========================================================================
function updateStudioClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('es-AR', {
    timeZone: 'America/Argentina/Buenos_Aires',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const navTime = document.getElementById('nav-time');
  const studioTime = document.getElementById('studio-time');

  if (navTime) navTime.textContent = timeString;
  if (studioTime) studioTime.textContent = timeString;
}
setInterval(updateStudioClock, 1000);
updateStudioClock();

// ==========================================================================
// 4. Fast & Whisper-Subtle Text Shimmer (.hoverchar)
// ==========================================================================
const shimmerChars = '01_·-/*';

function bindHoverchar() {
  document.querySelectorAll('.hoverchar').forEach((el) => {
    const originalText = el.dataset.text || el.textContent.trim();
    el.dataset.text = originalText;

    let animId = null;

    el.addEventListener('mouseenter', () => {
      cancelAnimationFrame(animId);
      const start = performance.now();
      const duration = 120; // Ultra-fast micro-shimmer

      function frame(now) {
        const elapsed = now - start;
        const progress = Math.min(1, elapsed / duration);
        const resolvedChars = Math.floor(progress * originalText.length);

        let scrambled = '';
        for (let i = 0; i < originalText.length; i++) {
          if (originalText[i] === ' ' || originalText[i] === '\n') {
            scrambled += originalText[i];
          } else if (i < resolvedChars) {
            scrambled += originalText[i];
          } else {
            scrambled += shimmerChars[Math.floor(Math.random() * shimmerChars.length)];
          }
        }
        el.textContent = scrambled;

        if (progress < 1) {
          animId = requestAnimationFrame(frame);
        } else {
          el.textContent = originalText;
        }
      }
      animId = requestAnimationFrame(frame);
    });
  });
}
bindHoverchar();

// ==========================================================================
// 5. Microscopic Ambient Matrix Grid Canvas
// ==========================================================================
const matrixCanvas = document.getElementById('matrix-canvas');
const gridCoords = document.getElementById('grid-coords');

if (matrixCanvas) {
  const ctx = matrixCanvas.getContext('2d');
  let width = (matrixCanvas.width = window.innerWidth);
  let height = (matrixCanvas.height = window.innerHeight);

  const charW = 16;
  const charH = 24;
  let mouseCol = -1;
  let mouseRow = -1;

  window.addEventListener('resize', () => {
    width = matrixCanvas.width = window.innerWidth;
    height = matrixCanvas.height = window.innerHeight;
  });

  window.addEventListener('mousemove', (e) => {
    mouseCol = Math.floor(e.clientX / charW);
    mouseRow = Math.floor(e.clientY / charH);
    if (gridCoords) {
      gridCoords.textContent = `COLS: ${Math.floor(width / charW)} ROWS: ${Math.floor(height / charH)} [X: ${e.clientX} Y: ${e.clientY}]`;
    }
  }, { passive: true });

  function drawGrid() {
    ctx.clearRect(0, 0, width, height);
    const cols = Math.ceil(width / charW);
    const rows = Math.ceil(height / charH);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.025)';

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const dist = Math.hypot(c - mouseCol, r - mouseRow);
        if (dist < 4) {
          ctx.fillStyle = 'rgba(16, 185, 129, 0.18)';
          ctx.fillRect(c * charW + 7, r * charH + 11, 2, 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.025)';
        } else if ((c + r) % 2 === 0) {
          ctx.fillRect(c * charW + 7, r * charH + 11, 1, 1);
        }
      }
    }
    requestAnimationFrame(drawGrid);
  }
  requestAnimationFrame(drawGrid);
}

// ==========================================================================
// 6. Procedural Retro Arcade Audio Synthesizer (Safe Web Audio API)
// ==========================================================================
let audioEnabled = true;
let audioCtx = null;

function playSound(type) {
  if (!audioEnabled) return;
  try {
    if (!audioCtx && typeof window.AudioContext !== 'undefined') {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    if (!audioCtx) return;

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'move') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.exponentialRampToValueAtTime(75, now + 0.03);
      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
      osc.start(now);
      osc.stop(now + 0.03);
    } else if (type === 'eat') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(340, now);
      osc.frequency.exponentialRampToValueAtTime(680, now + 0.08);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'gameover') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(200, now);
      osc.frequency.exponentialRampToValueAtTime(50, now + 0.3);
      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    } else if (type === 'rotate') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(550, now + 0.04);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === 'clear') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(523, now);
      osc.frequency.setValueAtTime(659, now + 0.07);
      osc.frequency.setValueAtTime(784, now + 0.14);
      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    }
  } catch (e) {
    // Audio failures silently bypassed without breaking gameplay
  }
}

const soundBtn = document.getElementById('game-sound-btn');
if (soundBtn) {
  soundBtn.addEventListener('click', () => {
    audioEnabled = !audioEnabled;
    soundBtn.textContent = audioEnabled ? '♫ Audio: On' : '♫ Audio: Off';
    if (audioEnabled) playSound('move');
  });
}

// ==========================================================================
// 7. HIGH-PERFORMANCE RETRO ARCADE ENGINE: Snekst & Textris
// ==========================================================================
let activeGame = 'snekst'; // 'snekst' | 'textris'
const gameDisplay = document.getElementById('game-mono-display');
const arcadeScreen = document.getElementById('arcade-screen');
const arcadeOverlay = document.getElementById('arcade-overlay');
const overlayTitle = document.getElementById('overlay-title');
const overlaySub = document.getElementById('overlay-sub');
const hudGameName = document.getElementById('hud-game-name');
const hudStatus = document.getElementById('hud-status');
const hudScore = document.getElementById('hud-score');
const hudHighscore = document.getElementById('hud-highscore');
const gameStartBtn = document.getElementById('game-start-btn');
const gamePauseBtn = document.getElementById('game-pause-btn');
const gameRestartBtn = document.getElementById('game-restart-btn');
const arcadeStartBig = document.getElementById('arcade-start-big');
const controlsHint = document.getElementById('arcade-controls-hint');

// High scores
const highScores = {
  snekst: parseInt(localStorage.getItem('web0s_hs_snekst') || '0', 10),
  textris: parseInt(localStorage.getItem('web0s_hs_textris') || '0', 10)
};

function updateHUDStatus(statusText, isGameOver = false) {
  if (!hudStatus) return;
  hudStatus.textContent = statusText;
  if (isGameOver) {
    hudStatus.classList.add('game-over');
  } else {
    hudStatus.classList.remove('game-over');
  }
}

// --------------------------------------------------------------------------
// GAME A: SNEKST (Snake Arcade in Monospace)
// --------------------------------------------------------------------------
const SnakeGame = {
  cols: 30,
  rows: 15,
  snake: [],
  dir: { x: 1, y: 0 },
  nextDir: { x: 1, y: 0 },
  food: { x: 15, y: 7 },
  score: 0,
  timer: null,
  state: 'idle', // 'idle' | 'running' | 'paused' | 'gameover'

  reset() {
    this.score = 0;
    this.dir = { x: 1, y: 0 };
    this.nextDir = { x: 1, y: 0 };
    this.state = 'idle';
    this.snake = [
      { x: 10, y: 7 },
      { x: 9, y: 7 },
      { x: 8, y: 7 },
      { x: 7, y: 7 }
    ];
    this.spawnFood();
    clearInterval(this.timer);
    this.timer = null;
    this.updateHUD();
    updateHUDStatus('LISTO');
    this.showOverlay('S N E K S T', '▶ INICIAR JUEGO', 'Haz click aquí o presiona [ESPACIO / ENTER] para jugar');
    this.drawTitleScreen();
    if (controlsHint) controlsHint.textContent = 'Controles: Flechas o WASD · Pausa: P · Reiniciar: R';
  },

  start(initialDir = null) {
    this.score = 0;
    this.state = 'running';
    this.snake = [
      { x: 10, y: 7 },
      { x: 9, y: 7 },
      { x: 8, y: 7 },
      { x: 7, y: 7 }
    ];
    if (initialDir) {
      this.dir = { ...initialDir };
      this.nextDir = { ...initialDir };
    } else {
      this.dir = { x: 1, y: 0 };
      this.nextDir = { x: 1, y: 0 };
    }
    this.spawnFood();
    this.updateHUD();
    updateHUDStatus('JUGANDO');
    this.hideOverlay();
    if (arcadeScreen) {
      arcadeScreen.classList.add('is-active-game');
      arcadeScreen.focus();
    }

    clearInterval(this.timer);
    this.timer = setInterval(() => this.tick(), 135);
    playSound('eat');
    this.draw();
  },

  spawnFood() {
    let valid = false;
    let attempts = 0;
    while (!valid && attempts < 100) {
      attempts++;
      this.food = {
        x: Math.floor(Math.random() * (this.cols - 2)) + 1,
        y: Math.floor(Math.random() * (this.rows - 2)) + 1
      };
      valid = !this.snake.some(seg => seg.x === this.food.x && seg.y === this.food.y);
    }
  },

  setDir(x, y) {
    if (this.state === 'idle') {
      this.start({ x, y });
      return;
    }
    if (this.state !== 'running') return;

    // Prevent direct 180-degree reverse
    if (this.dir.x + x !== 0 || this.dir.y + y !== 0) {
      this.nextDir = { x, y };
      playSound('move');
    }
  },

  togglePause() {
    if (this.state === 'running') {
      this.state = 'paused';
      clearInterval(this.timer);
      this.timer = null;
      updateHUDStatus('PAUSA');
      this.draw();
    } else if (this.state === 'paused') {
      this.state = 'running';
      this.timer = setInterval(() => this.tick(), 135);
      updateHUDStatus('JUGANDO');
      this.draw();
    }
  },

  tick() {
    if (this.state !== 'running' || activeGame !== 'snekst') return;

    this.dir = { ...this.nextDir };
    let newX = this.snake[0].x + this.dir.x;
    let newY = this.snake[0].y + this.dir.y;

    // Solid border collision
    if (newX <= 0 || newX >= this.cols - 1 || newY <= 0 || newY >= this.rows - 1) {
      this.gameOver();
      return;
    }

    const head = { x: newX, y: newY };

    // Body collision
    if (this.snake.some(seg => seg.x === head.x && seg.y === head.y)) {
      this.gameOver();
      return;
    }

    this.snake.unshift(head);

    // Food collision
    if (head.x === this.food.x && head.y === this.food.y) {
      this.score += 10;
      playSound('eat');
      if (this.score > highScores.snekst) {
        highScores.snekst = this.score;
        localStorage.setItem('web0s_hs_snekst', this.score);
      }
      this.spawnFood();
      this.updateHUD();
    } else {
      this.snake.pop();
    }

    this.draw();
  },

  draw() {
    if (!gameDisplay || activeGame !== 'snekst') return;

    let buffer = '';
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (y === 0 || y === this.rows - 1) {
          buffer += '=';
        } else if (x === 0 || x === this.cols - 1) {
          buffer += '|';
        } else if (x === this.snake[0].x && y === this.snake[0].y) {
          buffer += 'O'; // Head
        } else if (this.snake.some(seg => seg.x === x && seg.y === y)) {
          buffer += '#'; // Body
        } else if (x === this.food.x && y === this.food.y) {
          buffer += '★'; // Star Food
        } else {
          buffer += ' ';
        }
      }
      buffer += '\n';
    }

    if (this.state === 'gameover') {
      buffer += '*** GAME OVER — PRESIONA [R] O [JUGAR] ***';
    } else if (this.state === 'paused') {
      buffer += '*** PAUSA — PRESIONA [P] O [JUGAR] ***';
    } else {
      buffer += `SNEKST v2.6 // Puntos: ${this.score}`;
    }

    gameDisplay.textContent = buffer;
  },

  drawTitleScreen() {
    if (!gameDisplay) return;
    let title = '';
    title += '==============================\n';
    title += '|                            |\n';
    title += '|      S  N  E  K  S  T      |\n';
    title += '|      ================      |\n';
    title += '|                            |\n';
    title += '|    ★  COME LAS ESTRELLAS   |\n';
    title += '|    ▲  FLECHAS O W/A/S/D    |\n';
    title += '|    ❚❚ PAUSA CON [P]        |\n';
    title += '|    ↺  REINICIA CON [R]     |\n';
    title += '|                            |\n';
    title += '|     HAZ CLICK EN JUGAR     |\n';
    title += '|    O PRESIONA [ESPACIO]    |\n';
    title += '|                            |\n';
    title += '==============================\n';
    title += 'ESTADO: LISTO // RECORD: ' + String(highScores.snekst).padStart(4, '0');
    gameDisplay.textContent = title;
  },

  showOverlay(title, btnText, subText) {
    if (overlayTitle) overlayTitle.textContent = title;
    if (arcadeStartBig) arcadeStartBig.textContent = btnText;
    if (overlaySub) overlaySub.textContent = subText;
    if (arcadeOverlay) arcadeOverlay.classList.remove('is-hidden');
  },

  hideOverlay() {
    if (arcadeOverlay) arcadeOverlay.classList.add('is-hidden');
  },

  updateHUD() {
    if (hudScore) hudScore.textContent = String(this.score).padStart(4, '0');
    if (hudHighscore) hudHighscore.textContent = String(highScores.snekst).padStart(4, '0');
  },

  gameOver() {
    this.state = 'gameover';
    clearInterval(this.timer);
    this.timer = null;
    playSound('gameover');
    updateHUDStatus('GAME OVER', true);
    this.showOverlay('GAME OVER', '↺ REINTENTAR', `Puntaje final: ${this.score} pts. Haz click o pulsa R`);
    this.draw();
  },

  destroy() {
    clearInterval(this.timer);
    this.timer = null;
    this.state = 'idle';
  }
};

// --------------------------------------------------------------------------
// GAME B: TEXTRIS (Monospace Block Falling Game / Tetris)
// --------------------------------------------------------------------------
const TetrisGame = {
  cols: 10,
  rows: 16,
  board: [],
  currentPiece: null,
  currentX: 0,
  currentY: 0,
  score: 0,
  timer: null,
  state: 'idle', // 'idle' | 'running' | 'paused' | 'gameover'

  tetrominos: {
    I: [[1, 1, 1, 1]],
    O: [[1, 1], [1, 1]],
    T: [[0, 1, 0], [1, 1, 1]],
    S: [[0, 1, 1], [1, 1, 0]],
    Z: [[1, 1, 0], [0, 1, 1]],
    J: [[1, 0, 0], [1, 1, 1]],
    L: [[0, 0, 1], [1, 1, 1]]
  },

  reset() {
    this.score = 0;
    this.state = 'idle';
    this.board = Array.from({ length: this.rows }, () => Array(this.cols).fill(0));
    clearInterval(this.timer);
    this.timer = null;
    this.updateHUD();
    updateHUDStatus('LISTO');
    SnakeGame.showOverlay('T E X T R I S', '▶ INICIAR JUEGO', 'Haz click aquí o presiona [ESPACIO / ENTER] para jugar');
    this.drawTitleScreen();
    if (controlsHint) controlsHint.textContent = 'Controles: [◄ ►] Mover · [▲] Rotar · [▼] Bajar · [Espacio] Caída';
  },

  start() {
    this.score = 0;
    this.state = 'running';
    this.board = Array.from({ length: this.rows }, () => Array(this.cols).fill(0));
    this.spawnPiece();
    this.updateHUD();
    updateHUDStatus('JUGANDO');
    SnakeGame.hideOverlay();
    if (arcadeScreen) {
      arcadeScreen.classList.add('is-active-game');
      arcadeScreen.focus();
    }

    clearInterval(this.timer);
    this.timer = setInterval(() => this.tick(), 460);
    playSound('eat');
    this.draw();
  },

  spawnPiece() {
    const keys = Object.keys(this.tetrominos);
    const key = keys[Math.floor(Math.random() * keys.length)];
    this.currentPiece = this.tetrominos[key];
    this.currentX = Math.floor((this.cols - this.currentPiece[0].length) / 2);
    this.currentY = 0;

    if (this.collides(this.currentPiece, this.currentX, this.currentY)) {
      this.gameOver();
    }
  },

  collides(piece, offsetX, offsetY) {
    for (let y = 0; y < piece.length; y++) {
      for (let x = 0; x < piece[y].length; x++) {
        if (piece[y][x]) {
          const bx = offsetX + x;
          const by = offsetY + y;
          if (bx < 0 || bx >= this.cols || by >= this.rows) return true;
          if (by >= 0 && this.board[by][bx]) return true;
        }
      }
    }
    return false;
  },

  rotate(piece) {
    return piece[0].map((_, index) => piece.map(row => row[index]).reverse());
  },

  move(dirX) {
    if (this.state === 'idle') { this.start(); return; }
    if (this.state !== 'running' || activeGame !== 'textris') return;

    if (!this.collides(this.currentPiece, this.currentX + dirX, this.currentY)) {
      this.currentX += dirX;
      playSound('move');
      this.draw();
    }
  },

  drop() {
    if (this.state !== 'running' || activeGame !== 'textris') return;
    if (!this.collides(this.currentPiece, this.currentX, this.currentY + 1)) {
      this.currentY += 1;
      this.draw();
    } else {
      this.lockPiece();
    }
  },

  hardDrop() {
    if (this.state === 'idle') { this.start(); return; }
    if (this.state !== 'running' || activeGame !== 'textris') return;

    while (!this.collides(this.currentPiece, this.currentX, this.currentY + 1)) {
      this.currentY += 1;
    }
    playSound('move');
    this.lockPiece();
  },

  rotatePiece() {
    if (this.state === 'idle') { this.start(); return; }
    if (this.state !== 'running' || activeGame !== 'textris') return;

    const rotated = this.rotate(this.currentPiece);
    if (!this.collides(rotated, this.currentX, this.currentY)) {
      this.currentPiece = rotated;
      playSound('rotate');
      this.draw();
    }
  },

  lockPiece() {
    for (let y = 0; y < this.currentPiece.length; y++) {
      for (let x = 0; x < this.currentPiece[y].length; x++) {
        if (this.currentPiece[y][x]) {
          const by = this.currentY + y;
          const bx = this.currentX + x;
          if (by >= 0 && by < this.rows) {
            this.board[by][bx] = 1;
          }
        }
      }
    }
    this.clearLines();
    this.spawnPiece();
    this.draw();
  },

  clearLines() {
    let cleared = 0;
    for (let y = this.rows - 1; y >= 0; y--) {
      if (this.board[y].every(val => val === 1)) {
        this.board.splice(y, 1);
        this.board.unshift(Array(this.cols).fill(0));
        cleared++;
        y++;
      }
    }
    if (cleared > 0) {
      playSound('clear');
      const points = [0, 100, 300, 500, 800][cleared] || 1000;
      this.score += points;
      if (this.score > highScores.textris) {
        highScores.textris = this.score;
        localStorage.setItem('web0s_hs_textris', this.score);
      }
      this.updateHUD();
    }
  },

  togglePause() {
    if (this.state === 'running') {
      this.state = 'paused';
      clearInterval(this.timer);
      this.timer = null;
      updateHUDStatus('PAUSA');
      this.draw();
    } else if (this.state === 'paused') {
      this.state = 'running';
      this.timer = setInterval(() => this.tick(), 460);
      updateHUDStatus('JUGANDO');
      this.draw();
    }
  },

  tick() {
    if (this.state !== 'running' || activeGame !== 'textris') return;
    this.drop();
  },

  draw() {
    if (!gameDisplay || activeGame !== 'textris') return;

    let buffer = '+--------------------+\n';
    for (let y = 0; y < this.rows; y++) {
      buffer += '|';
      for (let x = 0; x < this.cols; x++) {
        let isPiece = false;
        if (this.currentPiece) {
          const py = y - this.currentY;
          const px = x - this.currentX;
          if (py >= 0 && py < this.currentPiece.length && px >= 0 && px < this.currentPiece[py].length) {
            if (this.currentPiece[py][px]) isPiece = true;
          }
        }

        if (isPiece || this.board[y][x]) {
          buffer += '[]';
        } else {
          buffer += ' .';
        }
      }
      buffer += '|\n';
    }
    buffer += '+--------------------+';

    if (this.state === 'gameover') {
      buffer += '\n*** GAME OVER — PRESIONA [R] O [JUGAR] ***';
    } else if (this.state === 'paused') {
      buffer += '\n*** PAUSA — PRESIONA [P] O [JUGAR] ***';
    } else {
      buffer += '\nTEXTRIS // [◄ ►] Mover [▲] Rotar [Espacio] Bajar';
    }

    gameDisplay.textContent = buffer;
  },

  drawTitleScreen() {
    if (!gameDisplay) return;
    let title = '';
    title += '+--------------------+\n';
    title += '|    T E X T R I S   |\n';
    title += '|    =============   |\n';
    title += '|                    |\n';
    title += '|  ◄ ►  MOVER BLOQUE |\n';
    title += '|  ▲    ROTAR PIEZA  |\n';
    title += '|  ▼    ACELERAR     |\n';
    title += '|  SPC  CAÍDA RÁPIDA |\n';
    title += '|  P    PAUSAR JUEGO |\n';
    title += '|  R    REINICIAR    |\n';
    title += '|                    |\n';
    title += '|   CLICK EN [JUGAR] |\n';
    title += '|   O PULSA ESPACIO  |\n';
    title += '|                    |\n';
    title += '+--------------------+\n';
    title += 'ESTADO: LISTO // RECORD: ' + String(highScores.textris).padStart(4, '0');
    gameDisplay.textContent = title;
  },

  updateHUD() {
    if (hudScore) hudScore.textContent = String(this.score).padStart(4, '0');
    if (hudHighscore) hudHighscore.textContent = String(highScores.textris).padStart(4, '0');
  },

  gameOver() {
    this.state = 'gameover';
    clearInterval(this.timer);
    this.timer = null;
    playSound('gameover');
    updateHUDStatus('GAME OVER', true);
    SnakeGame.showOverlay('GAME OVER', '↺ REINTENTAR', `Puntaje final: ${this.score} pts. Haz click o pulsa R`);
    this.draw();
  },

  destroy() {
    clearInterval(this.timer);
    this.timer = null;
    this.state = 'idle';
  }
};

// Start & Trigger Handlers
function startActiveGame(initialDir = null) {
  if (activeGame === 'snekst') {
    if (SnakeGame.state === 'paused') SnakeGame.togglePause();
    else SnakeGame.start(initialDir);
  } else {
    if (TetrisGame.state === 'paused') TetrisGame.togglePause();
    else TetrisGame.start();
  }
}

function pauseActiveGame() {
  if (activeGame === 'snekst') SnakeGame.togglePause();
  else TetrisGame.togglePause();
}

function restartActiveGame() {
  if (activeGame === 'snekst') SnakeGame.start();
  else TetrisGame.start();
}

gameStartBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  startActiveGame();
});

arcadeStartBig?.addEventListener('click', (e) => {
  e.stopPropagation();
  startActiveGame();
});

arcadeScreen?.addEventListener('click', () => {
  if (activeGame === 'snekst' && (SnakeGame.state === 'idle' || SnakeGame.state === 'gameover')) {
    startActiveGame();
  } else if (activeGame === 'textris' && (TetrisGame.state === 'idle' || TetrisGame.state === 'gameover')) {
    startActiveGame();
  } else {
    arcadeScreen.focus();
  }
});

gamePauseBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  pauseActiveGame();
});

gameRestartBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  restartActiveGame();
});

// Switch Tabs between Snekst and Textris
function switchGame(gameName) {
  activeGame = gameName;
  document.querySelectorAll('.arcade-tab').forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.game === gameName);
  });

  if (hudGameName) hudGameName.textContent = gameName === 'snekst' ? 'Snekst' : 'Textris';

  if (gameName === 'snekst') {
    TetrisGame.destroy();
    SnakeGame.reset();
  } else {
    SnakeGame.destroy();
    TetrisGame.reset();
  }
}

document.querySelectorAll('.arcade-tab').forEach((tab) => {
  tab.addEventListener('click', () => switchGame(tab.dataset.game));
});

// Non-Intrusive Keyboard Controls (Respect the Browser scroll!)
window.addEventListener('keydown', (e) => {
  // If user is inside an input, ignore
  if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

  // Boss key toggle: ESC
  if (e.key === 'Escape') {
    const boss = document.getElementById('boss-terminal');
    if (boss) boss.hidden = !boss.hidden;
    return;
  }

  // Check if player is interacting with the arcade
  const isPlayingSnekst = activeGame === 'snekst' && SnakeGame.state === 'running';
  const isPlayingTextris = activeGame === 'textris' && TetrisGame.state === 'running';
  const isArcadeFocused = document.activeElement === arcadeScreen || arcadeScreen?.contains(document.activeElement);

  // If user is just reading the page and arcade is not active/focused:
  // DO NOT INTERCEPT. Allow natural browser scrolling!
  if (!isPlayingSnekst && !isPlayingTextris && !isArcadeFocused) {
    return;
  }

  // Restart key: R
  if (e.key === 'r' || e.key === 'R') {
    restartActiveGame();
    return;
  }

  // Pause key: P
  if (e.key === 'p' || e.key === 'P') {
    pauseActiveGame();
    return;
  }

  // Snekst Playing Controls
  if (activeGame === 'snekst') {
    if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
      e.preventDefault();
      SnakeGame.setDir(0, -1);
    } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
      e.preventDefault();
      SnakeGame.setDir(0, 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
      e.preventDefault();
      SnakeGame.setDir(-1, 0);
    } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
      e.preventDefault();
      SnakeGame.setDir(1, 0);
    } else if (e.key === ' ' || e.key === 'Enter') {
      if (SnakeGame.state !== 'running') {
        e.preventDefault();
        startActiveGame();
      }
    }
  }

  // Textris Playing Controls
  else if (activeGame === 'textris') {
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
      e.preventDefault();
      TetrisGame.move(-1);
    } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
      e.preventDefault();
      TetrisGame.move(1);
    } else if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
      e.preventDefault();
      TetrisGame.rotatePiece();
    } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
      e.preventDefault();
      TetrisGame.drop();
    } else if (e.key === ' ') {
      e.preventDefault();
      TetrisGame.hardDrop();
    } else if (e.key === 'Enter') {
      if (TetrisGame.state !== 'running') {
        e.preventDefault();
        startActiveGame();
      }
    }
  }
});

// Mobile On-screen Touch Controls (Instant pointer response)
document.querySelectorAll('.dpad-btn').forEach((btn) => {
  const handleDir = (e) => {
    e.preventDefault();
    const dir = btn.dataset.dir;
    if (activeGame === 'snekst') {
      if (dir === 'up') SnakeGame.setDir(0, -1);
      if (dir === 'down') SnakeGame.setDir(0, 1);
      if (dir === 'left') SnakeGame.setDir(-1, 0);
      if (dir === 'right') SnakeGame.setDir(1, 0);
    } else if (activeGame === 'textris') {
      if (dir === 'up') TetrisGame.rotatePiece();
      if (dir === 'down') TetrisGame.drop();
      if (dir === 'left') TetrisGame.move(-1);
      if (dir === 'right') TetrisGame.move(1);
    }
  };

  btn.addEventListener('pointerdown', handleDir);
  btn.addEventListener('click', (e) => e.preventDefault());
});

document.getElementById('action-rotate')?.addEventListener('pointerdown', (e) => {
  e.preventDefault();
  if (activeGame === 'textris') TetrisGame.rotatePiece();
});
document.getElementById('action-drop')?.addEventListener('pointerdown', (e) => {
  e.preventDefault();
  if (activeGame === 'textris') TetrisGame.hardDrop();
});

// Initialize with Snake in ready state
SnakeGame.reset();

// Boss Key Toggle
const bossBtn = document.getElementById('boss-btn');
const bossTerminal = document.getElementById('boss-terminal');
const bossClose = document.getElementById('boss-close');

if (bossBtn && bossTerminal) {
  bossBtn.addEventListener('click', () => {
    bossTerminal.hidden = false;
  });
  bossClose?.addEventListener('click', () => {
    bossTerminal.hidden = true;
  });
}

// ==========================================================================
// 8. Project Detail Modal Dialog
// ==========================================================================
const dialog = document.querySelector('.project-dialog');
const dialogCloseBtn = dialog ? dialog.querySelector('.dialog-close') : null;
let openerElement = null;

function openProjectModal(projectId, triggerEl = null) {
  const project = projects[projectId];
  if (!project || !dialog) return;

  openerElement = triggerEl;
  document.getElementById('dialog-count').textContent = project.count;
  document.getElementById('dialog-category').textContent = project.category;
  document.getElementById('dialog-title').textContent = project.title;
  document.getElementById('dialog-description').textContent = project.description;

  const image = document.getElementById('dialog-image');
  image.src = project.image;
  image.alt = `Captura ampliada de la web ${project.title}`;

  const link = document.getElementById('dialog-link');
  const note = document.getElementById('dialog-note');

  if (project.url) {
    link.hidden = false;
    link.href = project.url;
    note.hidden = true;
  } else {
    link.hidden = true;
    note.hidden = false;
    note.textContent = 'En fase de despliegue privado';
  }

  dialog.showModal();
}

if (dialog && dialogCloseBtn) {
  dialogCloseBtn.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    openerElement?.focus();
  });
}

document.querySelectorAll('[data-project]').forEach((button) => {
  button.addEventListener('click', () => {
    openProjectModal(button.dataset.project, button);
  });
});

// ==========================================================================
// 9. Mobile Menu Navigation
// ==========================================================================
const mobileToggle = document.getElementById('mobile-toggle');
const mobileDrawer = document.getElementById('mobile-drawer');

if (mobileToggle && mobileDrawer) {
  mobileToggle.addEventListener('click', () => {
    const isActive = mobileDrawer.classList.toggle('is-active');
    mobileToggle.textContent = isActive ? 'Cerrar' : 'Menú';
  });

  mobileDrawer.querySelectorAll('.mob-link').forEach((link) => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.remove('is-active');
      mobileToggle.textContent = 'Menú';
    });
  });
}
