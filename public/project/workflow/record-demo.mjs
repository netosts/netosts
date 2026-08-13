const { chromium } = await import(process.env.PLAYWRIGHT_CORE_PATH ?? 'playwright-core');

const baseUrl = process.env.DEMO_BASE_URL ?? 'http://127.0.0.1:9010';
const mode = process.argv.includes('--record') ? 'record' : 'validate';
const requestedLanguage = process.argv.find((argument) => argument.startsWith('--lang='))?.split('=')[1];
const language = ['pt', 'en', 'fr'].includes(requestedLanguage) ? requestedLanguage : 'pt';
const videoDir = `/tmp/workflow-concept-recording-${language}`;

const browser = await chromium.launch({
  executablePath: '/usr/bin/google-chrome',
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars'],
});

const context = await browser.newContext({
  viewport: { width: 1280, height: 720 },
  colorScheme: 'dark',
  deviceScaleFactor: 1,
  ...(mode === 'record'
    ? { recordVideo: { dir: videoDir, size: { width: 1280, height: 720 } } }
    : {}),
});

const videoStartedAt = Date.now();
const page = await context.newPage();
const errors = [];
page.on('pageerror', (error) => errors.push(error.message));

await page.goto(`${baseUrl}/index.html?lang=${language}`, { waitUntil: 'networkidle' });
await page.locator('#run-flow').waitFor();

const startedAt = Date.now();
await page.waitForTimeout(350);
await page.mouse.move(1120, 80, { steps: 18 });
await page.waitForTimeout(180);
await page.locator('#run-flow').click();
await page.locator('body[data-state="complete"]').waitFor({ timeout: 6000 });
await page.waitForTimeout(1050);

if (errors.length) throw new Error(`Erros no navegador: ${errors.join(' | ')}`);

if (mode === 'validate') {
  const result = await page.evaluate(() => ({
    title: document.title,
    state: document.body.dataset.state,
    completedNodes: document.querySelectorAll('.node.is-done').length,
  }));
  await page.screenshot({ path: `/tmp/workflow-concept-validation-${language}.png` });
  console.log(JSON.stringify({ mode, language, ...result }));
} else {
  console.log(JSON.stringify({
    mode,
    language,
    trimStartSeconds: (startedAt - videoStartedAt) / 1000,
    elapsedSeconds: (Date.now() - startedAt) / 1000,
    errors,
  }));
}

const video = page.video();
await context.close();
if (video) console.log(JSON.stringify({ rawVideo: await video.path() }));
await browser.close();
