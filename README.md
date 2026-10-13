# Apple Shooter — Forest Adventure

A browser-playable, canvas-based archery game. No Python, package install, or external assets are required.

## Run in Chrome
1. Download and extract the ZIP.
2. Open `index.html` in Google Chrome.
3. Choose **Play — Timed** or **Play — No Timer**.

If you use VS Code, open the extracted folder. You can run `index.html` directly or use the Live Server extension.

## Controls
- **▲ / ▼** and **◀ / ▶**: adjust your bow angle.
- **SHOOT** or **Space**: fire an arrow.
- **A / D / W / S**: keyboard aim controls.
- **♫ Sound**: toggle sound effects.

Aim the dashed sight toward an apple. Each apple hit earns 2 coins; clearing a level earns a level bonus. Levels continue indefinitely and add more targets and movement. Coins and character unlocks are saved in your browser's local storage.

## Characters
Four illustrated outfit variations are included: Ranger (free), Blue Scout (35 coins), Shadow Elite (75 coins), and Sunfire (120 coins). Open **Characters** from the main menu to select or unlock them. The Back button returns to the main menu.

## Publish on GitHub Pages
1. Create a GitHub repository and upload the extracted project files to the repository root.
2. In the repository, open **Settings → Pages**.
3. Choose **GitHub Actions** as the build/deployment source. The included workflow publishes the static game.

## Files
- `index.html` — game layout and interface
- `style.css` — responsive UI and character-selection styling
- `game.js` — drawing, physics, targets, scoring, levels, audio, and saved unlocks
- `.github/workflows/pages.yml` — GitHub Pages deployment workflow
