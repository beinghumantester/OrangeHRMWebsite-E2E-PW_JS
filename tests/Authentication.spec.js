const { test,expect } = require("@playwright/test");


test("Browser Context Declaration", async ({ browser }) => {
  const context = await browser.newContext(); // it creates a new context
  const page = await context.newPage(); // and new page inside that context
  await page.goto("https://orangehrmlive.com/"); // and hit the url inside that page
  console.log(await page.title());
});

test("Login with invalid credentials. ", async ({page,}) =>
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

test.only("Login with valid credentials", async ({ page,context }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  console.log(await page.title());

  await expect(page).toHaveTitle("OrangeHRM");

  await page.locator('[name="username"]').fill("Admin");
  await page.locator('[name="password"]').fill("admin123");
  await page.locator('button[type="submit"]').click();

  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

  // Wait until all menu items render
  await page.waitForSelector('ul.oxd-main-menu li span.oxd-main-menu-item--name');

  // Grab all visible menu names
  const menuItems = await page
    .locator('ul.oxd-main-menu li span.oxd-main-menu-item--name')
    .allInnerTexts();

  for (const [index, item] of menuItems.entries()) {
    console.log(`${index + 1}. ${item.trim()}`);
  }


const [newPage] = await Promise.all([
  context.waitForEvent('page'),
  page.click("a[href='http://www.orangehrm.com']"),
]);

await newPage.waitForLoadState('domcontentloaded'); // or 'load'
const text = await newPage.locator(
  "body > div.main > div.inner.typography.line > section > div.home-slider-section > div > div:nth-child(1) > div > div > div.page-title > h1"
).textContent();

console.log(text);

const arrayTest = text.split("HR");
const text1 = arrayTest[1];
const text2=text1.split(" One")[0];
console.log(text1);
console.log(text2);
await newPage.close();

page.locator("input[placeholder='Search']").fill(text2);


  // Optional: pause to visually verify
   await page.pause();
});
