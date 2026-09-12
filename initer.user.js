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

// ===== UPDATE CHECK =====

function parseVersion(versionString) {
    return versionString.split(".").map(Number);
}

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

// Check for updates
if (typeof GM_info !== 'undefined' && GM_info.script.updateURL) {
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

// ===== LOAD MAIN BOT CODE =====

// Load the main bot code from GitHub using GM_xmlhttpRequest
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
                        loadLocalBotCode();
                    };
                    document.head.appendChild(script);
                } catch (error) {
                    console.error('[PixelBot] Failed to create blob:', error);
                    loadLocalBotCode();
                }
            } else {
                console.error('[PixelBot] Failed to load bot code from GitHub, status:', response.status);
                loadLocalBotCode();
            }
        },
        onerror: function(error) {
            console.error('[PixelBot] Failed to load bot code from GitHub:', error);
            loadLocalBotCode();
        }
    });
}

// Load local bot code as fallback
function loadLocalBotCode() {
    console.log('[PixelBot] Trying fallback to local file...');
    
    // Try to load from local file using FileReader
    const localScript = document.createElement('script');
    localScript.src = 'pixels.user-bot.js';
    localScript.onload = () => {
        console.log('[PixelBot] Main bot code loaded from local file');
    };
    localScript.onerror = (error) => {
        console.error('[PixelBot] Failed to load main bot code from local file:', error);
    };
    
    if (document.head) {
        document.head.appendChild(localScript);
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            if (document.head) {
                document.head.appendChild(localScript);
            } else {
                console.error('[PixelBot] No document.head available');
            }
        });
    }
}

// Load bot code with proper timing
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadMainBotCode);
} else {
    // Small delay to ensure DOM is ready
    setTimeout(loadMainBotCode, 100);
}