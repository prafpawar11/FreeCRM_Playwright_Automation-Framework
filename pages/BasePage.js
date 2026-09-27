import { logger } from '../utils/Logger.js'

export class BasePage
{

    constructor(page)
    {
        this.page = page;
    }

    async click(locator)
    {
        logger.info(`Clicking on ${locator}`);
        await locator.click();
    }

    async fill(locator, value)
    {
        logger.info(`Entering ${value} text in ${locator}`);
        await locator.fill(value);
    }

    //getText()
    async textContent(locator)
    {
        return await locator.textContent();
    }
    //getText()
    async innerText(locator)
    {
        return await locator.innerText();
    }

    async getAttribute(locator, keyName)
    {
        return await locator.getAttribute(keyName);
    }

    async clear(locator)
    {
        await locator.clear();
    }

    



}