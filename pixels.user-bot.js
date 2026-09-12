// ===== MAIN BOT CODE =====

// Inject custom CSS for blue-purple gradient theme
const customStyle = document.createElement('style');
customStyle.textContent = `
    /* Blue-purple gradient theme */
    .pixelbot-ui {
        position: fixed;
        top: 20px;
        right: 20px;
        width: 300px;
        background: linear-gradient(135deg, #4a90e2 0%, #9b59b6 100%);
        border: 2px solid #6c5ce7;
        border-radius: 10px;
        padding: 15px;
        z-index: 2147483647;
        color: white;
        font-family: Arial, sans-serif;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    }
    .pixelbot-ui h2 {
        margin: 0 0 15px 0;
        color: white;
        text-align: center;
        font-size: 18px;
    }
    .pixelbot-ui .tab-container {
        display: flex;
        margin-bottom: 15px;
    }
    .pixelbot-ui .tab {
        flex: 1;
        padding: 8px;
        background: rgba(10, 0, 30, 0.8);
        border: 1px solid #6c5ce7;
        color: white;
        cursor: pointer;
        text-align: center;
        margin: 0 2px;
        border-radius: 5px;
    }
    .pixelbot-ui .tab.active {
        background: linear-gradient(135deg, #4a90e2 0%, #9b59b6 100%);
    }
    .pixelbot-ui .tab-content {
        display: none;
    }
    .pixelbot-ui .tab-content.active {
        display: block;
    }
    .pixelbot-ui label {
        display: block;
        margin: 10px 0 5px 0;
        color: white;
        font-size: 12px;
    }
    .pixelbot-ui .checkbox-label {
        display: flex;
        align-items: center;
        margin: 10px 0 5px 0;
        color: white;
        font-size: 12px;
    }
    .pixelbot-ui .checkbox-label input {
        width: auto;
        margin-right: 10px;
        cursor: pointer;
    }
    .pixelbot-ui input {
        width: 100%;
        padding: 8px;
        background: rgba(10, 0, 30, 0.8);
        border: 1px solid #6c5ce7;
        color: white;
        border-radius: 5px;
        box-sizing: border-box;
    }
    .pixelbot-ui button {
        width: 100%;
        padding: 10px;
        margin: 5px 0;
        background: linear-gradient(135deg, #4a90e2 0%, #9b59b6 100%);
        border: 1px solid #6c5ce7;
        color: white;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
    }
    .pixelbot-ui button:hover {
        background: linear-gradient(135deg, #6c5ce7 0%, #9b59b6 100%);
    }
    .pixelbot-ui .status {
        margin-top: 10px;
        padding: 10px;
        background: rgba(10, 0, 30, 0.8);
        border: 1px solid #6c5ce7;
        border-radius: 5px;
        font-size: 12px;
    }
    .pixelbot-ui .status div {
        margin: 3px 0;
    }
`;
if (document.head) {
    document.head.appendChild(customStyle);
} else {
    document.addEventListener('DOMContentLoaded', () => {
        if (document.head) {
            document.head.appendChild(customStyle);
        }
    });
}

// ===== BOT STATE =====
const botState = {
    queue: [],
    pixelsPlaced: 0,
    isRunning: false,
    placementMethod: 'human', // human, lines
    followPlacing: false,
    followX: 0,
    followY: 0,
    accumulatedCooldown: 0,
    maxCooldown: 10,
    template: null,
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
    
    // Add random offset for human-like placement
    const offsetX = Math.floor(Math.random() * 3) - 1; // -1, 0, 1
    const offsetY = Math.floor(Math.random() * 3) - 1;
    const finalX = x + offsetX;
    const finalY = y + offsetY;
    
    // Site-specific placement logic
    switch (site) {
        case 'pixelya':
        case 'pixmap':
            return await placePixelStandard(finalX, finalY, color);
        case 'pixelplanet':
            return await placePixelPlanet(finalX, finalY, color);
        default:
            console.log('[PixelBot] Unknown site, using standard placement');
            return await placePixelStandard(finalX, finalY, color);
    }
}

async function placePixelStandard(x, y, color) {
    try {
        // Standard pixel placement API call
        const response = await fetch('/api/pixel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ x, y, color })
        });
        
        if (response.ok) {
            const data = await response.json();
            if (data.cooldown) {
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
        // PixelPlanet specific placement
        const response = await fetch('/api/pixel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ x, y, color })
        });
        
        if (response.ok) {
            const data = await response.json();
            if (data.cooldown) {
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

// ===== HUMAN PLACING METHOD =====
async function humanPlacingLoop() {
    if (!botState.isRunning || botState.queue.length === 0) {
        return;
    }
    
    // Accumulate cooldown
    const accumulationTime = botState.apiCooldown > 100 ? 100 : 10;
    const maxAccumulation = botState.apiCooldown || 10;
    
    while (botState.accumulatedCooldown < maxAccumulation && botState.isRunning) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        botState.accumulatedCooldown++;
    }
    
    // Place accumulated pixels
    const pixelsToPlace = Math.min(botState.queue.length, Math.floor(botState.accumulatedCooldown / (botState.apiCooldown || 10)));
    
    for (let i = 0; i < pixelsToPlace && botState.isRunning; i++) {
        const pixel = botState.queue.shift();
        const success = await placePixel(pixel.x, pixel.y, pixel.color);
        
        if (success) {
            botState.pixelsPlaced++;
            botState.accumulatedCooldown -= (botState.apiCooldown || 10);
        } else {
            // Requeue failed pixel
            botState.queue.push(pixel);
        }
        
        // Small delay between placements
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    // Continue loop
    if (botState.isRunning) {
        setTimeout(humanPlacingLoop, 1000);
    }
}

// ===== FOLLOW PLACING INDICATOR =====
function showFollowIndicator() {
    if (!botState.followPlacing || botState.queue.length === 0) {
        return;
    }
    
    // Remove existing indicator
    const existingIndicator = document.querySelector('.pixelbot-indicator');
    if (existingIndicator) {
        existingIndicator.remove();
    }
    
    // Show next pixel position
    const nextPixel = botState.queue[0];
    if (!nextPixel) return;
    
    const indicator = document.createElement('div');
    indicator.className = 'pixelbot-indicator';
    indicator.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: rgba(255, 0, 0, 0.5);
        border: 2px solid red;
        border-radius: 50%;
        pointer-events: none;
        z-index: 2147483646;
        left: ${nextPixel.x}px;
        top: ${nextPixel.y}px;
        transform: translate(-50%, -50%);
    `;
    
    document.body.appendChild(indicator);
}

function hideFollowIndicator() {
    const existingIndicator = document.querySelector('.pixelbot-indicator');
    if (existingIndicator) {
        existingIndicator.remove();
    }
}

// ===== FOLLOW PLACING LOGIC =====
async function placeWithFollow() {
    if (!botState.isRunning || botState.queue.length === 0) {
        return;
    }
    
    if (botState.followPlacing) {
        showFollowIndicator();
    }
    
    const pixel = botState.queue.shift();
    const success = await placePixel(pixel.x, pixel.y, pixel.color);
    
    if (success) {
        botState.pixelsPlaced++;
    } else {
        // Requeue failed pixel
        botState.queue.push(pixel);
        // Wait before retry
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    if (botState.followPlacing) {
        hideFollowIndicator();
    }
    
    // Continue loop
    if (botState.isRunning && botState.queue.length > 0) {
        setTimeout(placeWithFollow, 100);
    }
}

// ===== STANDARD LINES METHOD =====
async function standardLinesLoop() {
    if (!botState.isRunning || botState.queue.length === 0) {
        return;
    }
    
    // Sort queue by Y coordinate, then by X (top to bottom, left to right)
    botState.queue.sort((a, b) => {
        if (a.y !== b.y) return a.y - b.y;
        return a.x - b.x;
    });
    
    while (botState.queue.length > 0 && botState.isRunning) {
        const pixel = botState.queue.shift();
        const success = await placePixel(pixel.x, pixel.y, pixel.color);
        
        if (success) {
            botState.pixelsPlaced++;
        } else {
            // Requeue failed pixel
            botState.queue.push(pixel);
            // Wait before retry
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        
        // Short delay between placements
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    // Continue loop
    if (botState.isRunning && botState.queue.length > 0) {
        setTimeout(standardLinesLoop, 100);
    }
}

// ===== TEMPLATE LOADING =====
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
                
                // Convert to pixel queue
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                botState.template = {
                    width: canvas.width,
                    height: canvas.height,
                    pixels: []
                };
                
                for (let y = 0; y < canvas.height; y++) {
                    for (let x = 0; x < canvas.width; x++) {
                        const index = (y * canvas.width + x) * 4;
                        const r = imageData.data[index];
                        const g = imageData.data[index + 1];
                        const b = imageData.data[index + 2];
                        const a = imageData.data[index + 3];
                        
                        if (a > 0) {
                            const color = rgbToColorId(r, g, b);
                            botState.template.pixels.push({ x, y, color });
                        }
                    }
                }
                
                // Auto-detect crop bounds
                detectCropBounds();
                
                updateStatus('Template loaded: ' + botState.template.pixels.length + ' pixels');
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    };
    
    input.click();
}

function detectCropBounds() {
    if (!botState.template || botState.template.pixels.length === 0) return;
    
    const pixels = botState.template.pixels;
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    
    pixels.forEach(pixel => {
        if (pixel.x < minX) minX = pixel.x;
        if (pixel.x > maxX) maxX = pixel.x;
        if (pixel.y < minY) minY = pixel.y;
        if (pixel.y > maxY) maxY = pixel.y;
    });
    
    botState.cropX = minX;
    botState.cropY = minY;
    botState.cropWidth = maxX - minX + 1;
    botState.cropHeight = maxY - minY + 1;
    
    // Update crop field inputs
    const cropXInput = document.querySelector('#crop-x');
    const cropYInput = document.querySelector('#crop-y');
    const cropWidthInput = document.querySelector('#crop-width');
    const cropHeightInput = document.querySelector('#crop-height');
    
    if (cropXInput) cropXInput.value = botState.cropX;
    if (cropYInput) cropYInput.value = botState.cropY;
    if (cropWidthInput) cropWidthInput.value = botState.cropWidth;
    if (cropHeightInput) cropHeightInput.value = botState.cropHeight;
    
    // Update coordinate inputs
    const xInput = document.querySelector('#template-x');
    const yInput = document.querySelector('#template-y');
    if (xInput) xInput.value = botState.cropX;
    if (yInput) yInput.value = botState.cropY;
    
    updateStatus('Auto-detected crop: X=' + botState.cropX + ', Y=' + botState.cropY + ', W=' + botState.cropWidth + ', H=' + botState.cropHeight);
}

function cropTemplate() {
    if (!botState.template || botState.template.pixels.length === 0) {
        updateStatus('No template loaded');
        return;
    }
    
    const cropX = parseInt(document.querySelector('#crop-x').value) || 0;
    const cropY = parseInt(document.querySelector('#crop-y').value) || 0;
    const cropWidth = parseInt(document.querySelector('#crop-width').value) || botState.template.width;
    const cropHeight = parseInt(document.querySelector('#crop-height').value) || botState.template.height;
    
    // Filter pixels within crop bounds
    botState.template.pixels = botState.template.pixels.filter(pixel => 
        pixel.x >= cropX && pixel.x < cropX + cropWidth &&
        pixel.y >= cropY && pixel.y < cropY + cropHeight
    );
    
    // Update template dimensions
    botState.template.width = cropWidth;
    botState.template.height = cropHeight;
    
    // Adjust pixel coordinates relative to crop
    botState.template.pixels = botState.template.pixels.map(pixel => ({
        x: pixel.x - cropX,
        y: pixel.y - cropY,
        color: pixel.color
    }));
    
    // Update coordinates
    botState.templateX = cropX;
    botState.templateY = cropY;
    
    updateStatus('Template cropped: ' + botState.template.pixels.length + ' pixels');
}

function rgbToColorId(r, g, b) {
    // Simplified color conversion - would need site-specific palette
    return ((r << 16) | (g << 8) | b).toString(16);
}

// ===== UI CREATION =====
function createUI() {
    // Remove existing UI
    const existingUI = document.querySelector('.pixelbot-ui');
    if (existingUI) {
        existingUI.remove();
    }
    
    const ui = document.createElement('div');
    ui.className = 'pixelbot-ui';
    
    ui.innerHTML = `
        <h2>PixelBot</h2>
        <div class="tab-container">
            <div class="tab active" data-tab="template">Template</div>
            <div class="tab" data-tab="settings">Settings</div>
        </div>
        
        <div class="tab-content active" id="template-tab">
            <label>Load Template Image</label>
            <button id="load-template">Load Template</button>
            
            <label>Crop X</label>
            <input type="number" id="crop-x" value="0">
            
            <label>Crop Y</label>
            <input type="number" id="crop-y" value="0">
            
            <label>Crop Width</label>
            <input type="number" id="crop-width" value="0">
            
            <label>Crop Height</label>
            <input type="number" id="crop-height" value="0">
            
            <button id="crop-template">Crop Template</button>
            <button id="auto-crop">Auto Detect Crop</button>
            
            <label>Template X Coordinate</label>
            <input type="number" id="template-x" value="0">
            
            <label>Template Y Coordinate</label>
            <input type="number" id="template-y" value="0">
            
            <button id="add-to-queue">Add to Queue</button>
        </div>
        
        <div class="tab-content" id="settings-tab">
            <label>Placement Method</label>
            <select id="placement-method">
                <option value="human">Human Placing</option>
                <option value="lines">Standard Lines</option>
            </select>
            
            <label class="checkbox-label">
                <input type="checkbox" id="follow-placing"> Follow Placing (show where to place)
            </label>
            
            <label>Accumulation Time (seconds)</label>
            <input type="number" id="accumulation-time" value="10">
            
            <button id="start-bot">Start Bot</button>
            <button id="stop-bot">Stop Bot</button>
        </div>
        
        <div class="status">
            <div>Status: <span id="status-text">Idle</span></div>
            <div>Queue: <span id="queue-count">0</span></div>
            <div>Placed: <span id="placed-count">0</span></div>
            <div>Cooldown: <span id="cooldown-count">0</span>s</div>
        </div>
    `;
    
    // Add event listeners
    ui.querySelector('#load-template').addEventListener('click', loadTemplate);
    ui.querySelector('#crop-template').addEventListener('click', cropTemplate);
    ui.querySelector('#auto-crop').addEventListener('click', detectCropBounds);
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
    
    // Append to document
    if (document.body) {
        document.body.appendChild(ui);
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            if (document.body) {
                document.body.appendChild(ui);
            }
        });
    }
}

function addToQueue() {
    if (!botState.template) {
        updateStatus('No template loaded');
        return;
    }
    
    botState.templateX = parseInt(document.querySelector('#template-x').value) || 0;
    botState.templateY = parseInt(document.querySelector('#template-y').value) || 0;
    
    botState.queue = botState.template.pixels.map(pixel => ({
        x: pixel.x + botState.templateX,
        y: pixel.y + botState.templateY,
        color: pixel.color
    }));
    
    updateStatus('Added ' + botState.queue.length + ' pixels to queue');
    updateUI();
}

function startBot() {
    if (botState.queue.length === 0) {
        updateStatus('Queue is empty');
        return;
    }
    
    botState.isRunning = true;
    botState.placementMethod = document.querySelector('#placement-method').value;
    botState.followPlacing = document.querySelector('#follow-placing').checked;
    botState.accumulatedCooldown = 0;
    
    const accumulationTime = parseInt(document.querySelector('#accumulation-time').value) || 10;
    botState.maxCooldown = accumulationTime;
    
    updateStatus('Bot started with ' + botState.placementMethod + ' method' + (botState.followPlacing ? ' + Follow Placing' : ''));
    
    // Start appropriate placement loop
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
    botState.followPlacing = false;
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
    if (cooldownCount) cooldownCount.textContent = botState.accumulatedCooldown;
}

// ===== INITIALIZATION =====
function initializeBot() {
    console.log('[PixelBot] Initializing...');
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(createUI, 1000);
        });
    } else {
        setTimeout(createUI, 1000);
    }
    
    // Update UI periodically
    setInterval(updateUI, 1000);
}

// Start bot
initializeBot();