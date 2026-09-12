// ==UserScript==
// @name         PixelBot - Advanced Auto-Placing Bot
// @namespace    https://black-and-red.space
// @version      3.0.0
// @description  Advanced bot for pixelplanet.fun, Pixelya, Pixmap and clones with blue-purple gradient theme
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
// @connect      raw.githubusercontent.com
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

// Load main bot code using GM_xmlhttpRequest to bypass CSP
function loadMainBotCode() {
    const githubUrl = 'https://raw.githubusercontent.com/puweofficial/pixelbot/main/pixels.user-bot.js';
    
    console.log('[PixelBot] Loading bot code from GitHub:', githubUrl);
    
    GM_xmlhttpRequest({
        method: 'GET',
        url: githubUrl,
        onload: function(response) {
            if (response.status === 200) {
                console.log('[PixelBot] Bot code loaded from GitHub successfully');
                // Create a Blob and load it as a script to bypass CSP
                try {
                    const blob = new Blob([response.responseText], { type: 'text/javascript' });
                    const blobUrl = URL.createObjectURL(blob);
                    const script = document.createElement('script');
                    script.src = blobUrl;
                    script.onload = () => {
                        console.log('[PixelBot] Bot code executed successfully');
                        URL.revokeObjectURL(blobUrl);
                    };
                    script.onerror = (error) => {
                        console.error('[PixelBot] Failed to execute bot code via blob:', error);
                        URL.revokeObjectURL(blobUrl);
                    };
                    document.head.appendChild(script);
                } catch (error) {
                    console.error('[PixelBot] Failed to create blob:', error);
                }
            } else {
                console.error('[PixelBot] Failed to load bot code from GitHub, status:', response.status);
            }
        },
        onerror: function(error) {
            console.error('[PixelBot] Failed to load bot code from GitHub:', error);
        }
    });
}

// Load bot code when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadMainBotCode);
} else {
    loadMainBotCode();
}