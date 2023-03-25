import { page } from "../steps/world";

const BUTTON = 'button';
const LINK = 'link';

export async function clickButton(buttonName:string) {
    await page.getByRole(BUTTON, { name: buttonName }).click();
}

export async function clickLink(linkName:string) {
    await page.getByRole(LINK, { name: linkName }).click();
}

export async function fillField(fieldName:string, dataInput:string) {
    await page.getByPlaceholder(fieldName).fill(dataInput);
}