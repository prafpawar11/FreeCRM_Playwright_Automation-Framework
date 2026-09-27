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
    - generic [ref=e108]:
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
      - iframe [ref=e130]:
        - generic [ref=f7e2]:
          - link [ref=f7e4] [cursor=pointer]:
            - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjsuEIaDZN4Rf1TT9rtSVr_46T8-l7pUETOTNZStMtM53KtsKi9_3Ci1a9S1uM_ecyrPsSBQQYrRz-3nPCJ4K_HEEN3Ynm7Laran_RuPFflNmfv2NooL4dFt2LtskOIAgGK7zWS719o5WiXUU34ToVgL9N9F6kdTwWheul-Tjj0q3HzRh_O2IDP7CYESHmWXRJJ2RdlLWoATgXVSNXlom9-LoAUQPbQ87-wtHQehbn7fRYOl5h5rSy5ZP6aEyilGYOVKhE54RAfHJWZqOxIDaiQCATESoXSw8noIKaj6FK9R17KS3C0HGa7whoTnzq20Tj_uFRtjqEBnm8kY2oW2SuVDyKK2s86wqhlh0mhHL__H4O26FSbfrwHRw84VRzlBDoKsMqhJLH6L4pCxQld-W8v6gsnufrBeJ_1Aa9k8wWqqqkJLm-pHO1iMJxrDKdkeMrJfYga9RnDltqtNethy_8-p-k7-aJMfgZsqgEjEght-QYk0gTDY5FjAxo_Co6zmi_fI7q0aLnDSEdXMFjRHlnSKnEYYFsxRAWcbQztyGVRW7mRlw4lr1VlgDWLgLCJLJpCdI2ZymSYK28Fx0eP91gVAepybWR0U8gO9XiUIxQod1-iE6-awr3F_hQpCyVRrFV-AVoOrlCXcubnRSEaYFnIjV2lzYIUbiJBEXSFxptpTtAunhE3Hrk0_BASN-_sK6U_A3TRpkLahMTCu_7JtJGau5VV0bEMgUSlUCSY3D3fduIhdUjFwUXDtimK0xiOEfK4qKUCDK8HkDmBo8eSFmy4nGydp2aq3Nm4y34be-M6DNbcoDsct6-38tzcH30ppliIfjFitZrelZnjrFLR-sK8s8R9XTv5f42PbOMszh0yFwux7UGgZzChyZAc7TkEBkY5BxW9524WVqn1uTvzP4-2_EdnDI8yt1CykbipUMwilimc78k6hubvh8DewoAYdyvAhx7wkiRYZ3MgomnkXW6HcEuL_e5aWjj8c4ywS0TB61tGfJ63w0mlCoTqrbl4ruwvm0Dxs3nFH4ONQtIN9-6wxXwi2ewcz2Efgbhmsv7U8P-GUL2bjzoCZMDq1-EnhIl2dnBAUESIOK90975d3Q9W9X6w97rGttEoCXrhwqi7y_3acAed1muh64OgCoGoXAmNgvzs9H0q4uzYzdrOxV9SE6niAP4fUiscquS9IFu2tLOypjZlqeMPXsyhTFLD2rF28izMcxg1ycAHJmsKnPNGMTXwZXys9hCcBkR9TPs6b8GrWGupRdJwDxJ2IxanTR4ZDAs3wyfHS1PcSPZHarinVzbpESoRDyYErzFRRChgeaE5EAtLN6VJPGvE3B5mS_NXDZ85stFJLDoq7qelCJT1VBXu5Gc9HMn4yEGjxxW8s2dO1LtWUad37CWAxGzzoFODKHM-3fAHGhlbQmCM1R9_IaH1RMEXKrEdRoxvGvRgOhg9rV1EVpve9y5dnRSZJWirTLHL7qGTkcX8WoSWQkJmHW6J0e0OVvSD3R-hAK2GNGCyNsrQB2s1GoLU9KfhkAjziRTwZ4ButdSzT9Tsp3wCDH-CKUAhWCVAyUcMtI1F8HUqAuz8s5mt0Wz-bVxC5ZIHelL-dPaiHtADpwogglwRXt9fnPPN9nO4rzCfb4mxzwe4vM8AzSYz3rpQtcjrKztSWTFRj_m_5LEwRfcjEr6Dm6j0_jb6UNPbpaMatL3SzD3yLBfjbwnI2ZTAEgyUFKrZsQpWjSxh2SE3YpXzdvjWXMWjRoFAW5OoYl_G7vOXWmDQKDVG3LW5R6dNxcc9CjKYS1jK7b7udevZQ-eydbZkaCHfrnukLg3q2jpby6efKQRSZ6jUs&sai=AMfl-YTPo1mvfB4aTVvoS52M1_pGRf68vtyey9s9qiZQCSjZf1P6v_Fa8pbJ0FjN26upPqmdrMrfdrzS1RlECEdUr-kKUiNUyuTFsQSm8lXzhHig9Uih77GJV7X1gcK2Ro8lYx80maQjNtNaUa0QPAJNbNOu2qrAc2jb7Zszg_n_KEsJDL1kmdM-4pFXGi1Hv9BWoOfd68q29VSwUCwQInYVG2BuwmnBVbU6VEEi6oyedxdx0S6v-T1QYRRax_vH0sNuUss7zQimeX8emFnsdG-5AMJ18rzhCcjJBw6mUoyP8yubNmY5PN9FFmRtyCO7LR9zQfeJSp5DlX9KKG0-hDKgszKtMBE4ck7scoXPqYodkw-TiE9ZkDFlh2PIr8BCh_gcOHWa2mGyncFArxcsJgEcMuL8FaHvoW97nulbTG2t2ib9yY4OmMlQyWcV8j50SpWtrsqrNYjqMGU4dERLUPYuo-9ouarEEoU7dJWYNiCR0FcEaIjICz3lBCg15IxPpBUj5H975-2dis6BNQ3cyU813wPyBp7NC4CGVvorI1tabXGGVdKs5g-gH-K165KZJ9DThXYQwI-TtHFpXD6k0aHrevMnfWAXUaTeSd3_BMq5NrpkTJA0PdIPL5BcYeDleieEZTcUtmM2Y65AbClLcsE8lRLkR3VzlzQvg3hVXYNDPdJkUpdrRBmCtluVdtuWntgdvT8VjoGxTHQZxyfQpITfVN9rfkGdiq9O-5b1ABYMc9wHVYTi_2R6XCoO7FbD2wsMd0bHi0YvFaCAte8UODTu4WA9vxFcaVm2MSVlG5pPemK5CrXKFFEmWyIhrtuPFPdFqnRgS5D7KNzdNNhf61qWm3rn9tylGCfyysuMZp4y-n1TfTKATiLcvEWRA5-rZ6SbWL9Qu98TyMhBgpYtd1qeFBJ0AfdRMgVdA1qxBTq3vnwAQqQ&sig=Cg0ArKJSzHBDvjPLEEN6&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9sZW5vdm8uY29t&urlfix=1&adurl=https://www.lenovo.com/in/en/d/deals/business%3Fcid%3Din:display:0xwomy%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D24159655819
            - img "Advertisement" [ref=f7e5]
          - generic [ref=f7e6]:
            - generic:
              - generic [ref=f7e7] [cursor=pointer]
              - button [ref=f7e12] [cursor=pointer]
  - contentinfo [ref=e136]:
    - generic [ref=e137]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
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