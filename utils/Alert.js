import {logger} from './Logger.js';

export class Alert
{

    static async accept(page)
    {
        await page.once('dialog', async dialog => {

            await page.waitForTimeout(3000);

            await dialog.accept();
        });
    }

    static async dismiss(page)
    {

        const [ dialog ] = page.waitForEvent('dialog');
        await dialog.dismiss();
    }

    static async enterValue(page, value)
    {   
        await page.once('dialog', async dialog =>{
            const message = await dialog.message();
            console.log(message);

            await page.waitForTimeout(3000);

            await dialog.accept(value);

        });
    
        
    }

    static async message(page)
    {
        await page.once('dialog', async dialog=>{
            const message = await dialog.message();
            console.log(message);
        });
    }
}