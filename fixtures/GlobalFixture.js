import {test, expect} from '@playwright/test';
import { ContactPage } from '../pages/ContactPage.js';
import { DealsPage } from '../pages/DealsPage.js';
import { TaskPage } from '../pages/TaskPage.js';

const customTest = test.extend({

    contactPage : async ({page}, use )=>{

        const obj = new ContactPage(page);

        await use(obj);
    },

    dealsPage : async ({page},use) =>{

        await use(new DealsPage(page));
    },
    
    taskPage : async ({ page }, use ) =>{
        await use (new TaskPage(page));
    }

});

module.exports = { test : customTest, expect};
