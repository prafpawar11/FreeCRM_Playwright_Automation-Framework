import { test , expect} from '../fixtures/GlobalFixture.js';
import { JsonReader } from '../reader/JsonReader.js';
import { ExcelReader } from '../reader/ExcelReader.js';
import { FakerUtils } from '../utils/FakerUtils.js';

//if you want to inject custom fixture in test level then compulsory we have import test function from Fixture locations
test("Verify Used is on Contact Page", async ({page, contactPage})=>{

    await page.goto("/");

    await contactPage.clickOnContactLink();

    await expect(page).toHaveURL("/contacts");

});


test("Create new Contact Test Cases", async ({ page, contactPage })=>{

    await page.goto("/");

    await contactPage.clickOnContactLink();

    await contactPage.clickOnCreateButton();

   // const testData = await JsonReader.readJsonValue("ContactPage");
    const testData = await ExcelReader.readFile("ExcelTestData", "ContactPage");

    const fname = testData[2].firstName;
    const lname = testData[2].lastName;
    const categoryName = testData[2].categoryName;
    const statusName = testData[2].statusName;


    await contactPage.enterFirstName(FakerUtils.generateFirstName());

    await contactPage.enterLastName(FakerUtils.generateLastName());

    await page.waitForTimeout(3000);

    await contactPage.selectCategoryValue(categoryName);

    await contactPage.selectStatus(statusName);

    await contactPage.clickOnSaveButton();

});

