const { test,expect } = require("@playwright/test");
const { use } = require("react");


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

let first_name="Try";
let last_name="Def";
let middle_name="Abc";

await page.locator("input[placeholder='Search']").fill("PIM");
console.log(await page.locator("input[placeholder='Search']").inputValue());
await page.locator('//ul[@class="oxd-main-menu"]').click();
await page.locator("//button[@class='oxd-button oxd-button--medium oxd-button--secondary']").click();
await page.locator("//input[@placeholder='First Name']").fill("Try");
await page.locator("//input[@placeholder='Middle Name']").fill("Abc");
await page.locator("//input[@placeholder='Last Name']").fill("Def");
let empId = await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").inputValue();
console.log(empId);

await page.locator('label:has(.oxd-switch-input)').click();
const usernameInput = page.locator('//label[text()="Username"]/../following-sibling::div/input');
await usernameInput.waitFor({ state: 'visible' });
await usernameInput.fill("tryabc107890");
const userPassword = page.locator('//label[text()="Password"]/../following-sibling::div/input');
await userPassword.waitFor({ state: 'visible' });
await userPassword.fill("Password@123");

const confirmPassword = page.locator('//label[text()="Confirm Password"]/../following-sibling::div/input');
await confirmPassword.waitFor({ state: 'visible' });
await confirmPassword.fill("Password@123");
await page.locator("//button[@type='submit']").click();



const name = await page.locator('input[name="firstName"]').inputValue();
const middlename = await page.locator('input[name="middleName"]').inputValue();
const lastname = await page.locator('input[name="lastName"]').inputValue();

console.log(name+" "+ middlename+ " "+lastname);

let full_name = first_name+" "+middle_name+" "+last_name;
let fullname = name+" "+ middlename+ " "+lastname;

expect(full_name).toBe(fullname);
console.log("Employee added successfully and verified.");

const useremployeeId= page.locator('//label[text()="Employee Id"]/../following-sibling::div/input');
await useremployeeId.waitFor({ state: 'visible' });
console.log(await useremployeeId.inputValue());




  // Optional: pause to visually verify
   await page.pause();
});
