// --- Game State ---
let scene, camera, renderer;
let apples = [];
let arrows = [];
let bowGroup;
let isAiming = false;
let yaw = 0;
let pitch = 0;
let level = 1;
let applesHit = 0;
let totalApples = 3;
let arrowsRemaining = 8;
let scoreCoins = 0;
let timedMode = false;
let timeLeft = 60;
let timerInterval = null;
let soundEnabled = true;

// DOM Elements
const canvas = document.getElementById('game');
const centerModal = document.getElementById('center');
const levelEl = document.getElementById('level');
const applesEl = document.getElementById('apples');
const arrowsEl = document.getElementById('arrows');
const coinsEl = document.getElementById('coins');
const timerEl = document.getElementById('timer');
const messageEl = document.getElementById('message');
const soundBtn = document.getElementById('sound');

// Sound synthesis using Web Audio API (no external mp3 files needed)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playBeep(freq, type, duration) {
  if (!soundEnabled || audioCtx.state === 'suspended') return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
  gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

function init() {
  // 1. Scene & Camera
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x739ba6);
  scene.fog = new THREE.FogExp2(0x739ba6, 0.015);

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 1.6, 0);

  // 2. Renderer
  renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // 3. Lighting
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x334d35, 0.8);
  scene.add(hemiLight);

  const dirLight = new THREE.DirectionalLight(0xfff0dd, 0.8);
  dirLight.position.set(10, 20, 10);
  scene.add(dirLight);

  // 4. Ground
  const groundGeo = new THREE.PlaneGeometry(200, 200);
  const groundMat = new THREE.MeshLambertMaterial({ color: 0x243e27 });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  scene.add(ground);

  // 5. Trees (Forest)
  for (let i = 0; i < 40; i++) {
    createTree((Math.random() - 0.5) * 80, (Math.random() - 0.5) * 80 - 40);
  }

  // 6. Bow representation
  bowGroup = new THREE.Group();
  const bowMat = new THREE.MeshLambertMaterial({ color: 0x8b5a2b });
  const bowGeo = new THREE.TorusGeometry(0.5, 0.02, 8, 24, Math.PI);
  const bowMesh = new THREE.Mesh(bowGeo, bowMat);
  bowMesh.rotation.z = -Math.PI / 2;
  bowMesh.rotation.y = Math.PI / 2;
  bowGroup.add(bowMesh);
  bowGroup.position.set(0.2, -0.2, -0.6);
  camera.add(bowGroup);
  scene.add(camera);

  // Event Listeners
  window.addEventListener('resize', onWindowResize);
  setupControls();

  // Animation Loop
  animate();
}

function createTree(x, z) {
  if (Math.abs(x) < 5 && Math.abs(z) < 15) return;
  const trunk = new THREE.Mesh(
    new THREE.CylinderGeometry(0.3, 0.4, 4),
    new THREE.MeshLambertMaterial({ color: 0x4a2e18 })
  );
  trunk.position.set(x, 2, z);

  const foliage = new THREE.Mesh(
    new THREE.ConeGeometry(2, 5, 6),
    new THREE.MeshLambertMaterial({ color: 0x1d4d25 })
  );
  foliage.position.set(x, 5.5, z);
  scene.add(trunk);
  scene.add(foliage);
}

function spawnApples() {
  apples.forEach(a => scene.remove(a));
  apples = [];

  const appleMat = new THREE.MeshStandardMaterial({ color: 0xd90429, roughness: 0.3 });
  for (let i = 0; i < totalApples; i++) {
    const apple = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 16), appleMat);
    const zDist = -12 - (level * 2);
    apple.position.set((i - (totalApples - 1) / 2) * 3.5, 1.5 + Math.random() * 1.5, zDist);
    scene.add(apple);
    apples.push(apple);
  }
}

function shootArrow() {
  if (arrowsRemaining <= 0) return;
  arrowsRemaining--;
  updateUI();
  playBeep(440, 'triangle', 0.1);

  const arrow = new THREE.Mesh(
    new THREE.CylinderGeometry(0.02, 0.02, 0.8),
    new THREE.MeshBasicMaterial({ color: 0xcccccc })
  );
  arrow.rotation.x = Math.PI / 2;

  const arrowContainer = new THREE.Group();
  arrowContainer.add(arrow);
  arrowContainer.position.copy(camera.position);
  arrowContainer.rotation.copy(camera.rotation);

  const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
  arrowContainer.userData = {
    velocity: dir.multiplyScalar(40),
    alive: true
  };

  scene.add(arrowContainer);
  arrows.push(arrowContainer);

  if (arrowsRemaining === 0 && applesHit < totalApples) {
    setTimeout(() => {
      if (applesHit < totalApples) showMessage('Out of Arrows! Level Failed.');
    }, 1200);
  }
}

function animate() {
  requestAnimationFrame(animate);

  // Update Camera Rotation
  camera.rotation.set(pitch, yaw, 0, 'YXZ');

  // Apple Animation
  const time = Date.now() * 0.002;
  apples.forEach((apple, idx) => {
    apple.position.y += Math.sin(time + idx) * 0.005;
  });

  // Update Arrows
  for (let i = arrows.length - 1; i >= 0; i--) {
    const a = arrows[i];
    if (!a.userData.alive) continue;

    a.userData.velocity.y -= 0.15; // Gravity
    a.position.addScaledVector(a.userData.velocity, 0.016);

    // Collision Check with Apples
    for (let j = apples.length - 1; j >= 0; j--) {
      const apple = apples[j];
      if (a.position.distanceTo(apple.position) < 0.6) {
        scene.remove(apple);
        apples.splice(j, 1);
        applesHit++;
        scoreCoins += 10;
        updateUI();
        playBeep(880, 'sine', 0.2);

        if (applesHit >= totalApples) {
          nextLevel();
        }
        break;
      }
    }

    // Ground or boundary check
    if (a.position.y < 0 || a.position.z < -80) {
      scene.remove(a);
      arrows.splice(i, 1);
    }
  }

  renderer.render(scene, camera);
}

function nextLevel() {
  level++;
  showMessage(`Level ${level}!`);
  totalApples = Math.min(6, totalApples + 1);
  arrowsRemaining = totalApples + 4;
  applesHit = 0;
  spawnApples();
  updateUI();
}

function showMessage(txt) {
  messageEl.textContent = txt;
  messageEl.style.opacity = '1';
  setTimeout(() => { messageEl.style.opacity = '0'; }, 1500);
}

function updateUI() {
  levelEl.textContent = level;
  applesEl.textContent = `${applesHit} / ${totalApples}`;
  arrowsEl.textContent = arrowsRemaining;
  coinsEl.textContent = scoreCoins;
}

function setupControls() {
  const step = 0.05;
  document.getElementById('up').addEventListener('click', () => pitch = Math.min(pitch + step, 0.6));
  document.getElementById('down').addEventListener('click', () => pitch = Math.max(pitch - step, -0.6));
  document.getElementById('left').addEventListener('click', () => yaw += step);
  document.getElementById('right').addEventListener('click', () => yaw -= step);
  document.getElementById('shoot').addEventListener('click', shootArrow);

  window.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowUp' || e.key === 'w') pitch = Math.min(pitch + step, 0.6);
    if (e.code === 'ArrowDown' || e.key === 's') pitch = Math.max(pitch - step, -0.6);
    if (e.code === 'ArrowLeft' || e.key === 'a') yaw += step;
    if (e.code === 'ArrowRight' || e.key === 'd') yaw -= step;
    if (e.code === 'Space') shootArrow();
  });

  document.getElementById('timed').addEventListener('click', () => startGame(true));
  document.getElementById('relaxed').addEventListener('click', () => startGame(false));

  soundBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    soundBtn.textContent = soundEnabled ? '♫ Sound: On' : '♫ Sound: Off';
    if (audioCtx.state === 'suspended') audioCtx.resume();
  });
}

function startGame(timed) {
  if (audioCtx.state === 'suspended') audioCtx.resume();
  centerModal.style.display = 'none';
  timedMode = timed;
  level = 1;
  applesHit = 0;
  totalApples = 3;
  arrowsRemaining = 8;
  scoreCoins = 0;

  if (timedMode) {
    timeLeft = 60;
    timerInterval = setInterval(() => {
      timeLeft--;
      timerEl.textContent = `${timeLeft}s`;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        showMessage('Time Up! Game Over.');
        setTimeout(() => { centerModal.style.display = 'flex'; }, 2000);
      }
    }, 1000);
  } else {
    timerEl.textContent = '—';
  }

  spawnApples();
  updateUI();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Start game on window load
window.addEventListener('load', init);
