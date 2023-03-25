import {
  AfterAll,
  After,
  BeforeAll,
  Status,
  setDefaultTimeout,
} from '@cucumber/cucumber';
import { config } from './config';
import {
  chromium,
  firefox,
  webkit,
  Browser,
  BrowserContext,
  Page,
} from '@playwright/test';

let page: Page;
let browser: Browser;
let context: BrowserContext;

setDefaultTimeout(30000);

BeforeAll(async () => {
  switch (config.browser) {
    case 'firefox':
      browser = await firefox.launch(config.browserOptions);
      break;
    case 'headlessFirefox':
      browser = await firefox.launch({ headless: true });
      break;
    case 'webkit':
      browser = await webkit.launch(config.browserOptions);
      break;
    case 'headlessWebkit':
      browser = await webkit.launch({ headless: true });
      break;
    case 'headlessChromium':
      browser = await chromium.launch({ headless: true });
      break;
    default:
      browser = await chromium.launch(config.browserOptions);
  }
  context = await browser.newContext();
  page = await context.newPage();
  return page;
});

After(async function (Scenario) {
  if (Scenario.result?.status === Status.FAILED) {
    this.attach(
      await page.screenshot({
        path: `./screenshots/$(Scenario.pickle.name).png`,
        fullPage: true,
      }),
      'image/png'
    );
  }
});

AfterAll(async () => {
  await context?.close();
  await browser.close();
});

export { page, browser };
