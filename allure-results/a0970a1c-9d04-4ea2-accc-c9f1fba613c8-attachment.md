# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DealsPageTest.spec.js >> Create new Deals
- Location: tests\DealsPageTest.spec.js:4:5

# Error details

```
TypeError: locator.fill is not a function
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation "Main navigation" [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - img "FreeCRM" [ref=e7]
        - generic [ref=e8]: FreeCRM
      - button "Collapse navigation" [ref=e9] [cursor=pointer]
    - list [ref=e13]:
      - listitem [ref=e14]:
        - link "Home" [ref=e15] [cursor=pointer]:
          - /url: /
      - listitem [ref=e21]:
        - link "Contacts" [ref=e22] [cursor=pointer]:
          - /url: /contacts
      - listitem [ref=e30]:
        - link "Companies" [ref=e31] [cursor=pointer]:
          - /url: /companies
      - listitem [ref=e38]:
        - link "Calendar" [ref=e39] [cursor=pointer]:
          - /url: /calendar
      - listitem [ref=e44]:
        - link "Deals" [ref=e45] [cursor=pointer]:
          - /url: /deals
      - listitem [ref=e51]:
        - link "Tasks" [ref=e52] [cursor=pointer]:
          - /url: /tasks
      - listitem [ref=e58]:
        - link "Cases" [ref=e59] [cursor=pointer]:
          - /url: /cases
      - listitem [ref=e65]:
        - link "Calls" [ref=e66] [cursor=pointer]:
          - /url: /calls
      - listitem [ref=e71]:
        - link "Email" [ref=e72] [cursor=pointer]:
          - /url: /email
      - listitem [ref=e78]:
        - link "Documents" [ref=e79] [cursor=pointer]:
          - /url: /documents
      - listitem [ref=e84]:
        - link "Campaigns" [ref=e85] [cursor=pointer]:
          - /url: /campaigns
      - listitem [ref=e91]:
        - link "Forms" [ref=e92] [cursor=pointer]:
          - /url: /forms
      - listitem [ref=e98]:
        - link "Reports" [ref=e99] [cursor=pointer]:
          - /url: /reports
      - listitem [ref=e103]:
        - link "Products" [ref=e104] [cursor=pointer]:
          - /url: /products
      - listitem [ref=e111]:
        - link "Invoices" [ref=e112] [cursor=pointer]:
          - /url: /invoices
    - link "Settings" [ref=e119] [cursor=pointer]:
      - /url: /settings
  - generic [ref=e125]:
    - banner [ref=e126]:
      - generic "Soft Tech enterprises" [ref=e127]:
        - strong [ref=e128]: Soft Tech enterprises
      - generic [ref=e129]:
        - 'button "Balance: $0.00" [ref=e130] [cursor=pointer]':
          - generic [ref=e131]: "Balance:"
          - generic [ref=e132]: $0.00
        - link "Free account" [ref=e133] [cursor=pointer]:
          - /url: /settings/billing/plan
        - search [ref=e137]:
          - searchbox "Search" [ref=e138]
        - button "Pinned Records" [ref=e140] [cursor=pointer]
        - button "Last accessed" [ref=e144] [cursor=pointer]
        - button "Rubbish Bin" [ref=e149] [cursor=pointer]
        - button "Contact support" [ref=e153] [cursor=pointer]
        - button "User menu" [ref=e157] [cursor=pointer]:
          - generic [ref=e158]: PP
    - generic [ref=e160]:
      - generic [ref=e161]:
        - heading "New Deal" [level=2] [ref=e162]
        - generic [ref=e163]:
          - button "Cancel" [ref=e164] [cursor=pointer]
          - button "Save" [ref=e165] [cursor=pointer]
      - generic [ref=e168]:
        - generic [ref=e170]:
          - generic [ref=e171]: Title*
          - textbox "Title" [ref=e173]
        - generic [ref=e175]:
          - generic [ref=e176]: Access
          - generic [ref=e177]:
            - button "Public" [ref=e178] [cursor=pointer]
            - button "Select users allowed access." [ref=e184] [cursor=pointer]
        - generic [ref=e189]:
          - generic [ref=e190]: Assigned To
          - button [ref=e192] [cursor=pointer]:
            - generic [ref=e194]:
              - text: Praful Pawar
              - button "Delete" [ref=e195]
        - generic [ref=e202]:
          - generic [ref=e203]: Company
          - button "Search" [ref=e205] [cursor=pointer]
        - generic [ref=e211]:
          - generic [ref=e212]: Products
          - generic [ref=e213]: Search
        - generic [ref=e216]:
          - generic [ref=e217]: Contacts
          - generic [ref=e218]: Search
        - generic [ref=e221]:
          - generic [ref=e222]: Close Date
          - textbox "Close Date" [ref=e224]
        - generic [ref=e226]:
          - generic [ref=e227]: Tags
          - textbox "Add tags…" [ref=e229]
        - generic [ref=e231]:
          - generic [ref=e232]: Description
          - textbox [ref=e233]
        - generic [ref=e236]:
          - generic [ref=e237]: Probability
          - generic [ref=e238]:
            - spinbutton "Probability" [ref=e239]
            - generic: "%"
        - generic [ref=e241]:
          - generic [ref=e242]: Amount
          - generic [ref=e243]:
            - generic: USD
            - spinbutton "Amount" [ref=e244]
        - generic [ref=e246]:
          - generic [ref=e247]: Commission
          - generic [ref=e248]:
            - generic: USD
            - spinbutton "Commission" [ref=e249]
        - generic [ref=e251]:
          - generic [ref=e252]: Stage
          - combobox "Stage" [ref=e254] [cursor=pointer]:
            - option "Select Stage" [selected]
            - option "Prospect"
            - option "Qualify"
            - option "Research"
            - option "Quote"
            - option "Negotiate"
            - option "Won"
            - option "Lost"
        - generic [ref=e256]:
          - generic [ref=e257]: Closed
          - checkbox [ref=e259]
        - generic [ref=e261]:
          - generic [ref=e262]: Status
          - combobox "Status" [ref=e264] [cursor=pointer]:
            - option "Select Status" [selected]
            - option "New"
            - option "Active"
            - option "Inactive"
            - option "On Hold"
            - option "Terminated"
            - option "Hot"
        - generic [ref=e266]:
          - generic [ref=e267]: Next Steps
          - textbox [ref=e268]
        - generic [ref=e270]:
          - generic [ref=e271]: Type
          - combobox "Type" [ref=e273] [cursor=pointer]:
            - option "Select Type" [selected]
            - option "New"
            - option "Old"
            - option "Opportunity"
            - option "Priority"
        - generic [ref=e275]:
          - generic [ref=e276]: Source
          - combobox "Source" [ref=e278] [cursor=pointer]:
            - option "Select Source" [selected]
            - option "Partner"
            - option "Word of Mouth"
            - option "Referral"
            - option "Existing Customer"
            - option "Online"
        - generic [ref=e280]:
          - generic [ref=e281]: Identifier
          - textbox "Identifier" [ref=e283]
```

# Test source

```ts
  1  | import { logger } from '../utils/Logger.js'
  2  | 
  3  | export class BasePage
  4  | {
  5  | 
  6  |     constructor(page)
  7  |     {
  8  |         this.page = page;
  9  |     }
  10 | 
  11 |     async click(locator)
  12 |     {
  13 |         logger.info(`Clicking on ${locator}`);
  14 |         await locator.click();
  15 |     }
  16 | 
  17 |     async fill(locator, value)
  18 |     {
  19 |         logger.info(`Entering ${value} text in ${locator}`);
> 20 |         await locator.fill(value);
     |                       ^ TypeError: locator.fill is not a function
  21 |     }
  22 | 
  23 |     //getText()
  24 |     async textContent(locator)
  25 |     {
  26 |         return await locator.textContent();
  27 |     }
  28 |     //getText()
  29 |     async innerText(locator)
  30 |     {
  31 |         return await locator.innerText();
  32 |     }
  33 | 
  34 |     async getAttribute(locator, keyName)
  35 |     {
  36 |         return await locator.getAttribute(keyName);
  37 |     }
  38 | 
  39 |     async clear(locator)
  40 |     {
  41 |         await locator.clear();
  42 |     }
  43 | 
  44 |     
  45 | 
  46 | 
  47 | 
  48 | }
```