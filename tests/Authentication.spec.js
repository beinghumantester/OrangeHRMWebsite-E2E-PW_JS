const { test,expect } = require("@playwright/test");



test("Browser Context Declaration", async ({ browser }) => {
  const context = await browser.newContext(); // it creates a new context
  const page = await context.newPage(); // and new page inside that context
  await page.goto("https://orangehrmlive.com/"); // and hit the url inside that page
  console.log(await page.title());
});

test.only("Login with invalid credentials. ", async ({page,}) =>
  {
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

  }
);

test.only("Login with valid credentials ", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); // and hit the url inside that page
  console.log(await page.title());

  await expect(page).toHaveTitle("OrangeHRM");

  await page.locator('[name="username"]').fill("Admin");
  await page.locator('[name="password"]').fill("admin123");
  await page.locator('button[type="submit"]').click();

  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
  await page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a').click();
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList");
  await page.pause();
});
