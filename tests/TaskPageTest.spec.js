import {test, expect} from '../fixtures/GlobalFixture.js';
import { JsonReader } from '../reader/JsonReader.js';

test("@Regression @Task Create new Task ", async ({page, taskPage })=>{

    await page.goto("/");

    await taskPage.clickOnTaskLink();

    await taskPage.clickOnCreateButton();

    const jsonTestData = await JsonReader.readJsonValue("TaskPageTestData");
    
    await taskPage.enterTitle(jsonTestData.title);

    await taskPage.enterDescription(jsonTestData.description);

    await taskPage.enterCompletion(jsonTestData.completion);

    await taskPage.clickOnSaveButton();


});

test("@Regression @Task Delete created Task", async ({page, taskPage }) =>{

    await page.goto("/");

    await taskPage.clickOnTaskLink();

    await taskPage.clickOnCreateButton();

    const jsonTestData = await JsonReader.readJsonValue("TaskPageTestData");
    
    await taskPage.enterTitle(jsonTestData.title);

    await taskPage.enterDescription(jsonTestData.description);

    await taskPage.enterCompletion(jsonTestData.completion);

    await taskPage.clickOnSaveButton();
    
    await taskPage.clickOnDeletButton();
    


});

