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


await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/div/div[2]/div/div/input').fill(fullname); // eentering employee name 
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
