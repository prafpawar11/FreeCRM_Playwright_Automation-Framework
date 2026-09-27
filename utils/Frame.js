
export class Frame 
{
    static async locateFrameUsingId(page, frameId)
    {
        return await page.frameLocator(`#${frameId}`);
    }

    static async locateFrameUsingXpathOrCssSelector(page, xpathOrCssSelector)
    {
        return await page.frameLocator(xpathOrCssSelector);
    }

    static async locateFrameUsingName(page, framName)
    {
        return await page.frame({name : framName});
    }

    static async locateFrameUsingFrameUrl(page, frameUrl)
    {
        return await page.frame({url : frameUrl});
    }

    static async locateAllFrames()
    {
        return await page.frames();
    }


}