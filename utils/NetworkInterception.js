
export class NetworkInterception
{
    //Mock Request Payload
    static async continueRequestWithServer(page, urlPattern)
    {
        await page.route(urlPattern, async route =>{
            await route.continue();
        });
    }

    static async continueRequestWithServerByModifyingRequestPayload(page, urlPattern, modifiedPayload = {})
    {
        await page.route(urlPattern, async route =>{

            const request = route.request();
            const requestPayload = request.postData();
            const jsonRequestBody = await JSON.parse(requestPayload);

            console.log(`Existing Json Payload ${jsonRequestBody}`);
            console.log(`Modified Json Payload ${modifiedPayload}`);

            await page.continue({ postData : JSON.stringify(modifiedPayload) });            

        });


    }

    static async abortRequest(page, urlPattern)
    {
        await page.route(urlPattern, async route =>{
            await route.abort();
        });

    }

        //Send Same Response to the browser
    static async continueRequestWithClient(page, urlPattern)
    {   
        await page.route(urlPattern, async route =>{

            const response = await route.fetch();

            const responsePayload = await response.json();

            await route.fulfill({response, body : JSON.stringify(responsePayload)});

        });



    }

    //Mock Response Payload
    static async continueRequestWithClientByModifyingResponsePayload(page, urlPattern, modifiedResponsePayload = {} )
    {
        await page.route(urlPattern, async route =>{

            const response = await route.fetch();
            const responseBody = await response.json();
            const responseJsonBody = JSON.parse(responseBody);
            console.log(`Actual Server Response JSON Body ${responseJsonBody}`);
            console.log(`Modified Response JSON Body ${modifiedResponsePayload}`);
            
            await route.fulfill({response, body : JSON.stringify(modifiedResponsePayload)});
        });



    }



}