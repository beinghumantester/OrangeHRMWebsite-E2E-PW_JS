
const playwright = require("playwright");
const { POManager } = require("../../pageobjects/POManager");
const { Given, When, Then } = require("@cucumber/cucumber");
const { Before, After,BeforeStep,AfterStep,Status } = require('@cucumber/cucumber');
const { chromium } = require("playwright");


Before(async function()
{



 this.browser = await chromium.launch({headless: false});
const context = await this.browser.newContext();
this.page = await context.newPage();
this.poManager = new POManager(this.page);


}
)
After(async function({browser})
{
    await this.browser.close();

    console.log("Testing completed successfully.")
}
)