const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");
//const { Greeter } = require('../../src')
const { test, expect } = require("@playwright/test"); // importing playwright keyword also, using this we can generate browser object
const { POManager } = require("../../pageobjects/POManager");
const { chromium } = require("playwright");

Given("the login page is opened on the browser", async function () {
  // Write code here that turns the phrase above into concrete actions

   this.loginpage = this.poManager.getloginpage();
  await this.loginpage.goto();
});

When(
  "user submit valid {string} and {string}",
  async function (username, password) {
    // Write code here that turns the phrase above into concrete actions

    await this.loginpage.login(username, password);
  }
);

Then("they should be redirected to dashboard", async function () {
  // Write code here that turns the phrase above into concrete actions
  await this.loginpage.menuitem();
});

When("user submit invalid {string} and {string}"
    ,async function (username, password) {
    // Write code here that turns the phrase above into concrete actions

    await this.loginpage.login_invalid_credentials(username, password);
  }
);


Then("they should see error message", async function () {
  // Write code here that turns the phrase above into concrete actions
  await this.loginpage.invalid_credential_error_message();
});