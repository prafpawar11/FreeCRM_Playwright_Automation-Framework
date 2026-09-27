# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TaskPageTest.spec.js >> @Regression @Task Create new Task 
- Location: tests\TaskPageTest.spec.js:4:5

# Error details

```
Error: locator.fill: Error: Cannot type text into input[type=number]
Call log:
  - waiting for locator('#completion')
    - locator resolved to <input min="0" step="1" value="" max="100" type="number" id="completion" aria-invalid="false" class="_input_4gilv_19 _withTrailing_4gilv_63"/>
    - fill("80%")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

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
        - heading "New Task" [level=2] [ref=e162]
        - generic [ref=e163]:
          - button "Cancel" [ref=e164] [cursor=pointer]
          - button "Save" [ref=e165] [cursor=pointer]
      - generic [ref=e168]:
        - generic [ref=e170]:
          - generic [ref=e171]: Title*
          - textbox "Title" [ref=e173]: Automation Code
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
          - generic [ref=e203]: Type
          - combobox "Type" [ref=e205] [cursor=pointer]:
            - option "Select Type" [selected]
            - option "General Support"
            - option "Customer Support"
            - option "Technical Support"
            - option "Business Support"
            - option "Complaint"
            - option "Enquiry"
        - generic [ref=e207]:
          - generic [ref=e208]: Due Date
          - textbox "Due Date" [ref=e210]
        - generic [ref=e212]:
          - generic [ref=e213]: Contact
          - button "Search" [ref=e215] [cursor=pointer]
        - generic [ref=e221]:
          - generic [ref=e222]: Company
          - button "Search" [ref=e224] [cursor=pointer]
        - generic [ref=e230]:
          - generic [ref=e231]: Deal
          - button "Search" [ref=e233] [cursor=pointer]
        - generic [ref=e239]:
          - generic [ref=e240]: Case
          - button "Search" [ref=e242] [cursor=pointer]
        - generic [ref=e248]:
          - generic [ref=e249]: Close Date
          - textbox "Close Date" [ref=e251]
        - generic [ref=e253]:
          - generic [ref=e254]: Tags
          - textbox "Add tags…" [ref=e256]
        - generic [ref=e258]:
          - generic [ref=e259]: Description
          - textbox [active] [ref=e260]: Automation code using playwright
        - generic [ref=e263]:
          - generic [ref=e264]: Completion
          - generic [ref=e265]:
            - spinbutton "Completion" [ref=e266]
            - generic: "%"
        - generic [ref=e268]:
          - generic [ref=e269]: Priority
          - combobox "Priority" [ref=e271] [cursor=pointer]:
            - option "Select Priority" [selected]
            - option "Low"
            - option "Normal"
            - option "High"
        - generic [ref=e273]:
          - generic [ref=e274]: Status
          - combobox "Status" [ref=e276] [cursor=pointer]:
            - option "Select Status" [selected]
            - option "Enquiring"
            - option "Reviewing"
            - option "Awaiting input"
        - generic [ref=e278]:
          - generic [ref=e279]: Identifier
          - textbox "Identifier" [ref=e281]
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
     |                       ^ Error: locator.fill: Error: Cannot type text into input[type=number]
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