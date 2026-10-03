import {test, expect } from '../fixtures/GlobalFixture.js';


test("Create new Deals", async ({page, dealsPage}) =>{

     await page.goto("/");

    await dealsPage.clickOnDealsLink();

    await expect(page.url()).toContain("deals");

    await dealsPage.clickOnCreateButton();

    await dealsPage.enterTitle("Mobile Deals");

    await dealsPage.clickOnSaveButton();

    console.log("New code is added");

});
