# PixelBot v3.0.0 🎨

Advanced Auto-Placing Bot for pixel canvas games (**Pixelya**, **Pixmap**, **PixelPlanet**, **wplace**, **gplace**, and clones) featuring a sleek **blue-purple gradient theme** and **pixel-perfect crop selection**.

---

## ✨ Features

- **Pixel-Perfect Crop Tool**: Interactive crop overlay with **pixel grid snapping** — selection snaps precisely to pixel boundaries without misalignments or partial pixel cuts.
- **Adaptive Pixel Scaling**: Small templates (like 32×32 icons/cursors) automatically scale up crisply (`image-rendering: pixelated`) for effortless, comfortable selection.
- **WebSocket Automation**: Native WebSocket connectivity for real-time chunk synchronization and pixel placement.
- **Color Quantization**: Automatically maps uploaded template colors to site-specific palettes (nearest-neighbor & Floyd-Steinberg).
- **Placement Strategies**: Random, lines, chess, borders, and human-like delays/patterns.
- **Template Defense**: Automatically repairs damaged pixels on completed art.
- **Captcha Notifications**: Background alerts forwarded to Telegram bots and Discord webhooks.
- **Blue-Purple Theme**: Modern UI styled with `#4a90e2 → #9b59b6` gradient accents.

---

## 🚀 Installation

### Option 1: Chrome / Opera Extension (Recommended)

1. Download or extract `pixelbot-extension-v3.0.0.zip`.
2. Open your browser and go to `chrome://extensions` (or `opera://extensions`).
3. Turn on **Developer mode** (top right).
4. Click **Load unpacked** and select the `darkbot-extension/select-this-in-chrome-extensions` folder.
5. Open any supported pixel canvas site!

### Option 2: Tampermonkey Userscript

1. Install the [Tampermonkey](https://www.tampermonkey.net/) extension.
2. Install `initer.user.js` (which loads `pixels.user-bot.js`).
3. Open any supported pixel canvas site!

---

## 🎮 Supported Sites

- `*.pixelya.fun`
- `*.pixmap.fun`
- `*.pixelplanet.fun`
- `*.wplace.live`
- `*.gplace.fun`
- `*.pixuniverse.fun`
- `*.fuckyouarkeros.fun`
- `localhost`

---

## 📄 License

Personal use only.
