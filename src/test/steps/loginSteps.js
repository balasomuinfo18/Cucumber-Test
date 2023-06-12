const { Given,When,Then } = require('@cucumber/cucumber');
const { test, expect } = require('@playwright/test');

 Given('User is on Login Page', async function () {
    await page.goto('https://www.testyou.in/Login.aspx');
    await expect(page).toHaveTitle(/Hi! Visitor You CanLoginOrCreate An Account/);
  });

 When('User Navigate to LogIn Page', async function () {
    await page.goto('https://www.testyou.in/Login.aspx');
    await expect(page).toHaveTitle(/Hi! Visitor You CanLoginOrCreate An Account/);
  });
  Then('User enters UserName and Password', async function () {
    await page.goto('https://www.testyou.in/Login.aspx');
    await expect(page).toHaveTitle(/Hi! Visitor You CanLoginOrCreate An Account/);
  });