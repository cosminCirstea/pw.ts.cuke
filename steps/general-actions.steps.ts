import { When } from '@cucumber/cucumber';
import { clickButton, clickLink, fillField } from '../helpers/general-actions';
import { page } from './world';

When('I click on the {string} button', async (buttonName: string) => {
  await clickButton(buttonName);
});

When(
  'I fill the field {string} with data {string}',
  async (fieldName: string, dataInput: string) => {
    await fillField(fieldName, dataInput);
  }
);

When('I navigate to the url {string}', async (url: string) => {
  await page.goto(url);
});

When('I click on the {string} link', async (linkName: string) => {
  await clickLink(linkName);
});
