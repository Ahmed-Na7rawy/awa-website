import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const CHROME = process.env.CHROME_PATH || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = 4177;
const CDP_PORT = 9235;
const USER_DATA = path.join(process.env.TEMP || '/tmp', 'awa-e2e-' + Date.now());
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

if (!fs.existsSync(path.join(process.cwd(), 'dist/index.html'))) {
  console.error('dist/ not found. Run "npm run build" before running test:e2e.');
  process.exit(1);
}

const preview = spawn(process.platform === 'win32' ? 'cmd.exe' : 'npx',
  process.platform === 'win32' ? ['/c', `npx vite preview --port ${PORT} --host 127.0.0.1`] : ['vite', 'preview', '--port', String(PORT), '--host', '127.0.0.1'],
  { stdio: 'ignore', cwd: process.cwd() }
);

const chrome = spawn(CHROME, [
  '--headless=new',
  '--disable-gpu',
  `--remote-debugging-port=${CDP_PORT}`,
  `--user-data-dir=${USER_DATA}`,
  '--no-first-run',
  '--no-default-browser-check',
  'about:blank',
], { stdio: 'ignore' });

let ws;
let msgId = 0;
const pending = new Map();
const send = (method, params = {}) => new Promise((resolve, reject) => {
  const id = ++msgId;
  pending.set(id, { resolve, reject });
  ws.send(JSON.stringify({ id, method, params }));
});

async function waitForUrl(url) {
  for (let i = 0; i < 40; i++) {
    try { if ((await fetch(url)).ok) return; } catch {}
    await sleep(250);
  }
  throw new Error('Timeout waiting for ' + url);
}

const passed = [];
const failed = [];
const consoleErrors = [];
const pageErrors = [];
const failedNetwork = [];

function check(name, cond, detail = '') {
  if (cond) passed.push(name);
  else failed.push({ name, detail });
}

try {
  await waitForUrl(`http://127.0.0.1:${PORT}/`);
  await waitForUrl(`http://127.0.0.1:${CDP_PORT}/json`);
  const pages = await (await fetch(`http://127.0.0.1:${CDP_PORT}/json`)).json();
  ws = new WebSocket(pages.find((p) => p.type === 'page').webSocketDebuggerUrl);
  await new Promise((res) => ws.addEventListener('open', res, { once: true }));

  let mockFormStatus = 200;
  ws.addEventListener('message', async (ev) => {
    const data = JSON.parse(ev.data);
    if (data.id && pending.has(data.id)) {
      const { resolve, reject } = pending.get(data.id);
      pending.delete(data.id);
      if (data.error) reject(new Error(data.error.message));
      else resolve(data.result);
    } else if (data.method === 'Runtime.consoleAPICalled' && data.params.type === 'error') {
      const txt = data.params.args.map((a) => a.value || a.description || '').join(' ');
      if (!/kaspersky/i.test(txt)) consoleErrors.push(txt);
    } else if (data.method === 'Runtime.exceptionThrown') {
      pageErrors.push(data.params.exceptionDetails?.text || 'Uncaught exception');
    } else if (data.method === 'Network.responseReceived') {
      const { url, status } = data.params.response;
      if (url.startsWith(`http://127.0.0.1:${PORT}`) && status >= 400) {
        failedNetwork.push({ url, status });
      }
    } else if (data.method === 'Fetch.requestPaused') {
      const isPreflight = data.params.request.method === 'OPTIONS';
      await send('Fetch.fulfillRequest', {
        requestId: data.params.requestId,
        responseCode: isPreflight ? 204 : mockFormStatus,
        responseHeaders: [
          { name: 'Content-Type', value: 'application/json' },
          { name: 'Access-Control-Allow-Origin', value: '*' },
          { name: 'Access-Control-Allow-Methods', value: 'POST, OPTIONS' },
          { name: 'Access-Control-Allow-Headers', value: 'Content-Type, Accept' },
        ],
        body: isPreflight ? '' : Buffer.from(JSON.stringify({ success: mockFormStatus === 200 ? 'true' : 'false' })).toString('base64'),
      });
    }
  });

  await send('Page.enable');
  await send('Runtime.enable');
  await send('Network.enable');
  await send('Fetch.enable', { patterns: [{ urlPattern: 'https://formsubmit.co/*', requestStage: 'Request' }] });

  // 1. Key routes: loading, broken images, basic a11y
  const keyRoutes = ['/', '/about', '/solutions', '/brands', '/brands/sweet-and-slim', '/brands/yalla-drinks', '/contact', '/careers', '/knowledge'];
  await send('Emulation.setDeviceMetricsOverride', { width: 1366, height: 768, deviceScaleFactor: 1, mobile: false });

  for (const route of keyRoutes) {
    await send('Page.navigate', { url: `http://127.0.0.1:${PORT}${route}` });
    const deadline = Date.now() + 6000;
    while (Date.now() < deadline) {
      const ready = await send('Runtime.evaluate', {
        returnByValue: true,
        expression: '!!(document.querySelector("main#main-content") && document.querySelector("h1"))',
      });
      if (ready.result?.value) break;
      await sleep(150);
    }
    await sleep(300);
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, document.body.scrollHeight / 2);' });
    await sleep(350);
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0);' });
    await sleep(250);

    const audit = await send('Runtime.evaluate', {
      returnByValue: true,
      expression: `(() => {
        const imgs = [...document.querySelectorAll('img')];
        const brokenImgs = imgs.filter(i => i.complete && i.naturalWidth === 0).map(i => i.getAttribute('src'));
        const missingAlt = imgs.filter(i => !i.hasAttribute('alt')).map(i => i.getAttribute('src'));
        const h1Count = document.querySelectorAll('h1').length;
        const hasMain = !!document.querySelector('main#main-content');
        const hasSkip = !!document.querySelector('a.skip-to-content');
        const lang = document.documentElement.getAttribute('lang');
        return { brokenImgs, missingAlt, h1Count, hasMain, hasSkip, lang };
      })()`,
    });
    const a = audit.result.value;
    check(`Route ${route}: no broken images`, a.brokenImgs.length === 0, JSON.stringify(a.brokenImgs));
    check(`Route ${route}: a11y landmarks & single H1 & alt`, a.missingAlt.length === 0 && a.h1Count === 1 && a.hasMain && a.hasSkip && !!a.lang, JSON.stringify(a));
  }

  // 2. Responsive overflow checks across viewports
  for (const vp of [
    { w: 320, h: 568, mobile: true },
    { w: 390, h: 844, mobile: true },
    { w: 768, h: 1024, mobile: true },
    { w: 1366, h: 768, mobile: false },
  ]) {
    await send('Emulation.setDeviceMetricsOverride', { width: vp.w, height: vp.h, deviceScaleFactor: 1, mobile: vp.mobile });
    for (const r of ['/', '/solutions', '/brands/sweet-and-slim']) {
      await send('Page.navigate', { url: `http://127.0.0.1:${PORT}${r}` });
      await sleep(750);
      const ov = await send('Runtime.evaluate', {
        returnByValue: true,
        expression: `document.documentElement.scrollWidth <= document.documentElement.clientWidth`,
      });
      check(`Responsive ${vp.w}x${vp.h} ${r}: zero horizontal overflow`, ov.result.value === true);
    }
  }

  // 3. Interactions, form validation, error/success states, 404, history
  await send('Emulation.setDeviceMetricsOverride', { width: 1366, height: 768, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/` });
  await sleep(900);

  // Search modal
  await send('Runtime.evaluate', { expression: `document.querySelector('.search-toggle-btn')?.click()` });
  await sleep(350);
  await send('Runtime.evaluate', {
    expression: `(() => { const inp = document.querySelector('input[aria-label="Search site"]'); if (!inp) return; Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(inp, 'dairy'); inp.dispatchEvent(new Event('input', { bubbles: true })); })()`,
  });
  await sleep(250);
  const searchCount = await send('Runtime.evaluate', { returnByValue: true, expression: `document.querySelectorAll('.search-item').length` });
  check('SearchModal filters results for "dairy"', searchCount.result.value > 0, `count=${searchCount.result.value}`);
  await send('Runtime.evaluate', { expression: `window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))` });
  await sleep(200);

  // QuoteModal validation + HTTP 500 + HTTP 200
  await send('Runtime.evaluate', {
    expression: `[...document.querySelectorAll('header button')].find(b => /conversation|quote/i.test(b.textContent || ''))?.click()`,
  });
  await sleep(350);
  const emptyInvalid = await send('Runtime.evaluate', {
    returnByValue: true,
    expression: `document.querySelector('[role="dialog"] form')?.checkValidity() === false`,
  });
  check('QuoteModal HTML5 required validation rejects empty form', emptyInvalid.result.value === true);

  mockFormStatus = 500;
  await send('Runtime.evaluate', {
    expression: `(() => { const dlg = document.querySelector('[role="dialog"]'); const setVal = (el, v) => { Object.getOwnPropertyDescriptor(el.constructor.prototype, 'value').set.call(el, v); el.dispatchEvent(new Event('input', { bubbles: true })); }; const ins = dlg.querySelectorAll('input'); if (ins[0]) setVal(ins[0], 'E2E User'); if (ins[1]) setVal(ins[1], 'E2E Corp'); if (ins[2]) setVal(ins[2], 'e2e@example.com'); dlg.querySelector('form')?.requestSubmit(); })()`,
  });
  await sleep(600);
  const errState = await send('Runtime.evaluate', {
    returnByValue: true,
    expression: `/unable to send|info@awa-group\.net/i.test(document.querySelector('[role="dialog"]')?.innerText || '')`,
  });
  check('QuoteModal shows error alert on HTTP 500', errState.result.value === true);

  mockFormStatus = 200;
  await send('Runtime.evaluate', { expression: `document.querySelector('[role="dialog"] form')?.requestSubmit()` });
  await sleep(600);
  const okState = await send('Runtime.evaluate', {
    returnByValue: true,
    expression: `/thank|forwarded|24 hours/i.test(document.querySelector('[role="dialog"]')?.innerText || '')`,
  });
  check('QuoteModal shows confirmation on HTTP 200', okState.result.value === true);

  // 404 check
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/unknown-e2e-route` });
  await sleep(700);
  const is404 = await send('Runtime.evaluate', {
    returnByValue: true,
    expression: `/404/.test(document.body.innerText) && !!document.querySelector('meta[name="robots"][content*="noindex"]')`,
  });
  check('404 route renders with noindex', is404.result.value === true);

  check('Zero console errors', consoleErrors.length === 0, JSON.stringify(consoleErrors));
  check('Zero uncaught page errors', pageErrors.length === 0, JSON.stringify(pageErrors));
  check('Zero failed same-origin HTTP requests', failedNetwork.length === 0, JSON.stringify(failedNetwork));

  console.log(`\nE2E RESULTS: ${passed.length} passed, ${failed.length} failed`);
  if (failed.length > 0) {
    console.error('FAILED CHECKS:', JSON.stringify(failed, null, 2));
    process.exitCode = 1;
  }
} finally {
  try { ws?.close(); } catch {}
  try { chrome.kill(); } catch {}
  try { preview.kill(); } catch {}
  try { fs.rmSync(USER_DATA, { recursive: true, force: true }); } catch {}
}
