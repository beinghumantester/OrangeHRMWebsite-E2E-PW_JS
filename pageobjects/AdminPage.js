
const { test,expect } = require("@playwright/test");
class AdminPage{

constructor(page)
{
this.page= page;
this.search_admin= page.locator("input[placeholder='Search']");
this.admin_click= page.locator('//ul[@class="oxd-main-menu"]');
this.add_button_click = page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[2]/div[1]/button");
this.user_role_dropdown = page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div");
this.admin_role = page.locator('//div[@role="listbox"]//span[text()="Admin"]');
this.fullname = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/div/div[2]/div/div/input');
this.search_result  = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/div/div[2]/div/div[2]/div[1]');
this.status_dropdown = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[3]/div/div[2]/div/div').click();
this.enabled_status= page.locator('//div[@role="listbox"]//span[text()="Enabled"]');
this.username = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[4]/div/div[2]/input');
this.password = page.locator('//label[text()="Password"]/../following-sibling::div/input');
this.confirm_password = page.locator('//label[text()="Confirm Password"]/../following-sibling::div/input');
this.save_button = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/button[2]');
this.username_search = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/input');
this.search_button_click = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]');

}

async admin_dashboard()
{

}
async admin_add_user()
{

}
async admin_edit_user()
{

}
async admin_delete_user()
{

}


}




//await page.waitForTimeout(15000);

/*
await Promise.all([
  page.waitForLoadState('networkidle'),
  search.click()
]);
*/
// admin page 
await page.locator("input[placeholder='Search']").fill("Admin");   //searching admin
await page.locator('//ul[@class="oxd-main-menu"]').click();  //clicking on admin


await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');  //admin list 
await page.waitForLoadState('networkidle');

// verify the page loaded correctly
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');  //admin list 
await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[2]/div[1]/button").click();  //click on Add button

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');
await page.waitForLoadState('networkidle');

await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div").click();  //click on user role drop down 
await page.locator('//div[@role="listbox"]//span[text()="Admin"]').click();  //select Admin


await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/div/div[2]/div/div/input').fill(fullname); // entering employee name 
await page.waitForTimeout(5000);

//search_result =page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/div/div[2]/div/div[2]'); //


let search_result = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/div/div[2]/div/div[2]/div[1]')

await search_result.waitFor({ state: 'visible' });

await page.waitForLoadState('networkidle');

await search_result.click();
await page.waitForLoadState('networkidle');

await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[3]/div/div[2]/div/div').click();  //clicking on Status dropdown
await page.locator('//div[@role="listbox"]//span[text()="Enabled"]').click(); // Selecting enabled

await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[4]/div/div[2]/input').fill("tryabc"+num);   // entering  username 
await page.waitForTimeout(5000);

await page.locator('//label[text()="Password"]/../following-sibling::div/input').fill("Password@123");  // entering password

await page.locator('//label[text()="Confirm Password"]/../following-sibling::div/input').fill("Password@123");   // entering confirm password 

await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/button[2]').click();  // clicking on Save button and admin employee added


await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
//await page.waitForLoadState('networkidle');

await page.waitForTimeout(5000);

await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/input').fill("tryabc"+num);  // enter username on admin page 
await page.waitForTimeout(5000);
await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]').click(); //clicking on Search button




await page.waitForTimeout(5000);
