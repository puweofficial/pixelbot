// ===== PIXELBOT - ADVANCED AUTO-PLACING BOT v3.0.0 =====
// Preserves all user methods: Human Placing, Standard Lines, Follow Placing (with indicator), Cooldown Accumulation
// Adds Pixel-Perfect Visual Crop Overlay with pixel-grid snapping & adaptive scaling

(function () {
    'use strict';

    // Inject custom CSS for blue-purple gradient theme
    const customStyle = document.createElement('style');
    customStyle.textContent = `
        /* Blue-purple gradient theme */
        .pixelbot-ui {
            position: fixed;
            top: 20px;
            right: 20px;
            width: 320px;
            background: linear-gradient(180deg, rgba(20, 10, 45, 0.98) 0%, rgba(10, 0, 30, 0.96) 100%);
            border: 2px solid #6c5ce7;
            border-radius: 12px;
            padding: 16px;
            z-index: 2147483647;
            color: #e0e0ff;
            font-family: system-ui, -apple-system, sans-serif;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), 0 0 15px rgba(108, 92, 231, 0.3);
            user-select: none;
        }
        .pixelbot-ui h2 {
            margin: 0 0 12px 0;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            letter-spacing: 1px;
            background: linear-gradient(90deg, #4a90e2, #9b59b6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .pixelbot-ui .tab-container {
            display: flex;
            margin-bottom: 12px;
            background: rgba(10, 0, 30, 0.6);
            border-radius: 6px;
            padding: 2px;
            border: 1px solid rgba(108, 92, 231, 0.3);
        }
        .pixelbot-ui .tab {
            flex: 1;
            padding: 8px;
            background: transparent;
            border: none;
            color: #c8b6ff;
            cursor: pointer;
            text-align: center;
            border-radius: 5px;
            font-weight: 500;
            font-size: 13px;
            transition: background 0.2s, color 0.2s;
        }
        .pixelbot-ui .tab:hover {
            color: #ffffff;
        }
        .pixelbot-ui .tab.active {
            background: linear-gradient(135deg, #4a90e2 0%, #9b59b6 100%);
            color: #ffffff;
            font-weight: bold;
            box-shadow: 0 2px 8px rgba(108, 92, 231, 0.4);
        }
        .pixelbot-ui .tab-content {
            display: none;
        }
        .pixelbot-ui .tab-content.active {
            display: block;
        }
        .pixelbot-ui label {
            display: block;
            margin: 8px 0 4px 0;
            color: #c8b6ff;
            font-size: 12px;
            font-weight: 500;
        }
        .pixelbot-ui .checkbox-label {
            display: flex;
            align-items: center;
            margin: 10px 0 6px 0;
            color: #e0e0ff;
            font-size: 12px;
            cursor: pointer;
        }
        .pixelbot-ui .checkbox-label input {
            width: auto;
            margin-right: 8px;
            cursor: pointer;
            accent-color: #9b59b6;
        }
        .pixelbot-ui input:not([type="checkbox"]), .pixelbot-ui select {
            width: 100%;
            padding: 8px 10px;
            background: rgba(20, 10, 45, 0.8);
            border: 1px solid #6c5ce7;
            color: #ffffff;
            border-radius: 6px;
            box-sizing: border-box;
            outline: none;
            font-size: 13px;
            transition: border-color 0.2s, box-shadow 0.2s;
        }
        .pixelbot-ui input:not([type="checkbox"]):focus, .pixelbot-ui select:focus {
            border-color: #9b59b6;
            box-shadow: 0 0 8px rgba(155, 89, 182, 0.5);
        }
        .pixelbot-ui .row-inputs {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
        }
        .pixelbot-ui .btn-group {
            display: flex;
            gap: 6px;
            margin: 6px 0;
        }
        .pixelbot-ui button {
            width: 100%;
            padding: 9px 12px;
            margin: 4px 0;
            background: linear-gradient(135deg, #4a90e2 0%, #9b59b6 100%);
            border: 1px solid #6c5ce7;
            color: #ffffff;
            border-radius: 6px;
            cursor: pointer;
            font-weight: bold;
            font-size: 12px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
            transition: background 0.2s, transform 0.1s, box-shadow 0.2s;
        }
        .pixelbot-ui button:hover {
            background: linear-gradient(135deg, #6c5ce7 0%, #9b59b6 100%);
            box-shadow: 0 4px 12px rgba(108, 92, 231, 0.4);
        }
        .pixelbot-ui button:active {
            transform: translateY(1px);
        }
        .pixelbot-ui button.secondary {
            background: rgba(108, 92, 231, 0.2);
            border: 1px solid #6c5ce7;
            color: #e0e0ff;
        }
        .pixelbot-ui button.secondary:hover {
            background: rgba(108, 92, 231, 0.4);
        }
        .pixelbot-ui button.danger {
            background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
            border: 1px solid #c0392b;
        }
        .pixelbot-ui .status {
            margin-top: 12px;
            padding: 10px 12px;
            background: rgba(10, 0, 30, 0.85);
            border: 1px solid rgba(108, 92, 231, 0.4);
            border-radius: 8px;
            font-size: 12px;
        }
        .pixelbot-ui .status div {
            margin: 3px 0;
            display: flex;
            justify-content: space-between;
        }
        .pixelbot-ui .status span.val {
            font-weight: bold;
            color: #9b59b6;
            font-family: monospace;
        }

        /* Follow placing glowing indicator */
        .pixelbot-indicator {
            position: fixed;
            width: 22px;
            height: 22px;
            background: rgba(108, 92, 231, 0.45);
            border: 2px solid #9b59b6;
            box-shadow: 0 0 15px #4a90e2;
            border-radius: 50%;
            pointer-events: none;
            z-index: 2147483646;
            transform: translate(-50%, -50%);
            animation: pixelbot-pulse 1.2s infinite alternate;
        }
        @keyframes pixelbot-pulse {
            0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.7; }
            100% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
        }

        /* Visual Crop Overlay (Pixel-Perfect) */
        .pixelbot-crop-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(5, 0, 20, 0.88);
            backdrop-filter: blur(2px);
            z-index: 2147483647;
            cursor: crosshair;
            user-select: none;
            touch-action: none;
        }
        .pixelbot-crop-infobar {
            position: fixed;
            top: 15px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, rgba(20, 10, 45, 0.96), rgba(10, 0, 30, 0.96));
            border: 1px solid #6c5ce7;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6), 0 0 12px rgba(108, 92, 231, 0.3);
            border-radius: 8px;
            padding: 8px 16px;
            color: #e0e0ff;
            font-size: 13px;
            font-family: system-ui, -apple-system, sans-serif;
            display: flex;
            align-items: center;
            gap: 12px;
            pointer-events: auto;
            z-index: 2147483648;
        }
        .pixelbot-crop-infobar .badge {
            background: linear-gradient(135deg, #4a90e2, #9b59b6);
            color: #ffffff;
            font-family: monospace;
            font-size: 12px;
            padding: 2px 8px;
            border-radius: 4px;
            font-weight: bold;
        }
        .pixelbot-crop-infobar button {
            padding: 4px 12px;
            border-radius: 4px;
            border: 1px solid #6c5ce7;
            cursor: pointer;
            font-weight: bold;
            font-size: 12px;
            color: #ffffff;
            transition: opacity 0.2s;
        }
        .pixelbot-crop-infobar button.apply-btn {
            background: linear-gradient(135deg, #4a90e2, #9b59b6);
            box-shadow: 0 2px 6px rgba(108, 92, 231, 0.4);
        }
        .pixelbot-crop-infobar button.cancel-btn {
            background: rgba(255, 255, 255, 0.1);
            color: #e0e0ff;
        }
        .pixelbot-crop-img {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            image-rendering: pixelated;
            border: 2px solid #6c5ce7;
            box-shadow: 0 0 30px rgba(108, 92, 231, 0.4);
            pointer-events: none;
            user-select: none;
        }
        .pixelbot-crop-selection-box {
            position: fixed;
            border: 2px dashed #9b59b6;
            background: rgba(108, 92, 231, 0.3);
            box-shadow: 0 0 10px rgba(155, 89, 182, 0.5);
            pointer-events: none;
            box-sizing: border-box;
        }
    `;

    if (document.head) {
        document.head.appendChild(customStyle);
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            if (document.head) document.head.appendChild(customStyle);
        });
    }

    // ===== BOT STATE =====
    const botState = {
        queue: [],
        pixelsPlaced: 0,
        isRunning: false,
        placementMethod: 'human', // 'human', 'lines'
        followPlacing: false,
        followX: 0,
        followY: 0,
        accumulatedCooldown: 0,
        maxCooldown: 10,
        template: null,           // { width, height, pixels, originalPixels, originalWidth, originalHeight, canvas, dataUrl }
        templateX: 0,
        templateY: 0,
        cropX: 0,
        cropY: 0,
        cropWidth: 0,
        cropHeight: 0,
        apiCooldown: 0
    };

    // ===== SITE DETECTION =====
    function detectSite() {
        const hostname = window.location.hostname;
        if (hostname.includes('pixelya')) return 'pixelya';
        if (hostname.includes('pixmap')) return 'pixmap';
        if (hostname.includes('pixelplanet')) return 'pixelplanet';
        if (hostname.includes('wplace')) return 'wplace';
        if (hostname.includes('gplace')) return 'gplace';
        if (hostname.includes('pixuniverse')) return 'pixuniverse';
        return 'unknown';
    }

    // ===== PIXEL PLACEMENT =====
    async function placePixel(x, y, color) {
        const site = detectSite();

        // Add human-like small jitter if human placement is active
        let finalX = x;
        let finalY = y;
        if (botState.placementMethod === 'human') {
            // Optional micro-jitter for organic placement
            const jitterX = Math.floor(Math.random() * 3) - 1; // -1, 0, 1
            const jitterY = Math.floor(Math.random() * 3) - 1;
            finalX = x + jitterX;
            finalY = y + jitterY;
        }

        switch (site) {
            case 'pixelya':
            case 'pixmap':
                return await placePixelStandard(finalX, finalY, color);
            case 'pixelplanet':
                return await placePixelPlanet(finalX, finalY, color);
            default:
                return await placePixelStandard(finalX, finalY, color);
        }
    }

    async function placePixelStandard(x, y, color) {
        try {
            // If the canvas page has a native engine or event bus exposed, invoke it
            if (window.pixelPlanetEvents && typeof window.pixelPlanetEvents.emit === 'function') {
                window.pixelPlanetEvents.emit('place_pixel', { x, y, color });
            }

            const response = await fetch('/api/pixel', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ x, y, color })
            });

            if (response.ok) {
                const data = await response.json().catch(() => ({}));
                if (data && data.cooldown) {
                    botState.apiCooldown = data.cooldown;
                }
                return true;
            }
            return false;
        } catch (error) {
            console.error('[PixelBot] Placement error:', error);
            return false;
        }
    }

    async function placePixelPlanet(x, y, color) {
        try {
            const response = await fetch('/api/pixel', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ x, y, color })
            });
            if (response.ok) {
                const data = await response.json().catch(() => ({}));
                if (data && data.cooldown) {
                    botState.apiCooldown = data.cooldown;
                }
                return true;
            }
            return false;
        } catch (error) {
            console.error('[PixelBot] PixelPlanet placement error:', error);
            return false;
        }
    }

    // ===== 1. HUMAN PLACING METHOD =====
    async function humanPlacingLoop() {
        if (!botState.isRunning || botState.queue.length === 0) return;

        const maxAccumulation = botState.maxCooldown || botState.apiCooldown || 10;

        while (botState.accumulatedCooldown < maxAccumulation && botState.isRunning) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            botState.accumulatedCooldown++;
            updateUI();
        }

        const cdUnit = botState.apiCooldown || 10;
        const pixelsToPlace = Math.min(botState.queue.length, Math.max(1, Math.floor(botState.accumulatedCooldown / cdUnit)));

        for (let i = 0; i < pixelsToPlace && botState.isRunning; i++) {
            const pixel = botState.queue.shift();
            if (!pixel) break;

            const success = await placePixel(pixel.x, pixel.y, pixel.color);
            if (success) {
                botState.pixelsPlaced++;
                botState.accumulatedCooldown = Math.max(0, botState.accumulatedCooldown - cdUnit);
            } else {
                botState.queue.push(pixel); // Requeue failed pixel
            }
            updateUI();
            await new Promise(resolve => setTimeout(resolve, 120));
        }

        if (botState.isRunning) {
            setTimeout(humanPlacingLoop, 1000);
        }
    }

    // ===== 2. FOLLOW PLACING METHOD (WITH INDICATOR) =====
    function showFollowIndicator(x, y) {
        if (!botState.followPlacing) return;

        let indicator = document.querySelector('.pixelbot-indicator');
        if (!indicator) {
            indicator = document.createElement('div');
            indicator.className = 'pixelbot-indicator';
            document.body.appendChild(indicator);
        }
        indicator.style.left = x + 'px';
        indicator.style.top = y + 'px';
        indicator.style.display = 'block';
    }

    function hideFollowIndicator() {
        const indicator = document.querySelector('.pixelbot-indicator');
        if (indicator) {
            indicator.style.display = 'none';
        }
    }

    async function placeWithFollow() {
        if (!botState.isRunning || botState.queue.length === 0) {
            hideFollowIndicator();
            return;
        }

        const pixel = botState.queue[0];
        if (pixel && botState.followPlacing) {
            showFollowIndicator(pixel.x, pixel.y);
        }

        // Wait a short moment to show user the indicator target
        await new Promise(resolve => setTimeout(resolve, 400));

        const target = botState.queue.shift();
        if (!target) return;

        const success = await placePixel(target.x, target.y, target.color);
        if (success) {
            botState.pixelsPlaced++;
        } else {
            botState.queue.push(target);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        updateUI();

        if (botState.isRunning && botState.queue.length > 0) {
            setTimeout(placeWithFollow, 200);
        } else {
            hideFollowIndicator();
        }
    }

    // ===== 3. STANDARD LINES METHOD =====
    async function standardLinesLoop() {
        if (!botState.isRunning || botState.queue.length === 0) return;

        // Sort queue top to bottom (Y), then left to right (X)
        botState.queue.sort((a, b) => {
            if (a.y !== b.y) return a.y - b.y;
            return a.x - b.x;
        });

        while (botState.queue.length > 0 && botState.isRunning) {
            const pixel = botState.queue.shift();
            if (!pixel) break;

            const success = await placePixel(pixel.x, pixel.y, pixel.color);
            if (success) {
                botState.pixelsPlaced++;
            } else {
                botState.queue.push(pixel);
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
            updateUI();
            await new Promise(resolve => setTimeout(resolve, 120));
        }

        if (botState.isRunning && botState.queue.length > 0) {
            setTimeout(standardLinesLoop, 1000);
        }
    }

    // ===== TEMPLATE LOADING & PIXEL PROCESSING =====
    async function loadTemplate() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';

        input.onchange = async (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = async (event) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);

                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    const pixels = [];

                    for (let y = 0; y < canvas.height; y++) {
                        for (let x = 0; x < canvas.width; x++) {
                            const index = (y * canvas.width + x) * 4;
                            const r = imageData.data[index];
                            const g = imageData.data[index + 1];
                            const b = imageData.data[index + 2];
                            const a = imageData.data[index + 3];

                            if (a > 20) { // non-transparent
                                const color = rgbToColorId(r, g, b);
                                pixels.push({ x, y, color });
                            }
                        }
                    }

                    botState.template = {
                        width: canvas.width,
                        height: canvas.height,
                        pixels: pixels,
                        originalPixels: [...pixels.map(p => ({ ...p }))],
                        originalWidth: canvas.width,
                        originalHeight: canvas.height,
                        dataUrl: event.target.result
                    };

                    // Auto-detect initial crop bounds
                    detectCropBounds();

                    updateStatus(`Template loaded: ${canvas.width}×${canvas.height} (${pixels.length} pixels)`);
                };
                img.src = event.target.result;
            };
            reader.readAsDataURL(file);
        };

        input.click();
    }

    function rgbToColorId(r, g, b) {
        return ((r << 16) | (g << 8) | b).toString(16);
    }

    // Auto-detect bounding box of non-transparent pixels
    function detectCropBounds() {
        if (!botState.template || botState.template.pixels.length === 0) return;

        const pixels = botState.template.pixels;
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

        pixels.forEach(p => {
            if (p.x < minX) minX = p.x;
            if (p.x > maxX) maxX = p.x;
            if (p.y < minY) minY = p.y;
            if (p.y > maxY) maxY = p.y;
        });

        botState.cropX = minX;
        botState.cropY = minY;
        botState.cropWidth = maxX - minX + 1;
        botState.cropHeight = maxY - minY + 1;

        updateCropInputs(botState.cropX, botState.cropY, botState.cropWidth, botState.cropHeight);
        updateStatus(`Auto-detected crop: ${botState.cropWidth}×${botState.cropHeight} at (${botState.cropX}, ${botState.cropY})`);
    }

    function updateCropInputs(x, y, w, h) {
        const cropXInput = document.querySelector('#crop-x');
        const cropYInput = document.querySelector('#crop-y');
        const cropWidthInput = document.querySelector('#crop-width');
        const cropHeightInput = document.querySelector('#crop-height');

        if (cropXInput) cropXInput.value = x;
        if (cropYInput) cropYInput.value = y;
        if (cropWidthInput) cropWidthInput.value = w;
        if (cropHeightInput) cropHeightInput.value = h;
    }

    // Apply manual or visual crop to template
    function cropTemplate(cropX, cropY, cropWidth, cropHeight) {
        if (!botState.template || botState.template.pixels.length === 0) {
            updateStatus('No template loaded');
            return;
        }

        const cx = cropX !== undefined ? cropX : (parseInt(document.querySelector('#crop-x')?.value) || 0);
        const cy = cropY !== undefined ? cropY : (parseInt(document.querySelector('#crop-y')?.value) || 0);
        const cw = cropWidth !== undefined ? cropWidth : (parseInt(document.querySelector('#crop-width')?.value) || botState.template.width);
        const ch = cropHeight !== undefined ? cropHeight : (parseInt(document.querySelector('#crop-height')?.value) || botState.template.height);

        // Filter pixels strictly inside [cx, cx + cw) and [cy, cy + ch)
        const filtered = botState.template.originalPixels.filter(p =>
            p.x >= cx && p.x < cx + cw &&
            p.y >= cy && p.y < cy + ch
        );

        botState.template.pixels = filtered.map(p => ({
            x: p.x - cx,
            y: p.y - cy,
            color: p.color
        }));

        botState.template.width = cw;
        botState.template.height = ch;
        botState.cropX = cx;
        botState.cropY = cy;
        botState.cropWidth = cw;
        botState.cropHeight = ch;

        // Auto-update placement offset coordinates
        botState.templateX = cx;
        botState.templateY = cy;
        const xInput = document.querySelector('#template-x');
        const yInput = document.querySelector('#template-y');
        if (xInput) xInput.value = cx;
        if (yInput) yInput.value = cy;

        updateCropInputs(cx, cy, cw, ch);
        updateStatus(`Template cropped: ${cw}×${ch} (${botState.template.pixels.length} pixels)`);
    }

    // Restore original uncropped template
    function restoreTemplate() {
        if (!botState.template || !botState.template.originalPixels) {
            updateStatus('No original template to restore');
            return;
        }

        botState.template.pixels = [...botState.template.originalPixels.map(p => ({ ...p }))];
        botState.template.width = botState.template.originalWidth;
        botState.template.height = botState.template.originalHeight;

        botState.cropX = 0;
        botState.cropY = 0;
        botState.cropWidth = botState.template.width;
        botState.cropHeight = botState.template.height;

        updateCropInputs(0, 0, botState.template.width, botState.template.height);
        updateStatus(`Restored original template: ${botState.template.width}×${botState.template.height}`);
    }

    // ===== 4. VISUAL PIXEL-PERFECT CROP OVERLAY =====
    function openVisualCropOverlay() {
        if (!botState.template || !botState.template.dataUrl) {
            updateStatus('Please load a template image first');
            return;
        }

        // Close any existing overlay
        closeVisualCropOverlay();

        const overlay = document.createElement('div');
        overlay.className = 'pixelbot-crop-overlay';

        // Header info bar
        const infoBar = document.createElement('div');
        infoBar.className = 'pixelbot-crop-infobar';
        infoBar.innerHTML = `
            <span style="font-weight: bold;">✂️ Pixel Crop Mode</span>
            <span class="badge" id="crop-selection-badge">Drag on image to select pixels</span>
            <div style="display: flex; gap: 8px;">
                <button class="apply-btn" id="crop-apply-btn" style="opacity: 0.5; cursor: default;">✓ Apply Crop</button>
                <button class="cancel-btn" id="crop-cancel-btn">✕ Cancel</button>
            </div>
            <span style="font-size: 11px; opacity: 0.75; color: #c8b6ff;">Double-click to apply | Esc or Right-click to cancel</span>
        `;
        overlay.appendChild(infoBar);

        // Template Image
        const img = document.createElement('img');
        img.className = 'pixelbot-crop-img';
        img.src = botState.template.dataUrl;

        // Selection Box
        const selectionBox = document.createElement('div');
        selectionBox.className = 'pixelbot-crop-selection-box';
        selectionBox.style.display = 'none';
        overlay.appendChild(selectionBox);

        overlay.appendChild(img);
        document.body.appendChild(overlay);

        let isDragging = false;
        let startPixelX = 0;
        let startPixelY = 0;
        let selPixelX = 0;
        let selPixelY = 0;
        let selPixelW = 0;
        let selPixelH = 0;
        let hasSelection = false;

        // Adaptive scaling for small templates (e.g. 32x32)
        img.onload = () => {
            const natW = img.naturalWidth || 1;
            const natH = img.naturalHeight || 1;
            const maxW = Math.floor(window.innerWidth * 0.75);
            const maxH = Math.floor(window.innerHeight * 0.72);

            if (natW < 320 && natH < 320) {
                const intScale = Math.max(1, Math.min(Math.floor(maxW / natW), Math.floor(maxH / natH), 20));
                img.style.width = (natW * intScale) + 'px';
                img.style.height = (natH * intScale) + 'px';
            }
        };

        const updateSelectionVisual = (e) => {
            const rect = img.getBoundingClientRect();
            const natW = img.naturalWidth || 1;
            const natH = img.naturalHeight || 1;
            const pixelW = rect.width / natW;
            const pixelH = rect.height / natH;

            const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
            const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

            const relX = clientX - rect.left;
            const relY = clientY - rect.top;

            // Pixel grid snapping
            const currPixelX = Math.max(0, Math.min(Math.floor(relX / pixelW), natW - 1));
            const currPixelY = Math.max(0, Math.min(Math.floor(relY / pixelH), natH - 1));

            selPixelX = Math.min(startPixelX, currPixelX);
            selPixelY = Math.min(startPixelY, currPixelY);
            selPixelW = Math.abs(currPixelX - startPixelX) + 1;
            selPixelH = Math.abs(currPixelY - startPixelY) + 1;
            hasSelection = true;

            // Snap selection box exactly to pixel boundaries on screen
            selectionBox.style.display = 'block';
            selectionBox.style.left = (rect.left + selPixelX * pixelW) + 'px';
            selectionBox.style.top = (rect.top + selPixelY * pixelH) + 'px';
            selectionBox.style.width = (selPixelW * pixelW) + 'px';
            selectionBox.style.height = (selPixelH * pixelH) + 'px';

            const badge = document.querySelector('#crop-selection-badge');
            if (badge) {
                badge.textContent = `Selection: ${selPixelW}×${selPixelH} px at (${selPixelX}, ${selPixelY})`;
            }

            const applyBtn = document.querySelector('#crop-apply-btn');
            if (applyBtn) {
                applyBtn.style.opacity = '1';
                applyBtn.style.cursor = 'pointer';
            }
        };

        const onMouseDown = (e) => {
            if (e.button !== 0 && !('touches' in e)) return;
            const rect = img.getBoundingClientRect();
            const natW = img.naturalWidth || 1;
            const natH = img.naturalHeight || 1;
            const pixelW = rect.width / natW;
            const pixelH = rect.height / natH;

            const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
            const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

            const relX = clientX - rect.left;
            const relY = clientY - rect.top;

            startPixelX = Math.max(0, Math.min(Math.floor(relX / pixelW), natW - 1));
            startPixelY = Math.max(0, Math.min(Math.floor(relY / pixelH), natH - 1));
            isDragging = true;

            updateSelectionVisual(e);
        };

        const onMouseMove = (e) => {
            if (!isDragging) return;
            updateSelectionVisual(e);
        };

        const onMouseUp = () => {
            isDragging = false;
        };

        const applyAndClose = () => {
            if (hasSelection && selPixelW > 0 && selPixelH > 0) {
                cropTemplate(selPixelX, selPixelY, selPixelW, selPixelH);
            }
            closeVisualCropOverlay();
        };

        overlay.addEventListener('mousedown', onMouseDown);
        overlay.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);

        overlay.addEventListener('touchstart', onMouseDown, { passive: true });
        overlay.addEventListener('touchmove', onMouseMove, { passive: true });
        window.addEventListener('touchend', onMouseUp);

        overlay.addEventListener('dblclick', applyAndClose);
        overlay.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            closeVisualCropOverlay();
        });

        // Keydown listener for Escape
        const onKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeVisualCropOverlay();
            } else if (e.key === 'Enter') {
                applyAndClose();
            }
        };
        window.addEventListener('keydown', onKeyDown);
        overlay._cleanup = () => {
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('touchend', onMouseUp);
            window.removeEventListener('keydown', onKeyDown);
        };

        document.querySelector('#crop-apply-btn')?.addEventListener('click', applyAndClose);
        document.querySelector('#crop-cancel-btn')?.addEventListener('click', closeVisualCropOverlay);
    }

    function closeVisualCropOverlay() {
        const overlay = document.querySelector('.pixelbot-crop-overlay');
        if (overlay) {
            if (typeof overlay._cleanup === 'function') overlay._cleanup();
            overlay.remove();
        }
    }

    // ===== UI CREATION =====
    function createUI() {
        const existingUI = document.querySelector('.pixelbot-ui');
        if (existingUI) {
            existingUI.remove();
        }

        const ui = document.createElement('div');
        ui.className = 'pixelbot-ui';

        ui.innerHTML = `
            <h2>PixelBot v3.0</h2>
            <div class="tab-container">
                <button class="tab active" data-tab="template">Template</button>
                <button class="tab" data-tab="settings">Settings</button>
            </div>
            
            <div class="tab-content active" id="template-tab">
                <label>Template Image</label>
                <button id="load-template">📁 Load Template Image</button>
                
                <label>Crop Selection (Pixel-Perfect)</label>
                <div class="btn-group">
                    <button id="visual-crop-btn">✂️ Visual Crop</button>
                    <button id="auto-crop-btn" class="secondary">Auto Detect</button>
                    <button id="restore-crop-btn" class="secondary">Restore</button>
                </div>
                
                <div class="row-inputs">
                    <div>
                        <label>Crop X</label>
                        <input type="number" id="crop-x" value="0">
                    </div>
                    <div>
                        <label>Crop Y</label>
                        <input type="number" id="crop-y" value="0">
                    </div>
                </div>
                
                <div class="row-inputs">
                    <div>
                        <label>Crop Width</label>
                        <input type="number" id="crop-width" value="0">
                    </div>
                    <div>
                        <label>Crop Height</label>
                        <input type="number" id="crop-height" value="0">
                    </div>
                </div>
                
                <label>Placement Coordinates (Canvas X, Y)</label>
                <div class="row-inputs">
                    <div>
                        <input type="number" id="template-x" value="0" placeholder="X">
                    </div>
                    <div>
                        <input type="number" id="template-y" value="0" placeholder="Y">
                    </div>
                </div>
                
                <button id="add-to-queue" style="margin-top: 10px;">➕ Add to Placement Queue</button>
            </div>
            
            <div class="tab-content" id="settings-tab">
                <label>Placement Method</label>
                <select id="placement-method">
                    <option value="human">Human Placing (Accumulation & Jitter)</option>
                    <option value="lines">Standard Lines (Top to Bottom)</option>
                </select>
                
                <label class="checkbox-label">
                    <input type="checkbox" id="follow-placing"> Follow Placing (show glowing indicator)
                </label>
                
                <label>Cooldown Accumulation Time (seconds)</label>
                <input type="number" id="accumulation-time" value="10" min="1" max="100">
                
                <div class="btn-group" style="margin-top: 12px;">
                    <button id="start-bot">▶ Start Bot</button>
                    <button id="stop-bot" class="danger">⏹ Stop Bot</button>
                </div>
            </div>
            
            <div class="status">
                <div><span>Status:</span> <span class="val" id="status-text">Idle</span></div>
                <div><span>Queue Size:</span> <span class="val" id="queue-count">0</span></div>
                <div><span>Pixels Placed:</span> <span class="val" id="placed-count">0</span></div>
                <div><span>Accumulated Cooldown:</span> <span class="val" id="cooldown-count">0s</span></div>
            </div>
        `;

        // Event listeners
        ui.querySelector('#load-template').addEventListener('click', loadTemplate);
        ui.querySelector('#visual-crop-btn').addEventListener('click', openVisualCropOverlay);
        ui.querySelector('#auto-crop-btn').addEventListener('click', detectCropBounds);
        ui.querySelector('#restore-crop-btn').addEventListener('click', restoreTemplate);
        ui.querySelector('#add-to-queue').addEventListener('click', addToQueue);
        ui.querySelector('#start-bot').addEventListener('click', startBot);
        ui.querySelector('#stop-bot').addEventListener('click', stopBot);

        // Tab switching
        ui.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                ui.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                ui.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                tab.classList.add('active');
                ui.querySelector('#' + tab.dataset.tab + '-tab').classList.add('active');
            });
        });

        // Append to body
        if (document.body) {
            document.body.appendChild(ui);
        } else {
            document.addEventListener('DOMContentLoaded', () => {
                if (document.body) document.body.appendChild(ui);
            });
        }
    }

    function addToQueue() {
        if (!botState.template || botState.template.pixels.length === 0) {
            updateStatus('No template pixels loaded');
            return;
        }

        botState.templateX = parseInt(document.querySelector('#template-x')?.value) || 0;
        botState.templateY = parseInt(document.querySelector('#template-y')?.value) || 0;

        botState.queue = botState.template.pixels.map(p => ({
            x: p.x + botState.templateX,
            y: p.y + botState.templateY,
            color: p.color
        }));

        updateStatus(`Added ${botState.queue.length} pixels to queue at (${botState.templateX}, ${botState.templateY})`);
        updateUI();
    }

    function startBot() {
        if (botState.queue.length === 0) {
            updateStatus('Placement queue is empty! Add pixels first.');
            return;
        }

        botState.isRunning = true;
        botState.placementMethod = document.querySelector('#placement-method')?.value || 'human';
        botState.followPlacing = document.querySelector('#follow-placing')?.checked || false;
        botState.accumulatedCooldown = 0;

        const accTime = parseInt(document.querySelector('#accumulation-time')?.value) || 10;
        botState.maxCooldown = accTime;

        updateStatus(`Running: ${botState.placementMethod} ${botState.followPlacing ? '+ Follow Placing' : ''}`);

        if (botState.followPlacing) {
            placeWithFollow();
        } else {
            switch (botState.placementMethod) {
                case 'human':
                    humanPlacingLoop();
                    break;
                case 'lines':
                    standardLinesLoop();
                    break;
                default:
                    humanPlacingLoop();
            }
        }
    }

    function stopBot() {
        botState.isRunning = false;
        hideFollowIndicator();
        updateStatus('Bot stopped');
    }

    function updateStatus(text) {
        const statusText = document.querySelector('#status-text');
        if (statusText) {
            statusText.textContent = text;
        }
    }

    function updateUI() {
        const queueCount = document.querySelector('#queue-count');
        const placedCount = document.querySelector('#placed-count');
        const cooldownCount = document.querySelector('#cooldown-count');

        if (queueCount) queueCount.textContent = botState.queue.length;
        if (placedCount) placedCount.textContent = botState.pixelsPlaced;
        if (cooldownCount) cooldownCount.textContent = botState.accumulatedCooldown + 's';
    }

    // ===== INITIALIZATION =====
    function initializeBot() {
        console.log('[PixelBot v3.0.0] Initialized with blue-purple theme & pixel crop');

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(createUI, 800);
            });
        } else {
            setTimeout(createUI, 800);
        }

        setInterval(updateUI, 1000);
    }

    initializeBot();
})();
