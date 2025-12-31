const { test,expect } = require("@playwright/test");
const{POManager} =require('../pageobjects/POManager');



test("Browser Context Declaration", async ({ browser }) => {
  const context = await browser.newContext(); // it creates a new context
  const page = await context.newPage(); // and new page inside that context
  await page.goto("https://orangehrmlive.com/"); // and hit the url inside that page
  console.log(await page.title());
});

test("Login with invalid credentials. ", async ({page,}) =>
  {

    /*
  let username = page.locator('[name="username"]');
  let password = page.locator('[name="password"]');
  let submit = page.locator('button[type="submit"]');

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); // and hit the url inside that page
  console.log(await page.title());
  await expect(page).toHaveTitle("OrangeHRM");

  await username.fill("Admin");
  await password.fill("admin");
  await submit.click();
  
  await expect(page.locator(".oxd-text.oxd-text--p.oxd-alert-content-text")).toHaveText("Invalid credentials"); 
  console.log("Login with valid username and invalid password scenario is passed.");

  await username.fill("");
  await password.fill("");

  await username.fill("min");
  await password.fill("admin123");
  await submit.click();

  await expect(page.locator(".oxd-text.oxd-text--p.oxd-alert-content-text")).toHaveText("Invalid credentials");
  console.log("Login with invalid username and valid password scenario is passed.");

  
  await username.fill("");
  await password.fill("");

  await username.fill("min");
  await password.fill("admin");
  await submit.click();

  await expect(page.locator(".oxd-text.oxd-text--p.oxd-alert-content-text")).toHaveText("Invalid credentials");
  console.log("Login with invalid username and invalid password scenario is passed.");
*/



const poManager = new POManager(page);
const loginpage = poManager.getloginpage();
await loginpage.goto();

await loginpage.login_invalid_credentials();
await loginpage.invalid_credential_error_message();

  }
);

test("Login with valid credentials", async ({ page }) => {

const poManager = new POManager(page);
const loginpage = poManager.getloginpage();
await loginpage.goto();
await loginpage.login(username,password);
  

  
 
// Optional: pause to visually verify
   await page.pause();
});
