import { Given, When } from '@cucumber/cucumber';
import { page } from './world';
import { expect } from '@playwright/test';
import { config } from './config';

When('I login', async () => {
  await page.getByPlaceholder('Enter your Username').fill(config.user);
  await page.getByPlaceholder('Enter your Password').fill(config.password);
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByText('The user is logged in')).toBeVisible();
});

When('I logout', async () => {
  await page.getByRole('button', { name: 'Logout' }).click();
  await expect(page.getByPlaceholder('Enter your Username')).toBeVisible();
});

Given('that I am on the base url', async () => {
  const expectedUrl = config.environment;
  await page.goto(expectedUrl);
  expect(page.url()).toEqual(expectedUrl);
});
