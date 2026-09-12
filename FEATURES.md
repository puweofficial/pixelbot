# PixelBot v3.0.0 - Features Documentation

## 🎨 New Features Added

### 1. **Template Management System**
- **Load Template**: Upload image files (PNG, JPG, etc.) to use as templates
- **Template Class**: Full template management with quantization and cropping
- **Palette System**: Color quantization to match site-specific color palettes
- **Template Info**: Display template dimensions and status

### 2. **Crop Functionality**
- **Crop Mode**: Enable crop mode to select regions of the template
- **Visual Selection**: Drag to select crop area with visual feedback
- **Auto-apply**: Automatically applies crop when selection is complete
- **Cancel Option**: Cancel crop mode if needed

### 3. **Coordinate Management**
- **Auto Coords**: Automatically calculates optimal placement coordinates
- **Manual Input**: Direct X, Y coordinate input fields
- **Center Alignment**: Centers template on the canvas
- **Offset Management**: Store and use template offsets

### 4. **Human Placing Method**
- **Human Placing Toggle**: Enable/disable human-like placement
- **Random Offset**: Random circular offset for natural placement
- **Configurable Accuracy**: Adjustable accuracy radius (1-20 pixels)
- **Cooldown Accumulation**: Smart cooldown management based on API limits

### 5. **Cooldown System**
- **API Detection**: Automatically detects cooldown from API responses
- **Accumulation**: Accumulates cooldown over time (10-100 seconds)
- **Smart Placement**: Waits for full cooldown before placing
- **Visual Indicator**: Shows accumulated cooldown percentage

### 6. **Queue Management**
- **Add to Queue**: Add template pixels to placement queue
- **Queue Size Display**: Shows current queue size vs maximum
- **Progress Tracking**: Visual progress bar for queue processing
- **Auto Queue Processing**: Automatic pixel placement from queue

### 7. **Enhanced UI**
- **Template Section**: Dedicated section for template controls
- **Human Placing Section**: Controls for human placing method
- **Coordinate Inputs**: Direct X, Y coordinate fields
- **Status Indicators**: Real-time status updates
- **Blue-Purple Theme**: Consistent gradient styling

## 🚀 How to Use

### Loading a Template:
1. Click "Load Template" button
2. Select an image file from your computer
3. Template info will display dimensions
4. Template is automatically quantized

### Setting Coordinates:
1. **Auto Coords**: Click "Auto Coords" for automatic centering
2. **Manual Input**: Enter X and Y coordinates directly
3. Coordinates are used when adding pixels to queue

### Cropping a Template:
1. Load a template first
2. Click "Crop" button to enable crop mode
3. Drag on screen to select crop area
4. Release to apply crop
5. Click "Cancel Crop" to exit without applying

### Human Plasing Setup:
1. Check "Enable Human Placing" checkbox
2. Set "Accuracy" (random offset radius in pixels)
3. Set "Cooldown" (accumulation time in seconds)
4. Bot will accumulate cooldown before placing

### Adding to Queue:
1. Load and optionally crop template
2. Set coordinates (auto or manual)
3. Configure human placing settings
4. Click "Add to Queue" button
5. Pixels are added to placement queue
6. Start bot to begin placement

## 🎯 Technical Features

### Human Placing Algorithm:
- **Circular Random Offset**: Uses uniform circular distribution
- **Natural Placement**: Simulates human inaccuracy
- **Configurable Radius**: 1-20 pixel accuracy range
- **Random Angle**: 0-360 degrees random direction
- **Random Distance**: Square root distribution for uniformity

### Cooldown Accumulation:
- **Smart Detection**: Reads cooldown from API messages
- **Time Range**: 10-100 seconds based on API limits
- **Accumulation**: Gains 1 second per second
- **Threshold**: Waits until full cooldown before placing
- **Reset**: Resets to 0 after each placement

### Template Class:
- **State Management**: UNLOADED, LOADING, LOADED, QUANTIZED states
- **Color Quantization**: Maps image colors to site palette
- **Transparency Support**: Handles transparent pixels
- **Crop Functionality**: Region-based template cropping
- **Iteration Methods**: Efficient pixel iteration

### Palette Class:
- **Color Mapping**: Fast color-to-index mapping
- **Closest Color**: Finds nearest color for quantization
- **RGBA Conversion**: Converts between color formats
- **Cache System**: Optimized color lookups

### Template Manager:
- **File Loading**: Load from file or URL
- **Crop Management**: Enable/disable crop mode
- **Coordinate Auto-selection**: Smart placement calculation
- **Pixel Extraction**: Extract pixels for queue

## 📦 Files Included

1. **pixelbot-extension-v3.0.0.zip** - Chrome extension with all features
2. **pixelbot-userscript-v3.0.0.zip** - Userscript for Tampermonkey
3. **bot-new.user.js** - Main bot code with template system
4. **initer.user.js** - Updated userscript loader

## 🔧 Configuration

### Bot State Options:
```javascript
{
    isRunning: false,              // Bot running state
    queue: [],                      // Pixel queue
    cooldown: 0,                   // Current cooldown (ms)
    maxCooldown: 10,               // Maximum cooldown (seconds)
    accumulatedCooldown: 0,        // Accumulated cooldown (seconds)
    maxQueueSize: 100,             // Maximum queue size
    placeInterval: 3000,          // Placement interval (ms)
    templateOffsetX: 0,            // Template X offset
    templateOffsetY: 0,            // Template Y offset
    humanPlacing: true,            // Human placing enabled
    humanAccuracy: 5,              // Random offset radius (pixels)
    minAccumulateTime: 10,         // Minimum accumulate time (seconds)
    maxAccumulateTime: 100         // Maximum accumulate time (seconds)
}
```

### Template Manager Options:
```javascript
{
    currentTemplate: null,         // Current loaded template
    currentPalette: null,          // Current color palette
    cropMode: false,               // Crop mode state
    cropSelection: null            // Current crop selection
}
```

## 🎨 Blue-Purple Gradient Theme

All UI elements follow the blue-purple gradient theme:
- **Primary Gradient**: #4a90e2 → #9b59b6
- **Background**: rgba(10, 0, 30, 0.97)
- **Text Color**: #e0e0ff
- **Accent Colors**: #6c5ce7, #9b59b6
- **Status Colors**: Success (#2ecc71), Error (#e74c3c)

## 📝 Notes

- Template files are processed locally (no server upload)
- Color quantization matches site-specific palettes
- Human placing uses circular random distribution
- Cooldown is accumulated over time for natural timing
- Crop selection requires mouse interaction
- Auto coordinates center template on canvas
- Queue respects maximum size limits
- All operations include error handling
- No tap mode - uses WebSocket only for pixel placement

## 🔄 Future Enhancements

Potential improvements for future versions:
- Multiple template support
- Template save/load from storage
- Advanced coordinate algorithms
- Batch template processing
- Template library management
- Color palette customization
- Enhanced crop tools (rotate, scale)
- Multiple placing methods
- Advanced human behavior simulation