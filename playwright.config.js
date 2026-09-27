import { defineConfig } from "@playwright/test";

export default defineConfig({

    testDir : './tests',

    retries : 3,

    reporter : [['html'], ['allure-playwright']],

    fullyParallel : true,

    workers : 3,

    globalSetup : './storage/login.js',

    use :
    {
        headless : false,

       baseURL : 'https://ui.freecrm.com',
        
        screenshot : 'on',

        video : 'retain-on-failure',

        storageState : './storage/auth.json',

        launchOptions :
        {
            slowMo : 1000
        }
    },

    projects :
    [
        {
            name : 'chromium',
            use :
            {
                browserName : 'chromium'
            }
        },
        {
            name : 'firefox',
            use :
            {
                browserName : 'firefox'
            }
        },
        {
            name : 'webkit',
            use :
            {
                browserName : 'webkit'
            }
        }

    ]

})