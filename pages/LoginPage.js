import { BasePage } from "./BasePage.js";
import { logger } from '../utils/Logger.js';

export class LoginPage extends BasePage
{

    constructor(page)
    {
        super(page);

        this.username = page.locator("#email");
        this.password = page.locator("#password");
        this.loginButton = page.getByRole('button', {name : 'Login'});

    }

    async enterUsername(username)
    {
        logger.info(`Entering ${username} value in Username text box`)
        await super.fill(this.username, username);
    }

    async enterPassword(password)
    {
        logger.info(`Entering ${password} value in Password Text box`);
        await super.fill(this.password, password);
    }

    async clickOnLoginButton()
    {
        logger.info(`Clicking on Login button`);
        await super.click(this.loginButton);
    }

}