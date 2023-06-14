const { Given,When,Then } = require('@cucumber/cucumber');
const {page, browser, chromium,} = require('@playwright/test');


         Given('User is on Login Page', async function () {
           browser = await chromium.launch({headless: false});
           page = await browser.newPage();
           await page.goto("https://www.testyou.in/Login.aspx")
         });

         Given('User enters UserName', async function (username) {
          await page.locator("(//span[text()='Email Address / Login Id: ']/following::input)[1]").type(username)
        });
        
       
        Given('User enters Password', async function (password) {
            await page.locator("(//input[@type='password'])[2]").type(password)

         });

         When('user click on the login button', async function () {
            await page.locator("(//input[@value='Login'])[2]").click
         });


         Then('Message displayed Login Successfully', async function () {
          await page.goto("https://www.testyou.in/Login.aspx")});


         Given('User is on Login Page', async function () {
           browser = await chromium.launch({headless: false});
           page = await browser.newPage();
           await page.goto("https://www.testyou.in/Login.aspx")
         });

         Given('User enters invalid username', async function (invaliduser) {
          await page.locator("(//span[text()='Email Address / Login Id: ']/following::input)[1]").type(invaliduser)
        });
        
       
        Given('User enters Password', async function (password) {
            await page.locator("(//input[@type='password'])[2]").type(password)

         });

         When('user click on the login button', async function () {
            await page.locator("(//input[@value='Login'])[2]").click
         });


         Then('Message displayed Invalid UserName or Password', async function () {
          await page.goto("https://www.testyou.in/Login.aspx")});


          Given('User is on Login Page', async function () {
            browser = await chromium.launch({headless: false});
            page = await browser.newPage();
            await page.goto("https://www.testyou.in/Login.aspx")
          });
 
          Given('User enters UserName', async function (username) {
           await page.locator("(//span[text()='Email Address / Login Id: ']/following::input)[1]").type(username)
         });
         
        
         Given('User enters invalid password', async function (invalidpassword) {
             await page.locator("(//input[@type='password'])[2]").type(invalidpassword)
 
          });
 
          When('user click on the login button', async function () {
             await page.locator("(//input[@value='Login'])[2]").click
          });
 
 
          Then('Message displayed Invalid UserName or Password', async function () {
           await page.goto("https://www.testyou.in/Login.aspx")});

          Given('User enters invalid UserName', async function (invalidusername) {
           await page.locator("(//span[text()='Email Address / Login Id: ']/following::input)[1]").type(invalidusername)
         });
         
        
         Given('User enters invalid password', async function (invalidpassword) {
             await page.locator("(//input[@type='password'])[2]").type(invalidpassword)
 
          });
 
          When('user click on the login button', async function () {
             await page.locator("(//input[@value='Login'])[2]").click
          });
 
 
          Then('Message displayed Invalid UserName or Password', async function () {
           await page.goto("https://www.testyou.in/Login.aspx")});