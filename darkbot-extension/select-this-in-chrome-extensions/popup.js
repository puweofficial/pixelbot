// @ts-nocheck

const SENSITIVE_KEYS = [
  'telegram_bot_api',
  'telegram_chat_id',
  'discord_webhook_url',
  'discord_user_id',
];

function xorWithKey(data, key) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    result.push(String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length)));
  }
  return result.join('');
}

function base64Encode(str) {
  try {
    return btoa(unescape(encodeURIComponent(str)));
  } catch {
    return btoa(str);
  }
}

function base64Decode(str) {
  try {
    return decodeURIComponent(escape(atob(str)));
  } catch {
    return atob(str);
  }
}

const SECRET_KEY = 'pixelbot-secret-key-v3';

function encrypt(value) {
  if (!value) return value;
  const xored = xorWithKey(value, SECRET_KEY);
  return base64Encode(xored);
}

function decrypt(value) {
  if (!value) return value;
  try {
    const xored = base64Decode(value);
    return xorWithKey(xored, SECRET_KEY);
  } catch {
    return value;
  }
}

const inputs = {
  telegram_bot_api: document.getElementById('telegram-bot-api'),
  telegram_chat_id: document.getElementById('telegram-chat-id'),
  discord_webhook_url: document.getElementById('discord-webhook'),
  discord_user_id: document.getElementById('discord-user-id'),
};

const statusEl = document.getElementById('status');

function setStatus(msg, type = 'normal') {
  statusEl.textContent = msg;
  statusEl.style.color = type === 'error' ? '#e74c3c' : (type === 'success' ? '#2ecc71' : '#6c5ce7');
  setTimeout(() => { statusEl.textContent = ''; }, 3000);
}

async function load() {
  try {
    const data = await chrome.storage.local.get(SENSITIVE_KEYS);
    for (const key of SENSITIVE_KEYS) {
      const raw = data[key] ?? '';
      inputs[key].value = decrypt(raw);
    }
    console.log('[PixelBot] Settings loaded successfully');
  } catch (error) {
    console.error('[PixelBot] Failed to load settings:', error);
    setStatus('Failed to load settings', 'error');
  }
}

async function save(key, value) {
  try {
    await chrome.storage.local.set({ [key]: encrypt(value) });
    setStatus('Saved', 'success');
  } catch (error) {
    console.error('[PixelBot] Failed to save settings:', error);
    setStatus('Failed to save', 'error');
  }
}

for (const key of SENSITIVE_KEYS) {
  inputs[key].addEventListener('input', () => {
    save(key, inputs[key].value);
  });
}

load();

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg.type === 'captcha' || msg.type === 'captcha_solving') {
    setStatus('🚨 Captcha!', 'error');
  }
  sendResponse({ received: true });
  return true;
});
