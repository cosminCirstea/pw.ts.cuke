import { LaunchOptions } from '@playwright/test';
const browserOptions: LaunchOptions = {
  slowMo: 0,
  args: [
    '--use-fake-ui-for-media-stream',
    '--use-fake-device-for-media-stream',
  ],
  firefoxUserPrefs: {
    'media.navigator.streams.fake': true,
    'media.navigator.permission.disabled': true,
  },
  headless: false,
};

export const config = {
  browser: process.env.BROWSER || 'chromium',
  browserOptions,
  environment: process.env.ENV || 'https://automationspeaks.com/',
  user: process.env.USER || 'defaultUser',
  password: process.env.PASSWORD || 'defaultUserPassword',
};
