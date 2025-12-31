


const { test,expect } = require("@playwright/test");
class LoginPage{

constructor(page)
{
    this.page = page;
    this.username = page.locator('[name="username"]');
    this.password= page.locator('[name="password"]');
    this.submit = page.locator('button[type="submit"]');
    this.menu_items= page.locator('ul.oxd-main-menu li span.oxd-main-menu-item--name')
}

async goto(page)
{
     await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

console.log(await this.page.title());

  await expect(this.page).toHaveTitle("OrangeHRM"); 
}

async login(){
await this.username.fill("Admin");
  await this.password.fill("admin123");
  await this.submit.click();
  await this.page.waitForLoadState('networkidle');
  await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

  // Wait until all menu items render
  await this.page.waitForSelector('ul.oxd-main-menu li span.oxd-main-menu-item--name');

  // Grab all visible menu names
  const menuItems = await this.menu_items.allInnerTexts();
  console.log(menuItems);
}

}

module.exports={LoginPage};

