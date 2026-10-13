🍎 Apple Shooter 3D — Forest Range
Apple Shooter 3D — Forest Range is a browser-based, canvas-rendered archery challenge designed to bring interactive physics, escalating difficulty, and character progression into a zero-dependency web experience.

The game models arrow trajectories, target movement, elevation adjustments, and persistent unlocks entirely in vanilla web technologies—running straight out of the box with no installations or builds required.

🌐 Project Links
GitHub Repository: [https://github.com/Chandrika25-10/AppleShooter3D](https://github.com/Chandrika25-10/AppleShooter3D) (or your repository URL)

Live Demo (GitHub Pages): [https://Chandrika25-10.github.io/AppleShooter3D/](https://Chandrika25-10.github.io/AppleShooter3D/)

📌 Project Overview
Traditional browser arcade games often rely on heavy game engines or external runtimes that require complex setups. Apple Shooter 3D — Forest Range demonstrates how fluid gameplay, responsive HUD elements, physics calculations, and local persistence can be achieved using native browser capabilities alone.

Players step into the shoes of a forest archer tasked with hitting moving targets across endless levels. If an arrow misses or the timer runs out, the run ends—challenging players to master arc, angle, and timing.

Key challenges addressed by the project:

How can pseudo-3D projectile physics and arcing trajectories run efficiently on an HTML5 canvas?

How can player progress and outfit unlocks persist across browser reloads without a dedicated server database?

How can responsive on-screen touch controls coexist seamlessly with desktop keyboard hotkeys?

🎯 Project Objectives
Deliver a responsive, hardware-accelerated 2D/3D archery simulation on HTML5 Canvas.

Provide precise aiming controls via both keyboard shortcuts and touch/mouse HUD panels.

Support multiple gameplay modes catering to both casual and competitive players.

Implement an in-game economy with coin rewards and character customization unlocks.

Persist high scores, collected coins, and unlocked skins using browser storage.

Enable zero-configuration deployment via GitHub Actions to GitHub Pages.

✨ Key Features
1. 🏹 Physics & Trajectory Mechanics
Calculates arrow velocity, elevation angle, and parabolic gravity arcs in real time. The dashed sightline provides trajectory guidance as players adjust elevation and aim.

2. 🎮 Multiple Game Modes
Play — Timed: Race against a countdown timer to clear all targets before time expires.

Play — No Timer (Relaxed): Focus entirely on precision and archery fundamentals at your own pace.

3. 🎯 Progressive Difficulty & Dynamic Targets
Levels scale infinitely:

Target count increases as you clear stages.

Apples begin moving in complex patterns, testing lead-time calculation and reflex speeds.

Quiver limits require strategic arrow conservation.

4. 🪙 Economy & Character Customization
Target Rewards: Earn 2 coins for every apple struck.

Level Bonuses: Earn extra coins upon clearing a stage.

Outfits Included:

Ranger (Default / Free)

Blue Scout (35 coins)

Shadow Elite (75 coins)

Sunfire (120 coins)

5. 💾 Local State Persistence
Player coin totals and unlocked outfits are saved directly inside browser localStorage, ensuring progress remains intact between browser sessions without requiring account creation.

6. 📱 Cross-Device Controls & HUD
On-screen touch D-pad and shoot buttons for mobile/tablet screens.

Full desktop keyboard support (WASD / Arrow keys / Spacebar).

Real-time HUD displaying Level, Apple count, Arrows remaining, Coins, and Timer.

7. ♫ Synthesized Audio System
Built-in sound effects provide dynamic feedback for bow drawing, arrow release, hits, misses, and UI clicks, toggleable at any time via the HUD sound button.

🏗️ System Architecture
Plaintext
                    ┌─────────────────────────┐
                    │          Player         │
                    └────────────┬────────────┘
                                 │
                   Keyboard / Touch / Mouse
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │      HUD & DOM UI       │
                    │  (index.html / style.css)│
                    └────────────┬────────────┘
                                 │
                            Events / I/O
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │     Game Core Engine    │
                    │        (game.js)        │
                    └──────┬───────────┬──────┘
                           │           │
             ┌─────────────┘           └─────────────┐
             ▼                                       ▼
   ┌───────────────────┐                   ┌───────────────────┐
   │ Canvas Renderer   │                   │ State & Storage   │
   │ - Physics / Arc   │                   │ - Coins & Unlocks │
   │ - Target Motion   │                   │ - localStorage    │
   │ - Audio Synth     │                   └───────────────────┘
   └───────────────────┘
🔄 Application Workflow
Plaintext
1. Open index.html in Browser
          ↓
2. Title Screen: Choose Game Mode (Timed vs. Relaxed)
          ↓
3. Initialize Level, Canvas, & Assets
          ↓
4. Aim Bow (Adjust Horizontal Angle & Vertical Elevation)
          ↓
5. Release Arrow (Run Physics & Arc Calculation)
          ↓
6. Collision Detection (Hit Target or Miss)
          ↓
7. Update Score, Coins, & Target Count
          ↓
8. Check Win/Loss Condition (Level Clear vs. Out of Arrows/Time)
          ↓
9. Store Coins & Level Data in LocalStorage
          ↓
10. Advance to Next Level / Shop Unlocks
🛠️ Technology Stack
Technology	Purpose
HTML5 Canvas	High-performance 2D/3D rendering of targets, arrows, and range scenery
CSS3	Modern HUD overlay styling, glassmorphism panels, and responsive grid layout
JavaScript (ES6+)	Game loop, projectile physics, state management, and collision logic
Web Audio API	Procedural sound generation and audio playback
Browser LocalStorage	Client-side persistence for coins, unlocked characters, and preferences
GitHub Actions	Automated CI/CD deployment pipeline to GitHub Pages
📂 Project Structure
Plaintext
AppleShooter3D/
│
├── index.html                   # Core HTML skeleton, canvas, and HUD overlays
├── style.css                    # UI styles, responsive controls, and modal themes
├── game.js                      # Game engine, physics, state, audio, and render loop
│
├── .github/
│   └── workflows/
│       └── pages.yml            # GitHub Actions automated deployment workflow
│
├── .gitignore                   # Ignored files and system metadata
└── README.md                    # Project documentation
⚙️ Prerequisites
No servers, runtimes, or database engines are required to run this game locally. You only need:

Any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari)

(Optional) VS Code with the Live Server extension for local testing

🚀 Installation and Setup
Step 1: Clone the Repository
Bash
git clone https://github.com/Chandrika25-10/AppleShooter3D.git
Navigate into the project directory:

Bash
cd AppleShooter3D
Step 2: Run the Game
Method A: Direct Browser Launch
Simply double-click index.html or drag and drop it into any open browser window.

Method B: VS Code Live Server
Open the project folder in VS Code.

Right-click index.html and click Open with Live Server.

The game will launch automatically at:

Plaintext
http://127.0.0.1:5500/index.html
🎮 Controls Reference
Action	Keyboard	On-Screen Buttons
Aim Up / Down	▲ / ▼ or W / S	▲ / ▼ Buttons
Aim Left / Right	◀ / ▶ or A / D	◀ / ▶ Buttons
Shoot Arrow	Spacebar	➤ SHOOT Button
Toggle Audio	—	♫ Sound Button
🚀 Deployment (GitHub Pages)
The project includes a ready-to-use GitHub Actions workflow in .github/workflows/pages.yml:

Push your project files to your GitHub repository:

Bash
git add .
git commit -m "Initial commit"
git push origin main
Navigate to your repository on GitHub.

Go to Settings → Pages.

Under Build and deployment → Source, select GitHub Actions.

The workflow will automatically publish the static site.

🎓 Learning Outcomes
This project demonstrates practical implementation of:

Pure vanilla web development without heavy frameworks or bloated bundles.

2D Canvas coordinate geometry, angles, and parabolic gravity formulas.

Collision detection between moving bodies and projectile paths.

Clean separation of UI state (DOM/CSS) and simulation logic (Canvas/JS).

Web Audio synthesis for responsive game sounds.

Client-side storage modeling using localStorage.

🔮 Future Enhancements
🎯 Wind direction and variable resistance factors.

🏹 Different bow types with variable draw speeds and arrow velocities.

🏆 Global leaderboard integration via lightweight backend APIs.

📱 Gyroscope-based mobile aiming controls.

🎨 Additional target environments (desert, dungeon, castle).

👩‍💻 Contributors
Chandrika — Core Game Logic

Hema — UI & Design

Chandini — Mechanics & Physics

Charishma — Documentation & Testing

📜 License
This project is developed and distributed for educational and academic purposes.
