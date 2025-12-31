


const { test,expect } = require("@playwright/test");
class LoginPage{

constructor(page)
{
    this.page = page;
    this.username = page.locator('[name="username"]');
    this.password= page.locator('[name="password"]');
    this.submit = page.locator('button[type="submit"]');
    this.menu_items= page.locator('ul.oxd-main-menu li span.oxd-main-menu-item--name');
    this.error_message = page.locator(".oxd-text.oxd-text--p.oxd-alert-content-text");
}

async goto(page)
{
     await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

console.log(await this.page.title());

  await expect(this.page).toHaveTitle("OrangeHRM"); 
}

async login(username,password){
await this.username.fill(username);
  await this.password.fill(password);
  await this.submit.click();
  //await this.page.waitForLoadState('networkidle');
  await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
}

async menuitem(){
  // Wait until all menu items render
  await this.page.waitForSelector('ul.oxd-main-menu li span.oxd-main-menu-item--name');

  // Grab all visible menu names
  const menuItems = await this.menu_items.allInnerTexts();
  console.log(menuItems);
}

async login_invalid_credentials(username,password){
await this.username.fill(username);
  await this.password.fill(password);
  await this.submit.click();

}

async invalid_credential_error_message()
{
   await expect(this.error_message).toHaveText("Invalid credentials")
   await this.username.clear();
   await this.password.clear();
}

}

module.exports={LoginPage};

