// content.js
// Injected into canvas pages by the extension.
// Loads the bot bundle via script tag and bridges captcha events to the background.

window.addEventListener('message', (event) => {
  if (event.origin !== window.location.origin) return;
  if (!event.data || !event.data.__darkbot_bridge) return;

  const msg = event.data.data || {};

  if (msg.type === 'captcha' || msg.type === 'captcha_solving' || msg.type === 'idle_captcha') {
    chrome.runtime.sendMessage({
      type: msg.type,
      siteName: msg.siteName || document.domain,
      text: msg.text,
      description: msg.description,
    }).catch((error) => {
      console.error('[PixelBot] Failed to send message to background:', error);
    });
  }
});

function injectBotBundle() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('bot-bundle.js');
    script.onload = () => {
      console.log('[PixelBot] Bot bundle loaded successfully');
      resolve();
    };
    script.onerror = (e) => {
      const evt = e instanceof ErrorEvent ? e : null;
      console.error('[PixelBot] failed to load bundle');
      console.error('[PixelBot] src:', script.src);
      console.error('[PixelBot] error:', evt?.message || evt?.name || String(e));
      console.error('[PixelBot] readyState:', document.readyState);
      reject(new Error('Failed to load bot-bundle.js'));
    };
    (document.head || document.documentElement).appendChild(script);
  });
}

async function main() {
  try {
    console.log('[PixelBot] Content script initialized');
    await injectBotBundle();
  } catch (e) {
    console.error('[PixelBot] main error:', e);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', main);
} else {
  main();
}