import { expect } from '@playwright/test';
import { page } from '../steps/world';

const HEADING = 'heading';

export function assertUrl(url: string) {
  expect(page.url()).toEqual(url);
}

export async function isElementVisibleByText(elementName: string) {
  await expect(page.getByText(elementName)).toBeVisible();
}

export async function isElementVisibleByPlaceholder(placeholder: string) {
  await expect(page.getByPlaceholder(placeholder)).toBeVisible();
}

export async function isHeadingVisible(elementName: string) {
  await expect(page.getByRole(HEADING, { name: elementName })).toBeVisible();
}
