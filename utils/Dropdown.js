import {logger}  from './Logger.js';

export class Dropdown
{

    static async selectByVisibleText(locator, value)
    {
        logger.info(`Locating ${locator} and Selecting the ${value} dropdown values`);
        await locator.selectOption({label : `${value}`});
    }

    static async selectByValue(locator, expectedValue)
    {
        logger.info(`Locating ${locator} and Selecting the ${expectedValue} dropdown values`);
        await locator.selectOption({value : `${expectedValue}`});
    }

    static async selectByIndex(locator, indexPosition)
    {
         logger.info(`Locating ${locator} and Selecting the ${indexPosition} dropdown values`);
        await locator.selectOption({index : indexPosition});
    }

    static async selectValue(locator , expectedValue)
    {
        logger.info(`Selecting dropdown ${expectedValue} value`);
        await locator.filte({hasText : expectedValue}).click();
    }

}