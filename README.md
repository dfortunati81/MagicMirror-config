# MagicMirror² Custom Setup

This repository houses a fully configured MagicMirror² installation, including:

- **`config/config.js`**: Your complete mirror configuration (modules, positions, API keys).
- **`css/custom.css`**: All global styling, brightness/overlay controls, and helper classes.
- **Helper scripts**: Auto-backup of `config.js` on edits or startup.
- **Module folder**: Any third-party or custom modules installed under `modules/`.

Deployment on a new Raspberry Pi is a breeze: clone, install dependencies, and start.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation & Setup](#installation--setup)
   - 2.1 [System Preparation](#system-preparation)
   - 2.2 [Node.js & npm](#nodejs--npm)
   - 2.3 [Cloning & Dependencies](#cloning--dependencies)
   - 2.4 [Initial Configuration](#initial-configuration)
3. [Auto-Backup Script](#auto-backup-script)
4. [Styling & CSS](#styling--css)
   - 4.1 [Brightness & Overlays](#brightness--overlays)
   - 4.2 [Helper Classes](#helper-classes)
   - 4.3 [Module-Specific Styles](#module-specific-styles)
5. [Modules & Positions](#modules--positions)
   - 5.1 [Built-in Modules](#built-in-modules)
   - 5.2 [Custom Modules](#custom-modules)
   - 5.3 [Positioning with Classes](#positioning-with-classes)
6. [Running the Mirror](#running-the-mirror)
7. [Optional: PM2 Autostart](#optional-pm2-autostart)
8. [Git & Version Control](#git--version-control)

---

## Prerequisites

- Raspberry Pi (4 or 5) with SD card
- Power supply, HDMI (or portrait display)
- Network access (Ethernet/WiFi)
- SSH access (optional but recommended)

---

## Installation & Setup

### 2.1 System Preparation

```bash
# Flash Raspberry Pi OS Full and boot
ssh pi@<PI_IP>
sudo apt update && sudo apt full-upgrade -y
sudo reboot
```

*(Optional) Rotate display to portrait in `~/.config/wayfire.ini` or `/boot/config.txt`.*

### 2.2 Node.js & npm

Choose one method:

**A) System-wide via NodeSource** (Node 18 LTS)
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
node --version
npm --version
```

**B) Per-user via NVM**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
# Reload shell, then:
nvm install --lts
nvm alias default 'lts/*'
node -v
npm -v
```

### 2.3 Cloning & Dependencies

```bash
cd ~
git clone git@github.com:dfortunati81/MagicMirror-config.git MagicMirror
cd MagicMirror
npm install
```

### 2.4 Initial Configuration

Copy the sample config if needed:
```bash
cp config/config.js.sample config/config.js
``` 
Then edit `config/config.js` with your modules and API keys.

---

## Auto-Backup Script

To snapshot your live `config.js` before edits, we include a backup script:

```bash
# run manually:
cp config/config.js config/config_$(date +%Y-%m-%d_%H-%M-%S).js
```

Or require the helper at top of `config.js`:
```js
require('../scripts/backup-config');
``` 
This copies `config.js` → `config_YYYY-MM-DD_HH-MM-SS.js` on each startup.

---

## Styling & CSS

All custom styles live in `css/custom.css`:

### 4.1 Brightness & Overlays

- `--brightness-level`: global screen dimming
- `#overlay` layer with `--overlay-opacity`

### 4.2 Helper Classes

- `.shifted`, `.shifted2`: relative nudges for modules
- CSS variables for `--module-shift-x/y` and `--module2-shift-x/y`

### 4.3 Module-Specific Styles

- **MoonPhase**: blend modes, drop shadows, fixed width
- **Compliments**: font sizing, text-shadow, centered

---

## Modules & Positions

### 5.1 Built-in Modules

We load and position these core modules:
- **Clock** (top-left)
- **Calendar**, **Weather**, **Compliments**, **Newsfeed**, **MoonPhase**, etc.

### 5.2 Custom Modules

Any additional modules you’ve placed under `modules/`, e.g.:
- `modules/MMM-YourModule`
- Custom widget for Energy Dashboard

### 5.3 Positioning with Classes

In `config.js`, tag modules:
```js
{ module: 'MoonPhase', position: 'top_right', classes: 'shifted' }
{ module: 'Compliments', position: 'bottom_center', classes: 'shifted2' }
```
Your CSS picks up those classes to apply offsets.

---

## Running the Mirror

```bash
npm run start  # development mode with logs
npm run start:prod  # kiosk mode without logs
```

Enable remote debugging on port `9222` in kiosk if needed:
```sh
DISPLAY=:0 chromium-browser --kiosk http://localhost:8080 --remote-debugging-port=9222
```

---

## Optional: PM2 Autostart

Use PM2 for auto-restarts and boot launch:
```bash
sudo npm install -g pm2
pm2 start ~/MagicMirror/mm.sh --name MagicMirror
pm2 save
pm2 startup
```

---

## Git & Version Control

- Commit your `config.js`, `css/custom.css`, and any custom modules to this repo.
- Use branches for feature experiments.
- On a new Pi: `git clone` → `npm install` → `npm run start`.
- Tag releases (`v1.0`, `v1.1`) for stable snapshots.

---

Enjoy a rock-solid, portable MagicMirror² setup—fully scripted, backed up, and versioned. Feel free to open Issues or PRs for enhancements!
