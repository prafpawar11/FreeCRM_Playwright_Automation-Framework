# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TestAlert.spec.js >> Test Alert code
- Location: tests\TestAlert.spec.js:4:5

# Error details

```
ReferenceError: cont is not defined
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]: Elements
      - generic [ref=e24]: Forms
      - generic [ref=e37]:
        - generic [ref=e38] [cursor=pointer]: Alerts, Frame & Windows
        - list [ref=e50]:
          - listitem [ref=e51] [cursor=pointer]:
            - link "Browser Windows" [ref=e52]:
              - /url: /browser-windows
          - listitem [ref=e55] [cursor=pointer]:
            - link "Alerts" [ref=e56]:
              - /url: /alerts
          - listitem [ref=e59] [cursor=pointer]:
            - link "Frames" [ref=e60]:
              - /url: /frames
          - listitem [ref=e63] [cursor=pointer]:
            - link "Nested Frames" [ref=e64]:
              - /url: /nestedframes
          - listitem [ref=e67] [cursor=pointer]:
            - link "Modal Dialogs" [ref=e68]:
              - /url: /modal-dialogs
      - generic [ref=e71]: Widgets
      - generic [ref=e84]: Interactions
      - generic [ref=e96]: Book Store Application
    - generic [ref=e109]:
      - heading "Alerts" [level=1] [ref=e110]
      - generic [ref=e111]:
        - generic [ref=e112]: Click Button to see alert
        - button "Click me" [ref=e114] [cursor=pointer]
      - generic [ref=e115]:
        - generic [ref=e116]: On button click, alert will appear after 5 seconds
        - button "Click me" [ref=e118] [cursor=pointer]
      - generic [ref=e119]:
        - generic [ref=e120]: On button click, confirm box will appear
        - button "Click me" [ref=e122] [cursor=pointer]
      - generic [ref=e123]:
        - generic [ref=e124]: On button click, prompt box will appear
        - button "Click me" [ref=e126] [cursor=pointer]
  - contentinfo [ref=e133]:
    - generic [ref=e134]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import {logger} from './Logger.js';
  2  | 
  3  | export class Alert
  4  | {
  5  | 
  6  |     static async accept(page)
  7  |     {
  8  |         await page.once('dialog', async dialog => {
  9  | 
  10 |             await page.waitForTimeout(3000);
  11 | 
  12 |             await dialog.accept();
  13 |         });
  14 |     }
  15 | 
  16 |     static async dismiss(page)
  17 |     {
  18 | 
  19 |         const [ dialog ] = page.waitForEvent('dialog');
  20 |         await dialog.dismiss();
  21 |     }
  22 | 
  23 |     static async enterValue(page,locator, value)
  24 |     {   
> 25 |         cont [dialog] = await Promise.all([
     |         ^ ReferenceError: cont is not defined
  26 |             page.waitForEvent('dialog'),
  27 |             locator.click()
  28 |         ]);
  29 | 
  30 |         await dialog.accept(value);
  31 |     }
  32 | 
  33 |     static async message(page)
  34 |     {
  35 |         await page.once('dialog', async dialog=>{
  36 |             const message = await dialog.message();
  37 |             console.log(message);
  38 |         });
  39 |     }
  40 | }
```