# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CalendarTest.spec.js >> Test Alert code
- Location: tests\CalendarTest.spec.js:4:5

# Error details

```
Error: locator.innerText: Target page, context or browser has been closed
```

# Test source

```ts
  1  | export class Calendar 
  2  | {
  3  | 
  4  |     static async handleCalendar(page, monthYearLocator, nextLocator, expectedMonthYear, datesLocator, expectedDate)
  5  |     {
  6  | 
  7  |         while(true)
  8  |         { 
> 9  |               const actualMonthYear = await monthYearLocator.innerText();
     |                                                              ^ Error: locator.innerText: Target page, context or browser has been closed
  10 |               
  11 |               await page.waitForTimeout(4000);
  12 | 
  13 |                if(actualMonthYear == expectedDate)
  14 |                {
  15 |                    break;
  16 |                }
  17 |                else
  18 |                {
  19 |                   await nextLocator.click();
  20 |                }
  21 |         }
  22 | 
  23 |         for(const date of datesLocator)
  24 |         {
  25 |             const actualDate = await date.innerText();
  26 | 
  27 |              if(actualDate == expectedDate)
  28 |              {
  29 |                 date.click();
  30 |                 
  31 |                 break;
  32 |              }
  33 |         }
  34 | 
  35 | 
  36 |     }
  37 | 
  38 | 
  39 | }
```