// ==UserScript==
// @name         PixelBot - Advanced Auto-Placing Bot
// @namespace    https://black-and-red.space
// @version      3.0.0
// @description  Advanced bot for pixelplanet.fun, Pixelya, Pixmap and clones with blue-purple gradient style
// @author       Puwe_
// @license       Copyright (c) 2020–2026 Puwe All rights reserved. This software is licensed for personal use only.
// @match        *://*.fuckyouarkeros.fun/*
// @match        *://*.pixelplanet.fun/*
// @match        *://*.localhost/*
// @match        *://*.pixmap.fun/*
// @match        *://*.pixelya.fun/*
// @match        *://*.wplace.live/*
// @match        *://*.gplace.fun/*
// @match        *://*.pixuniverse.fun/*
// @icon         https://raw.githubusercontent.com/TouchedByDarkness/PixelPlanet-Bot/master/rounded-avatar-128.png
// @grant        GM_xmlhttpRequest
// @grant        GM_openInTab
// @grant        unsafeWindow
// @run-at       document-start
// @downloadURL  https://raw.githubusercontent.com/puweofficial/pixelbot/main/pixels.user-bot.js
// @updateURL    https://raw.githubusercontent.com/puweofficial/pixelbot/main/pixels.user-bot.js
// @homepageURL  https://black-and-red.space
// @connect      black-and-red.space
// @connect      githubusercontent.com
// @connect      github.com
// @connect      backend.wplace.live
// @connect      fuckyouarkeros.fun
// @connect      pixelplanet.fun
// @connect      localhost
// @connect      pixmap.fun
// @connect      pixelya.fun
// @connect      wplace.live
// @connect      gplace.fun
// @connect      pixuniverse.fun
// ==/UserScript==

// ===== MAIN BOT CODE =====

// ===== UTILITY FUNCTIONS =====

/**
 * Parse version string (e.g., "2.30" -> [2, 30])
 */
function parseVersion(versionString) {
    return versionString.split(".").map(Number);
}

/**
 * Clamp value between min and max
 */
function clamp(min, value, max) {
    return Math.max(min, Math.min(value, max));
}

/**
 * Convert file to DataURL
 */
async function fileToDataUrl(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(file);
    });
}

/**
 * Get image from user via file input
 */
async function getImageFromUser() {
    return new Promise((resolve) => {
        // Use a timeout to prevent UI blocking
        setTimeout(() => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.style.display = 'none';
            
            input.onchange = (e) => {
                const file = e.target.files[0];
                document.body.removeChild(input);
                resolve(file || null);
            };
            
            input.oncancel = () => {
                document.body.removeChild(input);
                resolve(null);
            };
            
            document.body.appendChild(input);
            input.click();
        }, 100);
    });
}

/**
 * Load image from URL or DataURL
 */
function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}

/**
 * Create canvas context
 */
function createCanvasContext(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas.getContext('2d');
}

/**
 * Check if version2 is greater than version1
 */
function isVersionGreater(version2, version1) {
    const v1 = parseVersion(version1);
    const v2 = parseVersion(version2);
    const maxLength = Math.max(v1.length, v2.length);
    
    for (let i = 0; i < maxLength; i++) {
        const num1 = v1[i] || 0;
        const num2 = v2[i] || 0;
        if (num1 < num2) return true;
        if (num1 > num2) return false;
    }
    return false;
}

/**
 * Safe version comparison and update check
 */
function checkForUpdates() {
    if (typeof GM_info === 'undefined' || !GM_info.script.updateURL) {
        console.log('[PixelBot] No update URL available');
        return;
    }

    console.log('[PixelBot] Checking for updates...');
    
    fetch(GM_info.script.updateURL, { headers: { Range: 'bytes=0-512' } })
        .then(res => res.text())
        .then(code => {
            const lines = code.replaceAll('\r', '').split('\n');
            const versionLine = lines.find(line => line.includes('@version'));
            const version = versionLine?.match(/(\d|\.)+/g)?.pop();
            
            if (version && isVersionGreater(version, GM_info.script.version)) {
                console.log('[PixelBot] New version available:', version);
                console.log('[PixelBot] Opening update tab...');
                const tab = GM_openInTab(GM_info.script.updateURL, { active: true });
                tab.onclose = () => location.reload();
            } else {
                console.log('[PixelBot] Bot is up to date');
            }
        })
        .catch(error => {
            console.error('[PixelBot] Update check failed:', error);
        });
}

// ===== STYLING =====

/**
 * Apply blue-purple gradient theme to the bot interface
 */
function applyBotTheme() {
    const style = document.createElement('style');
    style.textContent = `
        /* PixelBot Blue-Purple Gradient Theme */
        .pixelbot-container {
            background: linear-gradient(135deg, rgba(20, 0, 40, 0.95), rgba(10, 0, 30, 0.95)) !important;
            border: 1px solid rgba(100, 50, 200, 0.5) !important;
            color: #e0e0ff !important;
        }
        
        .pixelbot-button {
            background: linear-gradient(90deg, #4a90e2, #9b59b6) !important;
            border: none !important;
            color: white !important;
            border-radius: 4px !important;
            padding: 8px 16px !important;
            cursor: pointer !important;
            transition: all 0.3s ease !important;
        }
        
        .pixelbot-button:hover {
            opacity: 0.8 !important;
            transform: translateY(-1px) !important;
        }
        
        .pixelbot-input {
            background: rgba(10, 0, 30, 0.8) !important;
            border: 1px solid rgba(100, 50, 200, 0.6) !important;
            color: #e0e0ff !important;
            border-radius: 4px !important;
            padding: 6px 10px !important;
        }
        
        .pixelbot-input:focus {
            border-color: #9b59b6 !important;
            box-shadow: 0 0 5px rgba(155, 89, 182, 0.3) !important;
            outline: none !important;
        }
        
        .pixelbot-header {
            background: linear-gradient(90deg, #4a90e2, #9b59b6) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            background-clip: text !important;
            font-weight: bold !important;
        }
        
        .pixelbot-status {
            color: #6c5ce7 !important;
        }
        
        .pixelbot-progress {
            background: linear-gradient(90deg, #4a90e2, #9b59b6) !important;
            height: 4px !important;
            border-radius: 2px !important;
        }
        
        .pixelbot-error {
            color: #e74c3c !important;
        }
        
        .pixelbot-success {
            color: #2ecc71 !important;
        }
    `;
    
    (document.head || document.documentElement).appendChild(style);
}

// ===== ERROR HANDLING =====

/**
 * Global error handler to prevent bot crashes
 */
function setupErrorHandling() {
    window.addEventListener('error', (event) => {
        console.error('[PixelBot] Error caught:', event.error);
        // Prevent error from propagating to avoid detection
        event.preventDefault();
    });
    
    window.addEventListener('unhandledrejection', (event) => {
        console.error('[PixelBot] Unhandled promise rejection:', event.reason);
        event.preventDefault();
    });
}

// ===== MAIN BOT INITIALIZATION =====

/**
 * Initialize the bot with proper error handling
 */
function initializeBot() {
    try {
        console.log('[PixelBot] Initializing bot v3.0.0...');
        
        // Setup error handling
        setupErrorHandling();
        
        // Apply theme
        applyBotTheme();
        
        // Check for updates
        checkForUpdates();
        
        // Wait for page to load before injecting bot logic
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', injectBotLogic);
        } else {
            injectBotLogic();
        }
        
    } catch (error) {
        console.error('[PixelBot] Initialization failed:', error);
    }
}

/**
 * Inject the main bot logic when page is ready
 */
function injectBotLogic() {
    try {
        console.log('[PixelBot] Page loaded, injecting bot logic...');
        
        // Detect site type
        const siteType = detectSiteType();
        console.log('[PixelBot] Detected site type:', siteType);
        
        // Load appropriate bot logic based on site
        loadBotForSite(siteType);
        
    } catch (error) {
        console.error('[PixelBot] Bot logic injection failed:', error);
    }
}

/**
 * Detect which pixel site we're on
 */
function detectSiteType() {
    const hostname = window.location.hostname.toLowerCase();
    
    if (hostname.includes('pixelya')) return 'pixelya';
    if (hostname.includes('pixmap')) return 'pixmap';
    if (hostname.includes('pixelplanet')) return 'pixelplanet';
    if (hostname.includes('wplace')) return 'wplace';
    if (hostname.includes('gplace')) return 'gplace';
    if (hostname.includes('localhost')) return 'localhost';
    
    return 'unknown';
}

/**
 * Load bot functionality for specific site
 */
function loadBotForSite(siteType) {
    console.log('[PixelBot] Loading bot for site:', siteType);
    
    // Site-specific initialization will be added here
    // For now, we'll create a placeholder for the auto-place functionality
    
    switch (siteType) {
        case 'pixelya':
        case 'pixmap':
            initializeAutoPlaceBot(siteType);
            break;
        case 'pixelplanet':
            initializePixelPlanetBot();
            break;
        default:
            console.log('[PixelBot] Generic bot initialization for:', siteType);
            initializeGenericBot();
    }
}

/**
 * Initialize auto-place bot for Pixelya and Pixmap
 */
function initializeAutoPlaceBot(siteType) {
    console.log(`[PixelBot] Initializing auto-place bot for ${siteType}`);
    
    // Auto-place bot state
    const botState = {
        isRunning: false,
        queue: [],
        cooldown: 0,
        maxCooldown: 0, // Maximum cooldown from API
        accumulatedCooldown: 0, // Accumulated cooldown for human placing
        maxQueueSize: 1000, // Increased queue size for better API handling
        placeInterval: 1000, // 1 second interval for queue processing
        websocket: null,
        reconnectAttempts: 0,
        maxReconnectAttempts: 5,
        reconnectDelay: 5000,
        canvasId: null,
        sessionKey: null,
        templateOffsetX: 0,
        templateOffsetY: 0,
        humanPlacing: true, // Use human placing method
        humanAccuracy: 5, // Random offset radius for human placing (pixels)
        minAccumulateTime: 10, // Minimum accumulate time in seconds
        maxAccumulateTime: 100, // Maximum accumulate time in seconds
        pixelsPlaced: 0, // Total pixels placed counter
        pixelsFailed: 0, // Failed pixels counter
        apiLimitReached: false // API limit status
    };
    
    // Setup WebSocket connection
    setupWebSocketConnection(botState, siteType);
    
    // Setup UI with DOM ready check
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setupAutoPlaceUI(siteType, botState);
        });
    } else {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
            setupAutoPlaceUI(siteType, botState);
        }, 100);
    }
    
    // Setup pixel queue processing
    setupQueueProcessor(botState);
    
    // Setup cooldown accumulation for human placing
    setupCooldownAccumulation(botState);
    
    // Set initial max cooldown from default value
    botState.maxCooldown = 10; // Default 10 seconds
}

/**
 * Initialize bot for PixelPlanet
 */
function initializePixelPlanetBot() {
    console.log('[PixelBot] Initializing PixelPlanet bot');
    // PixelPlanet-specific logic
}

/**
 * Initialize generic bot for other sites
 */
function initializeGenericBot() {
    console.log('[PixelBot] Initializing generic bot');
    // Generic bot logic
}

/**
 * Setup WebSocket connection for pixel placement
 */
function setupWebSocketConnection(botState, siteType) {
    const wsProtocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsHost = window.location.host;
    const wsUrl = `${wsProtocol}//${wsHost}/ws`;
    
    function connect() {
        try {
            console.log('[PixelBot] Connecting to WebSocket:', wsUrl);
            botState.websocket = new WebSocket(wsUrl);
            
            botState.websocket.onopen = () => {
                console.log('[PixelBot] WebSocket connected');
                botState.reconnectAttempts = 0;
                updateStatus('Connected', 'success');
            };
            
            botState.websocket.onmessage = (event) => {
                handleWebSocketMessage(event.data, botState);
            };
            
            botState.websocket.onerror = (error) => {
                console.error('[PixelBot] WebSocket error:', error);
                updateStatus('Connection error', 'error');
            };
            
            botState.websocket.onclose = () => {
                console.log('[PixelBot] WebSocket closed');
                updateStatus('Disconnected', 'error');
                
                // Attempt reconnection
                if (botState.reconnectAttempts < botState.maxReconnectAttempts) {
                    botState.reconnectAttempts++;
                    console.log(`[PixelBot] Reconnection attempt ${botState.reconnectAttempts}/${botState.maxReconnectAttempts}`);
                    setTimeout(connect, botState.reconnectDelay);
                } else {
                    console.error('[PixelBot] Max reconnection attempts reached');
                    updateStatus('Connection failed', 'error');
                }
            };
            
        } catch (error) {
            console.error('[PixelBot] WebSocket connection failed:', error);
            updateStatus('Connection failed', 'error');
        }
    }
    
    connect();
}

/**
 * Handle WebSocket messages
 */
function handleWebSocketMessage(data, botState) {
    try {
        const message = JSON.parse(data);
        
        // Handle different message types
        switch (message.type) {
            case 'pixelUpdate':
                // Update local canvas state
                break;
            case 'cooldown':
                // Update cooldown timer from API
                const cooldownSeconds = message.cooldown || message.cooldownSeconds || 10;
                botState.maxCooldown = Math.max(botState.minAccumulateTime, Math.min(cooldownSeconds, botState.maxAccumulateTime));
                botState.cooldown = cooldownSeconds * 1000; // Convert to milliseconds
                botState.apiLimitReached = false;
                console.log(`[PixelBot] Cooldown updated: ${cooldownSeconds}s`);
                break;
            case 'captcha':
                // Handle captcha requirement
                handleCaptcha(message, botState);
                break;
            case 'rateLimit':
                // Handle rate limiting
                const waitTime = message.waitTime || 10;
                botState.cooldown = waitTime * 1000;
                botState.apiLimitReached = true;
                console.log(`[PixelBot] Rate limited, waiting ${waitTime}s`);
                break;
            case 'pixelPlaced':
                // Pixel successfully placed
                botState.pixelsPlaced++;
                botState.apiLimitReached = false;
                console.log(`[PixelBot] Pixel placed successfully. Total: ${botState.pixelsPlaced}`);
                break;
            case 'pixelFailed':
                // Pixel placement failed
                botState.pixelsFailed++;
                console.log(`[PixelBot] Pixel placement failed. Total failed: ${botState.pixelsFailed}`);
                break;
            case 'error':
                // API error
                console.error('[PixelBot] API error:', message.error);
                if (message.error.includes('limit') || message.error.includes('rate')) {
                    botState.apiLimitReached = true;
                }
                break;
            default:
                console.log('[PixelBot] Unknown message type:', message.type);
        }
    } catch (error) {
        console.error('[PixelBot] Failed to parse WebSocket message:', error);
    }
}

/**
 * Handle captcha requirement
 */
function handleCaptcha(message, botState) {
    console.log('[PixelBot] Captcha required');
    updateStatus('Captcha required', 'error');
    
    const siteName = window.location.hostname;
    const notificationMessage = `🚨 Captcha required on ${siteName}\n\nPlease solve the captcha manually to continue auto-placing.`;
    
    // Send notification to all configured services
    sendNotificationThrottled(notificationMessage);
    
    // Send notification via postMessage to content script for extension handling
    window.postMessage({
        __darkbot_bridge: true,
        data: {
            type: 'captcha',
            siteName: siteName,
            description: notificationMessage
        }
    }, '*');
    
    // Pause bot
    botState.isRunning = false;
}

/**
 * Setup queue processor for pixel placement
 */
function setupQueueProcessor(botState) {
    setInterval(() => {
        if (!botState.isRunning || botState.queue.length === 0) {
            return;
        }
        
        // Check if API limit is reached
        if (botState.apiLimitReached) {
            return; // Wait for API limit to reset
        }
        
        // Check cooldown
        if (botState.cooldown > 0) {
            botState.cooldown -= 1000;
            return;
        }
        
        // For human placing, check if we have enough accumulated cooldown
        if (botState.humanPlacing) {
            if (botState.accumulatedCooldown < botState.maxCooldown) {
                return; // Wait for more cooldown to accumulate
            }
            // Reset accumulated cooldown after placing
            botState.accumulatedCooldown = 0;
        }
        
        // Process next pixel
        const pixel = botState.queue.shift();
        placePixel(pixel, botState);
        
    }, 1000);
}

// ===== TEMPLATE CLASS =====

/**
 * Template class for managing image templates
 */
class Template {
    static UNLOADED = 0;
    static LOADING = 1;
    static LOADED = 2;
    static QUANTIZED = 3;
    
    static TRANSPARENT_COLOR_ID = 255;
    
    constructor(opts) {
        this.name = opts.name || 'Template';
        this.x = opts.x || 0;
        this.y = opts.y || 0;
        this.width = opts.width || 0;
        this.height = opts.height || 0;
        this.readyState = Template.UNLOADED;
        this.ctx = null;
        this.ids = new Uint8Array(0);
    }
    
    get canvas() {
        return this.ctx?.canvas;
    }
    
    get size() {
        return this.width * this.height;
    }
    
    get x1() {
        return this.x;
    }
    
    get y1() {
        return this.y;
    }
    
    get x2() {
        return this.x + this.width;
    }
    
    get y2() {
        return this.y + this.height;
    }
    
    get(x, y) {
        return this.ids[x + y * this.width];
    }
    
    isTransparent(x, y) {
        return this.get(x, y) === Template.TRANSPARENT_COLOR_ID;
    }
    
    iterateOverVisible(callback) {
        for (let y = 0, i = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++, i++) {
                const color = this.ids[i];
                if (color !== Template.TRANSPARENT_COLOR_ID) {
                    callback(x, y, color);
                }
            }
        }
    }
    
    countTransparent() {
        if (this.readyState === Template.QUANTIZED) {
            let amount = 0;
            for (const id of this.ids) {
                if (id === Template.TRANSPARENT_COLOR_ID) {
                    amount++;
                }
            }
            return amount;
        }
        throw new Error('Template unquantized');
    }
    
    isOutline(x, y) {
        const color = this.get(x, y);
        return this.get(x - 1, y - 1) !== color ||
               this.get(x - 1, y) !== color ||
               this.get(x - 1, y + 1) !== color ||
               this.get(x, y - 1) !== color ||
               this.get(x, y + 1) !== color ||
               this.get(x + 1, y - 1) !== color ||
               this.get(x + 1, y) !== color ||
               this.get(x + 1, y + 1) !== color;
    }
    
    intersects(x1, y1, x2, y2) {
        return this.x1 < x2 && this.x2 > x1 && this.y1 < y2 && this.y2 > y1;
    }
    
    async load(src) {
        this.readyState = Template.LOADING;
        const img = await loadImage(src);
        this.width = img.width;
        this.height = img.height;
        this.ctx = createCanvasContext(this.width, this.height);
        this.ctx.drawImage(img, 0, 0);
        this.readyState = Template.LOADED;
        return this;
    }
    
    quantize(palette) {
        if (!this.ctx) {
            throw new Error('Template unloaded');
        }
        
        const imageData = this.ctx.getImageData(0, 0, this.width, this.height);
        const data = imageData.data;
        this.ids = new Uint8Array(data.length >> 2);
        const cache = new Map();
        
        for (let i = 0; i < data.length; i += 4) {
            if (data[i + 3] === 0) {
                this.ids[i >> 2] = 255;
                data[i] = data[i + 1] = data[i + 2] = data[i + 3] = 0;
            } else {
                const hash = data[i] << 24 | data[i + 1] << 16 | data[i + 2] << 8 | data[i + 3];
                let color = cache.get(hash);
                
                if (!color) {
                    color = palette.quantize(data[i], data[i + 1], data[i + 2], data[i + 3]);
                    cache.set(hash, color);
                }
                
                this.ids[i >> 2] = color;
                const rgba = palette.idToRGBA(color);
                data[i] = rgba[0];
                data[i + 1] = rgba[1];
                data[i + 2] = rgba[2];
                data[i + 3] = rgba[3];
            }
        }
        
        this.ctx.putImageData(imageData, 0, 0);
        this.readyState = Template.QUANTIZED;
        return this;
    }
    
    cropRegion(sx, sy, sw, sh) {
        const clampedX = clamp(0, sx, this.width - 1);
        const clampedY = clamp(0, sy, this.height - 1);
        const clampedW = clamp(1, Math.floor(sw), this.width - clampedX);
        const clampedH = clamp(1, Math.floor(sh), this.height - clampedY);
        
        const cropped = new Template({
            name: this.name,
            x: this.x1 + clampedX,
            y: this.y1 + clampedY,
            width: clampedW,
            height: clampedH
        });
        
        cropped.ctx = createCanvasContext(clampedW, clampedH);
        cropped.ids = new Uint8Array(clampedW * clampedH);
        
        for (let y = 0; y < clampedH; y++) {
            for (let x = 0; x < clampedW; x++) {
                const srcIdx = clampedX + x + (clampedY + y) * this.width;
                const dstIdx = x + y * clampedW;
                cropped.ids[dstIdx] = this.ids[srcIdx];
            }
        }
        
        if (this.ctx) {
            cropped.ctx.drawImage(this.ctx.canvas, clampedX, clampedY, clampedW, clampedH, 0, 0, clampedW, clampedH);
        }
        
        cropped.readyState = this.readyState;
        return cropped;
    }
}

// ===== PALETTE CLASS =====

/**
 * Palette class for color quantization
 */
class Palette {
    constructor(colors) {
        this.colors = colors || [];
        this.colorMap = new Map();
        this.buildColorMap();
    }
    
    buildColorMap() {
        this.colorMap.clear();
        this.colors.forEach((color, index) => {
            const key = this.colorToKey(color);
            this.colorMap.set(key, index);
        });
    }
    
    colorToKey(color) {
        return (color.r << 24) | (color.g << 16) | (color.b << 8) | color.a;
    }
    
    quantize(r, g, b, a = 255) {
        if (a < 128) {
            return Template.TRANSPARENT_COLOR_ID;
        }
        
        const key = this.colorToKey({ r, g, b, a });
        const exactMatch = this.colorMap.get(key);
        
        if (exactMatch !== undefined) {
            return exactMatch;
        }
        
        // Find closest color
        let minDistance = Infinity;
        let closestIndex = 0;
        
        for (let i = 0; i < this.colors.length; i++) {
            const color = this.colors[i];
            const distance = Math.sqrt(
                Math.pow(r - color.r, 2) +
                Math.pow(g - color.g, 2) +
                Math.pow(b - color.b, 2) +
                Math.pow(a - color.a, 2)
            );
            
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = i;
            }
        }
        
        return closestIndex;
    }
    
    idToRGBA(id) {
        if (id >= this.colors.length) {
            return { r: 0, g: 0, b: 0, a: 0 };
        }
        return this.colors[id];
    }
}

// ===== TEMPLATE MANAGEMENT =====

/**
 * Global template manager
 */
const templateManager = {
    currentTemplate: null,
    currentPalette: null,
    cropMode: false,
    cropSelection: null,
    
    /**
     * Load template from file
     */
    async loadTemplateFromFile(file) {
        try {
            console.log('[PixelBot] Loading template from file:', file.name);
            
            const dataUrl = await fileToDataUrl(file);
            const template = new Template({ name: file.name });
            await template.load(dataUrl);
            
            // Create default palette if not exists
            if (!this.currentPalette) {
                this.currentPalette = this.createDefaultPalette();
            }
            
            // Quantize template
            template.quantize(this.currentPalette);
            
            this.currentTemplate = template;
            console.log('[PixelBot] Template loaded successfully:', template.width, 'x', template.height);
            
            return template;
        } catch (error) {
            console.error('[PixelBot] Failed to load template:', error);
            throw error;
        }
    },
    
    /**
     * Load template from URL
     */
    async loadTemplateFromUrl(url) {
        try {
            console.log('[PixelBot] Loading template from URL:', url);
            
            const template = new Template({ name: 'URL Template' });
            await template.load(url);
            
            if (!this.currentPalette) {
                this.currentPalette = this.createDefaultPalette();
            }
            
            template.quantize(this.currentPalette);
            
            this.currentTemplate = template;
            console.log('[PixelBot] Template loaded successfully:', template.width, 'x', template.height);
            
            return template;
        } catch (error) {
            console.error('[PixelBot] Failed to load template from URL:', error);
            throw error;
        }
    },
    
    /**
     * Create default palette (basic colors)
     */
    createDefaultPalette() {
        const colors = [
            { r: 0, g: 0, b: 0, a: 255 },       // Black
            { r: 255, g: 255, b: 255, a: 255 }, // White
            { r: 255, g: 0, b: 0, a: 255 },     // Red
            { r: 0, g: 255, b: 0, a: 255 },     // Green
            { r: 0, g: 0, b: 255, a: 255 },     // Blue
            { r: 255, g: 255, b: 0, a: 255 },   // Yellow
            { r: 255, g: 0, b: 255, a: 255 },   // Magenta
            { r: 0, g: 255, b: 255, a: 255 },   // Cyan
            { r: 128, g: 128, b: 128, a: 255 }, // Gray
            { r: 74, g: 144, b: 226, a: 255 },  // Blue
            { r: 155, g: 89, b: 182, a: 255 },  // Purple
        ];
        
        return new Palette(colors);
    },
    
    /**
     * Enable crop mode
     */
    enableCropMode() {
        this.cropMode = true;
        this.cropSelection = null;
        console.log('[PixelBot] Crop mode enabled');
    },
    
    /**
     * Disable crop mode
     */
    disableCropMode() {
        this.cropMode = false;
        this.cropSelection = null;
        console.log('[PixelBot] Crop mode disabled');
    },
    
    /**
     * Set crop selection
     */
    setCropSelection(selection) {
        this.cropSelection = selection;
        console.log('[PixelBot] Crop selection set:', selection);
    },
    
    /**
     * Apply crop to current template
     */
    applyCrop() {
        if (!this.currentTemplate || !this.cropSelection) {
            console.warn('[PixelBot] Cannot apply crop: no template or selection');
            return null;
        }
        
        const { x, y, width, height } = this.cropSelection;
        const cropped = this.currentTemplate.cropRegion(x, y, width, height);
        
        this.currentTemplate = cropped;
        this.cropMode = false;
        this.cropSelection = null;
        
        console.log('[PixelBot] Template cropped:', cropped.width, 'x', cropped.height);
        return cropped;
    },
    
    /**
     * Get pixels from template for queue
     */
    getTemplatePixels(offsetX = 0, offsetY = 0) {
        if (!this.currentTemplate || this.currentTemplate.readyState !== Template.QUANTIZED) {
            console.warn('[PixelBot] No quantized template available');
            return [];
        }
        
        const pixels = [];
        this.currentTemplate.iterateOverVisible((x, y, color) => {
            pixels.push({
                x: offsetX + x,
                y: offsetY + y,
                color: color
            });
        });
        
        return pixels;
    },
    
    /**
     * Auto-select coordinates for template placement
     */
    autoSelectCoordinates() {
        if (!this.currentTemplate) {
            console.warn('[PixelBot] No template to auto-place');
            return null;
        }
        
        // Try to find optimal placement
        // This is a simple implementation - can be enhanced
        const canvasWidth = window.innerWidth;
        const canvasHeight = window.innerHeight;
        
        // Center the template
        const x = Math.floor((canvasWidth - this.currentTemplate.width) / 2);
        const y = Math.floor((canvasHeight - this.currentTemplate.height) / 2);
        
        console.log('[PixelBot] Auto-selected coordinates:', { x, y });
        return { x, y };
    }
};

/**
 * Convert RGB to color index (placeholder - needs site-specific palette)
 */
function rgbToColorIndex(r, g, b) {
    // This needs to be implemented based on the specific site's color palette
    // For now, return a simple hash as placeholder
    return (r << 16) | (g << 8) | b;
}

/**
 * Add single pixel to queue
 */
function addPixelToQueue(x, y, color, botState) {
    if (botState.queue.length >= botState.maxQueueSize) {
        console.warn('[PixelBot] Queue is full, cannot add pixel');
        return false;
    }
    
    botState.queue.push({ x, y, color });
    return true;
}

/**
 * Clear the pixel queue
 */
function clearQueue(botState) {
    botState.queue = [];
    console.log('[PixelBot] Queue cleared');
}

// ===== TELEGRAM NOTIFICATIONS =====

/**
 * Send Telegram notification with blue-purple themed message
 */
function sendTelegramNotification(token, chatId, message) {
    if (!token || !chatId) {
        console.warn('[PixelBot] Telegram credentials not configured');
        return;
    }
    
    // Add blue-purple themed formatting
    const formattedMessage = `
🎨 <b>PixelBot Notification</b>

${message}

<i>Powered by PixelBot v3.0.0</i>
    `.trim();
    
    try {
        fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: formattedMessage,
                parse_mode: 'HTML',
                disable_web_page_preview: true
            }),
        }).then(response => response.json())
          .then(data => {
              if (!data.ok) {
                  console.error('[PixelBot] Telegram API error:', data.description);
              }
          })
          .catch(error => {
              console.error('[PixelBot] Telegram notification failed:', error);
          });
    } catch (error) {
        console.error('[PixelBot] Failed to send Telegram notification:', error);
    }
}

/**
 * Get Telegram credentials from storage
 */
async function getTelegramCredentials() {
    try {
        if (typeof chrome !== 'undefined' && chrome.storage) {
            return new Promise((resolve) => {
                chrome.storage.local.get(['telegram_bot_api', 'telegram_chat_id'], (result) => {
                    resolve({
                        token: result.telegram_bot_api || '',
                        chatId: result.telegram_chat_id || ''
                    });
                });
            });
        }
        return { token: '', chatId: '' };
    } catch (error) {
        console.error('[PixelBot] Failed to get Telegram credentials:', error);
        return { token: '', chatId: '' };
    }
}

// ===== DISCORD NOTIFICATIONS =====

/**
 * Send Discord notification with blue-purple themed embed
 */
function sendDiscordNotification(webhookUrl, userId, message) {
    if (!webhookUrl) {
        console.warn('[PixelBot] Discord webhook not configured');
        return;
    }
    
    const content = userId ? `<@${userId}>` : '';
    
    // Blue-purple themed embed
    const embed = {
        title: '🎨 PixelBot Notification',
        description: message,
        color: 0x9b59b6, // Purple color
        footer: {
            text: 'PixelBot v3.0.0'
        },
        timestamp: new Date().toISOString()
    };
    
    try {
        fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: 'PixelBot',
                avatar_url: 'https://raw.githubusercontent.com/TouchedByDarkness/PixelPlanet-Bot/master/rounded-avatar-128.png',
                embeds: [embed],
                content
            }),
        }).then(response => {
            if (!response.ok) {
                console.error('[PixelBot] Discord webhook error:', response.statusText);
            }
        })
        .catch(error => {
            console.error('[PixelBot] Discord notification failed:', error);
        });
    } catch (error) {
        console.error('[PixelBot] Failed to send Discord notification:', error);
    }
}

/**
 * Get Discord credentials from storage
 */
async function getDiscordCredentials() {
    try {
        if (typeof chrome !== 'undefined' && chrome.storage) {
            return new Promise((resolve) => {
                chrome.storage.local.get(['discord_webhook_url', 'discord_user_id'], (result) => {
                    resolve({
                        webhookUrl: result.discord_webhook_url || '',
                        userId: result.discord_user_id || ''
                    });
                });
            });
        }
        return { webhookUrl: '', userId: '' };
    } catch (error) {
        console.error('[PixelBot] Failed to get Discord credentials:', error);
        return { webhookUrl: '', userId: '' };
    }
}

// ===== NOTIFICATION COORDINATOR =====

/**
 * Send notifications to all configured services
 */
async function sendNotification(message) {
    // Send Telegram notification
    const telegramCreds = await getTelegramCredentials();
    if (telegramCreds.token && telegramCreds.chatId) {
        sendTelegramNotification(telegramCreds.token, telegramCreds.chatId, message);
    }
    
    // Send Discord notification
    const discordCreds = await getDiscordCredentials();
    if (discordCreds.webhookUrl) {
        sendDiscordNotification(discordCreds.webhookUrl, discordCreds.userId, message);
    }
}

// Rate limiting for notifications
let lastNotificationTime = 0;
const NOTIFICATION_COOLDOWN = 60000; // 1 minute

/**
 * Send notification with rate limiting
 */
async function sendNotificationThrottled(message) {
    const now = Date.now();
    if (now - lastNotificationTime < NOTIFICATION_COOLDOWN) {
        console.log('[PixelBot] Notification throttled');
        return;
    }
    
    lastNotificationTime = now;
    await sendNotification(message);
}

/**
 * Place a single pixel with human placing method
 */
function placePixel(pixel, botState) {
    try {
        if (!botState.websocket || botState.websocket.readyState !== WebSocket.OPEN) {
            console.error('[PixelBot] WebSocket not connected');
            botState.queue.unshift(pixel); // Re-queue
            return;
        }
        
        let finalX = pixel.x;
        let finalY = pixel.y;
        
        // Apply human placing method
        if (botState.humanPlacing) {
            const randomOffset = getRandomOffset(botState.humanAccuracy);
            finalX = pixel.x + randomOffset.x;
            finalY = pixel.y + randomOffset.y;
            
            console.log(`[PixelBot] Human placing: (${pixel.x}, ${pixel.y}) -> (${finalX}, ${finalY})`);
        }
        
        const message = {
            type: 'placePixel',
            x: finalX,
            y: finalY,
            color: pixel.color
        };
        
        botState.websocket.send(JSON.stringify(message));
        console.log(`[PixelBot] Placed pixel at (${finalX}, ${finalY})`);
        
        // Update progress
        updateProgress(botState);
        
    } catch (error) {
        console.error('[PixelBot] Failed to place pixel:', error);
        botState.pixelsFailed++;
        botState.queue.unshift(pixel); // Re-queue on error
    }
}

/**
 * Generate random offset for human placing (circular distribution)
 */
function getRandomOffset(radius) {
    // Generate random angle and distance for circular distribution
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.sqrt(Math.random()) * radius; // Square root for uniform circular distribution
    
    return {
        x: Math.round(Math.cos(angle) * distance),
        y: Math.round(Math.sin(angle) * distance)
    };
}

/**
 * Setup cooldown accumulation for human placing
 */
function setupCooldownAccumulation(botState) {
    setInterval(() => {
        if (!botState.isRunning) {
            botState.accumulatedCooldown = 0;
            return;
        }
        
        // Accumulate cooldown
        if (botState.accumulatedCooldown < botState.maxCooldown) {
            botState.accumulatedCooldown += 1;
        }
        
        // Update cooldown display
        updateCooldownDisplay(botState);
        
    }, 1000);
}

/**
 * Update cooldown display in UI
 */
function updateCooldownDisplay(botState) {
    const cooldownElement = document.getElementById('pixelbot-cooldown');
    if (cooldownElement) {
        const percentage = Math.min(100, (botState.accumulatedCooldown / botState.maxCooldown) * 100);
        cooldownElement.textContent = `${Math.round(percentage)}%`;
    }
}

/**
 * Update bot status in UI
 */
function updateStatus(status, type = 'normal') {
    const statusElement = document.getElementById('pixelbot-status');
    if (statusElement) {
        statusElement.textContent = status;
        statusElement.className = `pixelbot-status pixelbot-${type}`;
    }
    
    const debugElement = document.getElementById('pixelbot-debug');
    if (debugElement) {
        debugElement.textContent = status;
    }
}

/**
 * Update progress bar
 */
function updateProgress(botState) {
    const progressElement = document.getElementById('pixelbot-progress');
    if (progressElement) {
        // Calculate progress based on placed pixels vs total template size
        const totalPixels = botState.pixelsPlaced + botState.queue.length;
        const progress = totalPixels > 0 ? (botState.pixelsPlaced / totalPixels) * 100 : 0;
        progressElement.style.width = `${progress}%`;
    }
}

/**
 * Setup UI for auto-place functionality
 */
function setupAutoPlaceUI(siteType, botState) {
    try {
        console.log('[PixelBot] Setting up UI for site:', siteType);
        console.log('[PixelBot] Document ready state:', document.readyState);
        console.log('[PixelBot] Document body exists:', !!document.body);
        
        // Check if body exists
        if (!document.body) {
            console.error('[PixelBot] Document body not found, waiting...');
            setTimeout(() => setupAutoPlaceUI(siteType, botState), 500);
            return;
        }
        
        // Remove existing UI if present
        const existingUI = document.querySelector('.pixelbot-container');
        if (existingUI) {
            existingUI.remove();
            console.log('[PixelBot] Removed existing UI');
        }
        
        // Create UI elements for the bot
        const uiContainer = document.createElement('div');
        uiContainer.className = 'pixelbot-container';
        uiContainer.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            width: 320px;
            padding: 15px;
            z-index: 2147483647;
            font-family: system-ui, -apple-system, sans-serif;
            font-size: 13px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        `;
        
        console.log('[PixelBot] UI container created');
    
    uiContainer.innerHTML = `
        <div class="pixelbot-header" style="font-size: 16px; margin-bottom: 10px;">
            PixelBot v3.0.0
        </div>
        <div style="margin-bottom: 10px;">
            <div style="font-size: 12px; color: #a0a0c0;">Site: ${siteType}</div>
            <div class="pixelbot-status" style="font-size: 12px; margin-top: 5px;">
                Status: <span id="pixelbot-status">Ready</span>
            </div>
            <div style="font-size: 11px; color: #8080a0; margin-top: 3px;">
                Queue: <span id="pixelbot-queue-size">0</span> | Placed: <span id="pixelbot-placed">0</span>
            </div>
            <div style="font-size: 10px; color: #8080a0; margin-top: 2px;">
                API Status: <span id="pixelbot-api-status">Ready</span>
            </div>
        </div>
        <div style="font-size: 10px; color: #8080a0; margin-top: 2px;">
            Debug: <span id="pixelbot-debug">UI loaded</span>
        </div>
        
        <!-- Template Section -->
        <div style="margin-bottom: 10px; padding-top: 10px; border-top: 1px solid rgba(100, 50, 200, 0.3);">
            <div style="font-size: 12px; color: #6c5ce7; margin-bottom: 5px; font-weight: bold;">Template</div>
            <div style="display: flex; gap: 5px; margin-bottom: 5px;">
                <button class="pixelbot-button" id="pixelbot-load-template" style="flex: 1; font-size: 11px;">Load Template</button>
                <button class="pixelbot-button" id="pixelbot-crop-mode" style="flex: 1; font-size: 11px;">Crop & Set Coords</button>
            </div>
            <div style="display: flex; gap: 5px; margin-bottom: 5px;">
                <button class="pixelbot-button" id="pixelbot-auto-coords" style="flex: 1; font-size: 11px;">Auto Coords</button>
                <button class="pixelbot-button" id="pixelbot-add-to-queue" style="flex: 1; font-size: 11px;">Add to Queue</button>
            </div>
            <div style="display: flex; gap: 5px; margin-bottom: 5px;">
                <div style="flex: 1;">
                    <label style="font-size: 10px; color: #a0a0c0;">X:</label>
                    <input type="number" id="pixelbot-coord-x" class="pixelbot-input" style="width: 100%; font-size: 11px;" value="0">
                </div>
                <div style="flex: 1;">
                    <label style="font-size: 10px; color: #a0a0c0;">Y:</label>
                    <input type="number" id="pixelbot-coord-y" class="pixelbot-input" style="width: 100%; font-size: 11px;" value="0">
                </div>
            </div>
            <div style="font-size: 10px; color: #8080a0; margin-top: 5px;">
                Template: <span id="pixelbot-template-info">None</span>
            </div>
        </div>
        
        <!-- Human Placing Section -->
        <div style="margin-bottom: 10px; padding-top: 10px; border-top: 1px solid rgba(100, 50, 200, 0.3);">
            <div style="font-size: 12px; color: #6c5ce7; margin-bottom: 5px; font-weight: bold;">Human Placing</div>
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
                <input type="checkbox" id="pixelbot-human-placing" checked style="accent-color: #9b59b6;">
                <label for="pixelbot-human-placing" style="font-size: 11px; color: #a0a0c0;">Enable Human Placing</label>
            </div>
            <div style="display: flex; gap: 5px; margin-bottom: 5px;">
                <div style="flex: 1;">
                    <label style="font-size: 10px; color: #a0a0c0;">Accuracy (px):</label>
                    <input type="number" id="pixelbot-accuracy" class="pixelbot-input" style="width: 100%; font-size: 11px;" value="5" min="1" max="20">
                </div>
                <div style="flex: 1;">
                    <label style="font-size: 10px; color: #a0a0c0;">Cooldown (s):</label>
                    <input type="number" id="pixelbot-cooldown-setting" class="pixelbot-input" style="width: 100%; font-size: 11px;" value="10" min="1" max="100">
                </div>
            </div>
            <div style="font-size: 10px; color: #8080a0; margin-top: 5px;">
                Accumulated: <span id="pixelbot-cooldown">0%</span>
            </div>
        </div>
        
        <div class="pixelbot-progress" style="width: 0%; margin-bottom: 10px;" id="pixelbot-progress"></div>
        <div style="display: flex; gap: 10px;">
            <button class="pixelbot-button" id="pixelbot-start">Start</button>
            <button class="pixelbot-button" id="pixelbot-stop">Stop</button>
        </div>
    `;
    
    try {
        document.body.appendChild(uiContainer);
        console.log('[PixelBot] UI appended to document.body');
    } catch (error) {
        console.error('[PixelBot] Failed to append UI to document.body:', error);
        // Try alternative methods
        try {
            document.documentElement.appendChild(uiContainer);
            console.log('[PixelBot] UI appended to document.documentElement');
        } catch (error2) {
            console.error('[PixelBot] Failed to append UI to document.documentElement:', error2);
        }
    }
    
    try {
        // Setup button handlers
        const startButton = document.getElementById('pixelbot-start');
    const stopButton = document.getElementById('pixelbot-stop');
    const queueSizeElement = document.getElementById('pixelbot-queue-size');
    const placedElement = document.getElementById('pixelbot-placed');
    const apiStatusElement = document.getElementById('pixelbot-api-status');
    const debugElement = document.getElementById('pixelbot-debug');
    const loadTemplateButton = document.getElementById('pixelbot-load-template');
    const cropModeButton = document.getElementById('pixelbot-crop-mode');
    const autoCoordsButton = document.getElementById('pixelbot-auto-coords');
    const addToQueueButton = document.getElementById('pixelbot-add-to-queue');
    const templateInfoElement = document.getElementById('pixelbot-template-info');
    const coordXInput = document.getElementById('pixelbot-coord-x');
    const coordYInput = document.getElementById('pixelbot-coord-y');
    const humanPlacingCheckbox = document.getElementById('pixelbot-human-placing');
    const accuracyInput = document.getElementById('pixelbot-accuracy');
    const cooldownSettingInput = document.getElementById('pixelbot-cooldown-setting');
    
    startButton.addEventListener('click', () => {
        if (!botState.isRunning) {
            botState.isRunning = true;
            updateStatus('Running', 'success');
            console.log('[PixelBot] Auto-place started');
        }
    });
    
    stopButton.addEventListener('click', () => {
        if (botState.isRunning) {
            botState.isRunning = false;
            updateStatus('Stopped', 'normal');
            console.log('[PixelBot] Auto-place stopped');
        }
    });
    
    // Load template button
    loadTemplateButton.addEventListener('click', async () => {
        try {
            updateStatus('Loading template...', 'normal');
            const file = await getImageFromUser();
            if (file) {
                // Load template with progress feedback
                setTimeout(async () => {
                    try {
                        await templateManager.loadTemplateFromFile(file);
                        templateInfoElement.textContent = `${templateManager.currentTemplate.width}x${templateManager.currentTemplate.height}`;
                        updateStatus('Template loaded', 'success');
                        
                        // Auto-calculate coordinates after loading
                        const coords = templateManager.autoSelectCoordinates();
                        if (coords) {
                            botState.templateOffsetX = coords.x;
                            botState.templateOffsetY = coords.y;
                            coordXInput.value = coords.x;
                            coordYInput.value = coords.y;
                        }
                    } catch (error) {
                        console.error('[PixelBot] Failed to load template:', error);
                        updateStatus('Load failed', 'error');
                    }
                }, 100);
            } else {
                updateStatus('Template loading cancelled', 'normal');
            }
        } catch (error) {
            console.error('[PixelBot] Failed to load template:', error);
            updateStatus('Load failed', 'error');
        }
    });
    
    // Crop mode button
    cropModeButton.addEventListener('click', () => {
        if (templateManager.cropMode) {
            templateManager.disableCropMode();
            cropModeButton.textContent = 'Crop & Set Coords';
            updateStatus('Crop disabled', 'normal');
        } else {
            if (!templateManager.currentTemplate) {
                updateStatus('Load template first', 'error');
                return;
            }
            
            templateManager.enableCropMode();
            cropModeButton.textContent = 'Cancel Crop';
            updateStatus('Crop mode enabled', 'success');
            
            // Remove any existing overlay
            const existingOverlay = document.querySelector('[data-pixelbot-crop-overlay]');
            if (existingOverlay) {
                existingOverlay.remove();
            }
            
            setupCropSelection(uiContainer, templateManager, cropModeButton);
        }
    });
    
    // Auto coordinates button
    autoCoordsButton.addEventListener('click', () => {
        const coords = templateManager.autoSelectCoordinates();
        if (coords) {
            botState.templateOffsetX = coords.x;
            botState.templateOffsetY = coords.y;
            coordXInput.value = coords.x;
            coordYInput.value = coords.y;
            updateStatus(`Coords: ${coords.x}, ${coords.y}`, 'success');
        }
    });
    
    // Manual coordinate inputs
    coordXInput.addEventListener('change', (e) => {
        botState.templateOffsetX = parseInt(e.target.value) || 0;
    });
    
    coordYInput.addEventListener('change', (e) => {
        botState.templateOffsetY = parseInt(e.target.value) || 0;
    });
    
    // Add to queue button
    addToQueueButton.addEventListener('click', () => {
        const offsetX = parseInt(coordXInput.value) || 0;
        const offsetY = parseInt(coordYInput.value) || 0;
        const pixels = templateManager.getTemplatePixels(offsetX, offsetY);
        
        // Add all pixels to queue (dynamic queue size)
        botState.queue.push(...pixels);
        
        updateStatus(`Added ${pixels.length} pixels`, 'success');
        console.log(`[PixelBot] Added ${pixels.length} pixels to queue at (${offsetX}, ${offsetY})`);
    });
    
    // Human placing checkbox
    humanPlacingCheckbox.addEventListener('change', (e) => {
        botState.humanPlacing = e.target.checked;
        updateStatus(botState.humanPlacing ? 'Human placing enabled' : 'Human placing disabled', 'success');
        console.log(`[PixelBot] Human placing: ${botState.humanPlacing}`);
    });
    
    // Accuracy input
    accuracyInput.addEventListener('change', (e) => {
        botState.humanAccuracy = parseInt(e.target.value) || 5;
        console.log(`[PixelBot] Human accuracy: ${botState.humanAccuracy}px`);
    });
    
    // Cooldown setting input
    cooldownSettingInput.addEventListener('change', (e) => {
        const cooldown = parseInt(e.target.value) || 10;
        botState.maxCooldown = cooldown;
        botState.accumulatedCooldown = 0; // Reset accumulated cooldown
        updateStatus(`Cooldown set to ${cooldown}s`, 'success');
        console.log(`[PixelBot] Max cooldown: ${cooldown}s`);
    });
    
    // Update queue size display
    setInterval(() => {
        if (queueSizeElement) {
            queueSizeElement.textContent = botState.queue.length;
        }
        if (placedElement) {
            placedElement.textContent = botState.pixelsPlaced;
        }
        if (apiStatusElement) {
            apiStatusElement.textContent = botState.apiLimitReached ? 'Limited' : 'Ready';
            apiStatusElement.style.color = botState.apiLimitReached ? '#e74c3c' : '#2ecc71';
        }
    }, 1000);
    } catch (error) {
        console.error('[PixelBot] Failed to setup button handlers:', error);
    }
}

/**
 * Setup crop selection functionality
 */
function setupCropSelection(uiContainer, templateManager, cropButton) {
    const overlay = document.createElement('div');
    overlay.setAttribute('data-pixelbot-crop-overlay', 'true');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 10001;
        cursor: crosshair;
    `;
    
    let isSelecting = false;
    let startX, startY, endX, endY;
    let selectionBox = null;
    
    overlay.addEventListener('mousedown', (e) => {
        isSelecting = true;
        startX = e.clientX;
        startY = e.clientY;
        
        selectionBox = document.createElement('div');
        selectionBox.style.cssText = `
            position: absolute;
            border: 2px solid #9b59b6;
            background: rgba(155, 89, 182, 0.2);
            pointer-events: none;
        `;
        overlay.appendChild(selectionBox);
    });
    
    overlay.addEventListener('mousemove', (e) => {
        if (!isSelecting || !selectionBox) return;
        
        endX = e.clientX;
        endY = e.clientY;
        
        const left = Math.min(startX, endX);
        const top = Math.min(startY, endY);
        const width = Math.abs(endX - startX);
        const height = Math.abs(endY - startY);
        
        selectionBox.style.left = left + 'px';
        selectionBox.style.top = top + 'px';
        selectionBox.style.width = width + 'px';
        selectionBox.style.height = height + 'px';
    });
    
    overlay.addEventListener('mouseup', (e) => {
        if (!isSelecting) return;
        isSelecting = false;
        
        if (selectionBox) {
            const left = Math.min(startX, endX);
            const top = Math.min(startY, endY);
            const width = Math.abs(endX - startX);
            const height = Math.abs(endY - startY);
            
            if (width > 10 && height > 10) {
                templateManager.setCropSelection({ x: left, y: top, width, height });
                const cropped = templateManager.applyCrop();
                
                if (cropped) {
                    // Update coordinates to match cropped template position
                    const coordXInput = document.getElementById('pixelbot-coord-x');
                    const coordYInput = document.getElementById('pixelbot-coord-y');
                    const templateInfoElement = document.getElementById('pixelbot-template-info');
                    
                    if (coordXInput && coordYInput) {
                        coordXInput.value = cropped.x;
                        coordYInput.value = cropped.y;
                    }
                    
                    if (templateInfoElement) {
                        templateInfoElement.textContent = `${cropped.width}x${cropped.height}`;
                    }
                    
                    updateStatus('Template cropped & coords set', 'success');
                }
            }
            
            selectionBox.remove();
            selectionBox = null;
        }
        
        overlay.remove();
        templateManager.disableCropMode();
        
        // Update crop button text
        if (cropButton) {
            cropButton.textContent = 'Crop & Set Coords';
        }
    });
    
    document.body.appendChild(overlay);
}
    const overlay = document.createElement('div');
    overlay.setAttribute('data-pixelbot-crop-overlay', 'true');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 10001;
        cursor: crosshair;
    `;
    
    let isSelecting = false;
    let startX, startY, endX, endY;
    let selectionBox = null;
    
    overlay.addEventListener('mousedown', (e) => {
        isSelecting = true;
        startX = e.clientX;
        startY = e.clientY;
        
        selectionBox = document.createElement('div');
        selectionBox.style.cssText = `
            position: absolute;
            border: 2px solid #9b59b6;
            background: rgba(155, 89, 182, 0.2);
            pointer-events: none;
        `;
        overlay.appendChild(selectionBox);
    });
    
    overlay.addEventListener('mousemove', (e) => {
        if (!isSelecting || !selectionBox) return;
        
        endX = e.clientX;
        endY = e.clientY;
        
        const left = Math.min(startX, endX);
        const top = Math.min(startY, endY);
        const width = Math.abs(endX - startX);
        const height = Math.abs(endY - startY);
        
        selectionBox.style.left = left + 'px';
        selectionBox.style.top = top + 'px';
        selectionBox.style.width = width + 'px';
        selectionBox.style.height = height + 'px';
    });
    
    overlay.addEventListener('mouseup', (e) => {
        if (!isSelecting) return;
        isSelecting = false;
        
        if (selectionBox) {
            const left = Math.min(startX, endX);
            const top = Math.min(startY, endY);
            const width = Math.abs(endX - startX);
            const height = Math.abs(endY - startY);
            
            if (width > 10 && height > 10) {
                templateManager.setCropSelection({ x: left, y: top, width, height });
                templateManager.applyCrop();
                updateStatus('Template cropped', 'success');
            }
            
            selectionBox.remove();
            selectionBox = null;
        }
        
        overlay.remove();
        templateManager.disableCropMode();
        
        // Update crop button text
        if (cropButton) {
            cropButton.textContent = 'Crop';
        }
    });
    
    document.body.appendChild(overlay);
}

// ===== START BOT =====

// Initialize bot when script loads
// Only initialize if not already loaded by initer
if (typeof window.PixelBotInitialized === 'undefined') {
    window.PixelBotInitialized = true;
    initializeBot();
}