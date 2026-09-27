import { BasePage } from "./BasePage.js";
import { logger } from '../utils/Logger.js';
import { Dropdown } from "../utils/Dropdown.js";

export class ContactPage extends BasePage
{

    constructor(page)
    {
        super(page);

        this.contactLink = page.locator("//span[text()='Contacts']");
        this.createButton = page.getByRole('button', {name : 'Create'});
        this.firstName = page.locator("#first-name");
        this.lastName = page.locator("#last-name");

        this.category = page.locator("#category");
        this.status = page.locator("#status");

        this.saveButton = page.getByRole('button', {name : 'Save'});
    }

    async clickOnContactLink()
    {
        logger.info(`Clicking on contact links`);
        await super.click(this.contactLink);
    }

    async clickOnCreateButton()
    {
        logger.info(`Clicking on Create Button`);
        await super.click(this.createButton);
    }

    async enterFirstName(firstName)
    {
        logger.info(`Entering ${firstName} value in first Name text box`);
        await super.fill(this.firstName, firstName);
    }

    async enterLastName(lastName)
    {
        await logger.info(`Entering ${lastName} value in Last Name Text box`);
        await super.fill(this.lastName, lastName);
    }

    async selectCategoryValue(categoryName)
    {
        logger.info(`Selecting ${categoryName} dropdown value`);
        await Dropdown.selectByVisibleText(this.category, categoryName);
        // await Dropdown.selectByValue(this.category, categoryName);
    }

    async selectStatus(statusname)
    {
        logger.info(`Selecting ${statusname} dropdown value `);
       await Dropdown.selectByVisibleText(this.status, statusname);
    //    await Dropdown.selectByIndex(this.status, statusname);
    }


    async clickOnSaveButton()
    {
        await logger.info(`Clicking on Save button`);
        await super.click(this.saveButton);
    }
}