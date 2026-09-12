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
// @require      https://raw.githubusercontent.com/puweofficial/pixelbot/main/pixels.user-bot.js
// @downloadURL  https://raw.githubusercontent.com/puweofficial/pixelbot/main/initer.user.js
// @updateURL    https://raw.githubusercontent.com/puweofficial/pixelbot/main/initer.user.js
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