export class Calendar 
{

    static async handleCalendar(page, monthYearLocator, nextLocator, expectedMonthYear, datesLocator, expectedDate)
    {

        while(true)
        { 
              const actualMonthYear = await monthYearLocator.innerText();
              
              await page.waitForTimeout(400);

               if(actualMonthYear == expectedMonthYear)
               {
                   break;
               }
               else
               {
                  await nextLocator.click();
               }
        }

        const allDates = await datesLocator.all();

        for(const date of allDates)
        {
            const actualDate = await date.innerText();

             if(actualDate == expectedDate)
             {
                date.click();
                
                break;
             }
        }


    }


}