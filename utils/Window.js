export class Window
{

    static async handleWindow(page, locatorValue)
    {
        await locatorValue.click();

        const [page] = await page.context().waitForEvent('page');

        await page.waitForLoadState('load'); // load, networkidle, htmldomcontent

        return page;
    }


    //Switch to Window using Window Title
    static async handleWindowUsingTitle(page, expectedTitle)
    {
        const allPages = await page.pages();

        for(const expectedPage of allPages)
        {
            await expectedPage.bringToFront();

            const actualTitle = await expectedPage.title();

            if(actualTitle == expectedTitle)
            {
                break;
            }
        }
    }

   






}