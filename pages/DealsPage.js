import { BasePage } from "./BasePage.js";

export class DealsPage extends BasePage
{
    constructor(page)
    {
        super(page);
        
        this.dealsLink = page.locator("//ul[@class='_navList_3as89_80']/descendant::a[@href='/deals']");

        this.createButton = page.locator("//button[text()='Create']");

        this.title = page.locator("#title");
        
        this.saveButton = page.getByRole('button', {name : 'Save'});

    }

    async clickOnDealsLink()
    {
        await super.click(this.dealsLink);
    }

    async clickOnCreateButton()
    {
        await super.click(this.createButton);
    }

    async enterTitle(expectedTitle)
    {
        await super.fill(this.title, expectedTitle);
    }

    async clickOnSaveButton()
    {
        await super.click(this.saveButton);
    }
}