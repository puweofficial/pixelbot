async function getFromStorage(key) {
  return new Promise((resolve) => {
    chrome.storage.local.get(key, (result) => {
      resolve(result[key]);
    });
  });
}

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

function decrypt(value) {
  if (!value) return value;
  try {
    const xored = base64Decode(value);
    return xorWithKey(xored, SECRET_KEY);
  } catch {
    return value;
  }
}

async function sendTelegramNotify(siteName, text) {
  const tokenRaw = await getFromStorage('telegram_bot_api');
  const chatIdRaw = await getFromStorage('telegram_chat_id');
  const token = decrypt(tokenRaw || '');
  const chatId = decrypt(chatIdRaw || '');

  if (!token || !chatId) {
    return;
  }

  const messageText = text || (siteName ? `Captcha required on ${siteName}` : 'Captcha required');
  
  // Add blue-purple themed formatting
  const formattedMessage = `
🎨 <b>PixelBot Notification</b>

${messageText}

<i>Powered by PixelBot v3.0.0</i>
  `.trim();

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: formattedMessage,
        parse_mode: 'HTML',
        disable_web_page_preview: true
      }),
    });
  } catch (e) {
    console.error('Telegram notification failed:', e);
  }
}

async function sendDiscordNotify(siteName, description) {
  const webhookUrlRaw = await getFromStorage('discord_webhook_url');
  const userIdRaw = await getFromStorage('discord_user_id');
  const webhookUrl = decrypt(webhookUrlRaw || '');
  const userId = decrypt(userIdRaw || '');

  if (!webhookUrl) {
    return;
  }

  const content = userId ? `<@${userId}>` : '';
  const desc = description || (siteName ? `Captcha required on ${siteName}` : 'Captcha required');

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'PixelBot',
        avatar_url: 'https://raw.githubusercontent.com/TouchedByDarkness/PixelPlanet-Bot/master/rounded-avatar-128.png',
        embeds: [
          {
            title: '🎨 PixelBot Notification',
            description: desc,
            color: 0x9b59b6,
            footer: {
              text: 'PixelBot v3.0.0',
            },
            timestamp: new Date().toISOString(),
          },
        ],
        content,
      }),
    });
  } catch (e) {
    console.error('Discord notification failed:', e);
  }
}

let lastSentTelegram = null;
let lastSentDiscord = null;

function notifyLock(last, key, ttl) {
  ttl = ttl || 10000;
  const now = Date.now();
  if (last && last.key === key && now - last.ts < ttl) {
    return false;
  }
  return true;
}

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg.type === 'captcha' || msg.type === 'captcha_solving' || msg.type === 'idle_captcha') {
    const siteName = msg.siteName || (typeof document !== 'undefined' ? document.domain : undefined);
    const text = msg.text;
    const description = msg.description;

    const tgText = text || (siteName ? `Captcha required on ${siteName}` : (msg.type === 'idle_captcha' ? 'Waiting for captcha solution' : 'Captcha required'));
    const dcDesc = description || (siteName ? `Captcha required on ${siteName}` : (msg.type === 'idle_captcha' ? 'Waiting for captcha solution' : 'Captcha required'));

    const tgKey = msg.type + '|' + siteName + '|' + tgText;
    if (notifyLock(lastSentTelegram, tgKey)) {
      lastSentTelegram = { key: tgKey, ts: Date.now() };
      sendTelegramNotify(siteName, tgText);
    }

    const dcKey = msg.type + '|' + siteName + '|' + dcDesc;
    if (notifyLock(lastSentDiscord, dcKey)) {
      lastSentDiscord = { key: dcKey, ts: Date.now() };
      sendDiscordNotify(siteName, dcDesc);
    }

    sendResponse({ received: true });
  }
  return true;
});
