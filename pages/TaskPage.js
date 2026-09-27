import { BasePage } from './BasePage.js';

export class TaskPage extends BasePage
{
    constructor(page)
    {
        super(page);

        this.taskLink = page.locator("//nav[@class='_nav_3as89_1']/descendant::a[@href='/tasks']");

        this.createButton = page.getByRole('button', {name : 'Create'});

        this.title = page.locator("#title");

        this.description = page.locator("._textarea_1hcox_39");

        this.completion = page.locator("#completion");

        this.saveButton = page.getByRole('button', {name : 'Save'});
    }

    async clickOnTaskLink()
    {
        await super.click(this.taskLink);
    }

    async clickOnCreateButton()
    {
        await super.click(this.createButton);
    }

    async enterTitle(expectedTitle)
    {
        await super.fill(this.title, expectedTitle);
    }   

    async enterDescription(expectedDescription)
    {
        await super.fill(this.description, expectedDescription);
    }

    async enterCompletion(expectedCompletion)
    {
        await super.fill(this.completion, expectedCompletion);
    }

    async clickOnSaveButton()
    {
        await super.click(this.saveButton);
    }


}