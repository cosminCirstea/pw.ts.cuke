import { Then } from '@cucumber/cucumber';
import {
  assertUrl,
  isElementVisibleByPlaceholder,
  isElementVisibleByText,
  isHeadingVisible,
} from '../helpers/assertions';

Then('I check that I am on the url {string}', async (url: string) => {
  assertUrl(url);
});

Then(
  'I check that the element with the text {string} is visible',
  async (elementName: string) => {
    await isElementVisibleByText(elementName);
  }
);

Then(
  'I check that the element with the placeholder {string} is visible',
  async (placeholder: string) => {
    await isElementVisibleByPlaceholder(placeholder);
  }
);

Then(
  'I check that the heading with name {string} is visible',
  async (headingName: string) => {
    await isHeadingVisible(headingName);
  }
);
