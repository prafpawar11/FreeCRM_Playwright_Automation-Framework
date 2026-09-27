import {chromium, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { env } from '../env/env.config.js';
import { en } from '@faker-js/faker';

export default async function login()
{
    const browser = await chromium.launch({headless : false});

    const page = await browser.newPage();

    await page.goto(env.BASE_URL);

    const loginPage = new LoginPage(page);

    await loginPage.enterUsername(env.USERNAME);

    await loginPage.enterPassword(env.PASSWORD);

    await loginPage.clickOnLoginButton();

    await expect(page).toHaveTitle("FreeCRM");

    await expect(page.locator("//strong[text()='Soft Tech enterprises']")).toBeVisible();

    await page.context().storageState({path : './storage/auth.json'});

    await browser.close();

}