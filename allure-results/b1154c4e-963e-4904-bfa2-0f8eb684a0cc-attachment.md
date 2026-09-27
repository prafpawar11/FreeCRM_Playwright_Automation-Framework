# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ContactPageTest.spec.js >> Create new Contact Test Cases
- Location: tests\ContactPageTest.spec.js:18:5

# Error details

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { test , expect} from '../fixtures/GlobalFixture.js';
  2  | import { JsonReader } from '../reader/JsonReader.js';
  3  | import { ExcelReader } from '../reader/ExcelReader.js';
  4  | import { FakerUtils } from '../utils/FakerUtils.js';
  5  | 
  6  | //if you want to inject custom fixture in test level then compulsory we have import test function from Fixture locations
  7  | test("Verify Used is on Contact Page", async ({page, contactPage})=>{
  8  | 
  9  |     await page.goto("/");
  10 | 
  11 |     await contactPage.clickOnContactLink();
  12 | 
  13 |     await expect(page).toHaveURL("/contacts");
  14 | 
  15 | });
  16 | 
  17 | 
  18 | test("Create new Contact Test Cases", async ({ page, contactPage })=>{
  19 | 
  20 |     await page.goto("/");
  21 | 
  22 |     await contactPage.clickOnContactLink();
  23 | 
  24 |     await contactPage.clickOnCreateButton();
  25 | 
  26 |    // const testData = await JsonReader.readJsonValue("ContactPage");
  27 |     const testData = await ExcelReader.readFile("ExcelTestData", "ContactPage");
  28 | 
  29 |     const fname = testData[2].firstName;
  30 |     const lname = testData[2].lastName;
  31 |     const categoryName = testData[2].categoryName;
  32 |     const statusName = testData[2].statusName;
  33 | 
  34 | 
  35 |     await contactPage.enterFirstName(FakerUtils.generateFirstName());
  36 | 
  37 |     await contactPage.enterLastName(FakerUtils.generateLastName());
  38 | 
> 39 |     await page.waitForTimeout(3000);
     |                ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  40 | 
  41 |     await contactPage.selectCategoryValue(categoryName);
  42 | 
  43 |     await contactPage.selectStatus(statusName);
  44 | 
  45 |     await contactPage.clickOnSaveButton();
  46 | 
  47 | });
  48 | 
  49 | 
```