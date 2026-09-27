import {test} from '@playwright/test'
import { Calendar } from '../utils/Calendar.js';

// test("Test Alert code", async ( { page})=>{

//     await page.goto("https://www.redbus.in/");

//     await page.waitForTimeout(4000);
              
//     await page.locator("//div[@class='dateInputWrapper___dfa43b dateHighlight___b79802']").click();

//     await page.waitForTimeout(4000);
              
//     const monthYearLocator = await page.locator("//p[@class='monthYear___2b924f']");

//     const nextLocator = await page.locator("//i[@class='icon icon-arrow arrow___2dd861 right___841620 ']");

//     const allDates = await page.locator("//div[@class='date___b0d8ac available___7114e3  calendarDate']/child::span");

//     await Calendar.handleCalendar(page, monthYearLocator, nextLocator, "December 2026", allDates, "12");


//     await page.waitForTimeout(7000);




// });