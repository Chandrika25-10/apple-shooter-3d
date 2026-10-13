🍎 Apple Shooter 3D — Forest Range

Apple Shooter 3D — Forest Range is a browser-based, canvas-rendered archery challenge designed to bring interactive physics, escalating difficulty, and character progression into a zero-dependency web experience.

The game models arrow trajectories, target movement, elevation adjustments, and persistent unlocks entirely in vanilla web technologies—running straight out of the box with no installations or builds required.

🌐 Project Links
GitHub Repository: [https://github.com/Chandrika25-10/apple-shooter-3d](https://github.com/Chandrika25-10/apple-shooter-3d) 

Live Demo (GitHub Pages): [https://chandrika25-10.github.io/AppleShooter3D/](https://chandrika25-10.github.io/apple-shooter-3d/)

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
=======
# 🍎 Apple Shooter 3D — Forest Adventure

**Apple Shooter 3D — Forest Adventure** is a browser-playable archery game set in a forest-themed range. Players aim a bow, shoot apples, earn coins, and progress through increasingly challenging levels. The game includes timed and relaxed play modes, keyboard and on-screen controls, sound toggling, character unlocks, and browser-based progress saving.

The project is designed to be easy to run locally in a web browser. A small Python server script (`main.py`) is also included as an optional way to launch the game from a local server.

---

## 🌐 Project Links

- **GitHub Repository:** Add your repository URL here
- **Live Application:** Add your published game URL here, if available

> Replace the placeholder links above with your actual repository and live-game links.

---

## 📌 Project Overview

Apple Shooter is an interactive archery game where the player aims at apples and tries to hit every target in a level. Players can choose between a timed challenge and a no-timer mode.

As the player advances, the levels become more challenging by adding targets and movement. Successful hits award coins, and clearing a level provides a bonus. Coins can be used to unlock additional character outfits.

The project brings together a canvas-based game display, aiming controls, arrow-shooting mechanics, scoring, level progression, sound effects, character selection, and browser storage.

## 🎯 Project Objectives

The main objectives of Apple Shooter are to:

1. Build an interactive browser-based archery game.
2. Provide responsive aiming and shooting controls.
3. Offer both timed and relaxed gameplay modes.
4. Track apple hits, arrows, levels, time, and coins.
5. Increase difficulty as players progress through levels.
6. Add unlockable character outfits and selection.
7. Save coins and character unlocks in browser storage.
8. Provide a simple local setup that can be run from a browser or local server.

---

## ✨ Key Features

### 1. 🏹 Archery Gameplay

Players aim the bow and shoot arrows toward apples. The objective is to hit every required apple and complete the level.

The game interface includes a central play area, aiming controls, a shoot button, and a heads-up display for gameplay information.

### 2. ⏱️ Two Game Modes

Players can choose from two modes at the start:

- **Play — Timed:** Play with a countdown timer.
- **Play — No Timer:** Play without a countdown, allowing more time to aim.

Choose the mode that best suits your preferred style of play.

### 3. 🎯 Aiming and Shooting Controls

The game provides on-screen buttons and keyboard controls so players can adjust their aim and fire arrows.

- Move the aim left or right.
- Adjust elevation up or down.
- Shoot using the on-screen button or the Space key.

### 4. 🍎 Apple Targets and Scoring

Apples are the targets that players must hit to clear a level.

- Each apple hit earns **2 coins**.
- Completing a level awards a level bonus.
- The interface displays the apple count and remaining arrows.

### 5. 📈 Progressive Levels

Levels continue as the player progresses. Later levels introduce more targets and movement, making accurate aiming increasingly challenging.

### 6. 🪙 Coins and Unlockable Characters

Players can earn coins by hitting apples and completing levels. Coins can be used to unlock character outfit variations.

| Character | Unlock cost |
|---|---:|
| Ranger | Free |
| Blue Scout | 35 coins |
| Shadow Elite | 75 coins |
| Sunfire | 120 coins |

Open **Characters** from the main menu to select or unlock an outfit. Use the Back button to return to the main menu.

### 7. 💾 Browser-Based Progress Saving

Coins and character unlocks are saved using the browser's local storage. This allows the game to retain this information in the same browser profile between visits.

Clearing browser site data or using a different browser/profile may remove or separate this saved progress.

### 8. 🔊 Sound Toggle

The sound button lets players switch sound effects on or off during gameplay.

### 9. 📊 Heads-Up Display (HUD)

The game interface displays key gameplay information, including:

- Current level
- Apples hit / total apples
- Remaining arrows
- Coins
- Timer, when applicable
- Gameplay messages and controls

### 10. 🌲 Forest-Themed Interface

The game uses a forest-range theme and a canvas-based game area to present the archery experience. The interface includes a start menu, gameplay controls, and character-selection styling.

---

## 🏗️ System Architecture

The project uses a lightweight browser-based architecture.

```text
              ┌────────────────────────┐
              │         Player         │
              └────────────┬───────────┘
                           │
                           ▼
              ┌────────────────────────┐
              │      Web Browser       │
              │     (Google Chrome)    │
              └────────────┬───────────┘
                           │
                           ▼
              ┌────────────────────────┐
              │      index.html        │
              │ Game layout and HUD    │
              └────────────┬───────────┘
                           │
               ┌───────────┴───────────┐
               ▼                       ▼
      ┌─────────────────┐     ┌─────────────────┐
      │    style.css    │     │     game.js     │
      │ UI and styling  │     │ Gameplay logic  │
      └─────────────────┘     └────────┬────────┘
                                       │
                         ┌─────────────┼─────────────┐
                         ▼             ▼             ▼
                    ┌─────────┐   ┌──────────┐  ┌──────────┐
                    │ Scoring │   │  Levels  │  │  Audio   │
                    └─────────┘   └──────────┘  └──────────┘
                                       │
                                       ▼
                              ┌─────────────────┐
                              │ Browser Storage │
                              │ Coins/unlocks   │
                              └─────────────────┘

                Optional local launch server:
                 main.py → Python HTTP server
```

`main.py` serves the project files locally. The game itself runs in the browser; Python is not used to implement the gameplay logic.

---

## 🔄 Application Workflow

1. Open the game in a browser.
2. Choose **Play — Timed** or **Play — No Timer**.
3. Aim using the on-screen buttons or keyboard.
4. Press **SHOOT** or **Space** to fire an arrow.
5. Hit the apples to earn coins.
6. Clear the required targets to complete the level.
7. Progress to increasingly challenging levels.
8. Use earned coins to unlock character outfits.
9. Return to the game later using the same browser profile to retain saved coins and unlocks.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Game page structure and interface |
| CSS | Layout, styling, and responsive interface |
| JavaScript | Game logic, controls, physics, targets, scoring, levels, and audio |
| HTML Canvas | Drawing the game scene |
| Browser Local Storage | Saving coins and character unlocks |
| Python 3 | Optional local HTTP server (`main.py`) |
| GitHub Pages | Optional static hosting and deployment |

---

## 📂 Project Structure

```text
AppleShooter/
│
├── index.html                 # Game page and interface
├── style.css                  # UI styling and character-selection styling
├── game.js                    # Drawing, physics, targets, scoring, levels,
│                              # audio, and saved unlocks
├── main.py                    # Optional local Python web server
├── README.md                  # Project documentation
└── .github/
    └── workflows/
        └── pages.yml          # GitHub Pages deployment workflow, if included
```

Make sure the files are in the expected locations. In particular, `index.html` loads `style.css` and `game.js`, so keep those files alongside it unless you update their paths in the HTML.

---

## ⚙️ Prerequisites

### Option A: Open directly in a browser

- Google Chrome or another modern web browser
- The extracted project folder

No Python installation or package installation is required for this option.

### Option B: Run using the included Python server

- Python 3
- Google Chrome or another modern web browser

No third-party Python packages are required by the provided `main.py` server script.

---

## 🚀 Installation and Setup

### Step 1: Get the project files

Download and extract the project ZIP, or clone your repository:

```bash
git clone YOUR_REPOSITORY_URL
cd AppleShooter
```

Replace `YOUR_REPOSITORY_URL` with your actual repository URL and adjust the folder name if necessary.

### Step 2: Run directly in Chrome

1. Open the project folder.
2. Double-click `index.html`, or right-click it and choose a browser.
3. Select **Play — Timed** or **Play — No Timer**.

You can also open the project folder in Visual Studio Code and use the **Live Server** extension to serve `index.html`.

### Step 3: Run with Python (optional)

Open a terminal in the project folder and run:

```bash
python main.py
```

If your system uses the `py` launcher on Windows, you can try:

```bash
py main.py
```

The script starts a local server at:

```text
http://127.0.0.1:8000/index.html
```

It also attempts to open the address in your default browser. Keep the terminal open while playing. Press **Ctrl+C** in the terminal to stop the server.

**Troubleshooting:** If port `8000` is already in use, close the other server or change the `PORT` value in `main.py`.

---

## 🎮 Controls

| Control | Action |
|---|---|
| `▲` / `W` | Aim up |
| `▼` / `S` | Aim down |
| `◀` / `A` | Aim left |
| `▶` / `D` | Aim right |
| **SHOOT** / `Space` | Fire an arrow |
| **♫ Sound** | Toggle sound effects |

The on-screen controls can be used instead of the keyboard.

---

## 🧪 Gameplay Tips

- Aim carefully before shooting.
- Adjust both horizontal direction and elevation.
- Watch the apple counter and remaining arrows.
- Try timed mode for a more challenging experience.
- Use no-timer mode to practise aiming.
- Save coins to unlock the character outfit you prefer.

---

## 🌐 Publish on GitHub Pages

The game is browser-based and can be hosted as a static website.

1. Push the required static game files to the root of your GitHub repository.
2. Ensure `index.html`, `style.css`, and `game.js` are included.
3. Open **Settings → Pages** in the repository.
4. Configure the deployment source according to the repository's included GitHub Actions workflow, if present.
5. After deployment completes, open the published Pages URL and test the game.

The Python server (`main.py`) is useful for local development but is not required for GitHub Pages hosting. GitHub Pages will not run the Python server script.

---

## 🔐 Notes and Limitations

- Coins and character unlocks are stored in browser local storage, not in a shared online database.
- Saved progress is specific to the browser profile and device.
- The provided `main.py` serves files locally; it is not a production backend.
- For public deployment, test the game on the published URL and verify that all referenced files load correctly.
- If you add online accounts, shared leaderboards, or server-side saving in the future, those features will require additional backend functionality.

---

## 🎓 Learning Outcomes

This project provides practical experience with:

- HTML, CSS, and JavaScript
- Canvas-based rendering
- Keyboard and button event handling
- Game loops and animation
- Aiming and projectile-style game mechanics
- Collision and target handling
- Score and level management
- Browser local storage
- UI design and interaction
- Running a local Python HTTP server
- Deploying a static website with GitHub Pages

---

## 🔮 Future Enhancements

Possible future improvements include:

- More forest environments and target types
- Additional bows, arrows, and character outfits
- Improved animation and visual effects
- Difficulty settings
- Leaderboards and high-score tracking
- Mobile touch-control improvements
- More sound effects and background music
- Pause, resume, and restart options
- More detailed statistics and achievements
- Online accounts and cloud-based progress saving

---

## 🎯 Conclusion

Apple Shooter 3D — Forest Adventure is a browser-playable archery game that combines aiming, shooting, scoring, level progression, sound controls, and unlockable characters. Its lightweight web-based setup makes it easy to run locally, while the optional Python server and GitHub Pages deployment workflow provide convenient ways to launch and share the project.

---

## 👩‍💻 Contributors

- **Chandrika:** Core Game Logic
- **Hema:** UI & Design
- **Chandini:** Mechanics & Physics
- **Charishma:** Documentation & Testing

---

## 📜 License

This project is developed for educational and academic purposes.
