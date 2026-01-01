




//printing of all menu items 

for (const [index, item] of menuItems.entries()) {
    console.log(`${index + 1}. ${item.trim()}`);
  }

/*
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
*/


let first_name="Try";
let last_name="Def";
let middle_name="Abc";
let num = Math.floor(Math.random()*90000) + 10000;
// let num2 = Math.floor(Math.random()*900) + 100;
//let num2 = "0" + Math.floor(Math.random() * 1000).toString().padStart(3, "0");


await page.locator("input[placeholder='Search']").fill("PIM");  //searching pim
console.log(await page.locator("input[placeholder='Search']").inputValue());
await page.locator('//ul[@class="oxd-main-menu"]').click(); //clicking on PIM
await page.locator("//button[@class='oxd-button oxd-button--medium oxd-button--secondary']").click();  //clicking on Add button
await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div/div[2]/div[1]/div[2]/input').fill("Try"); //entering first name on PIM Add employee page 
await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div/div[2]/div[2]/div[2]/input').fill("Abc"); //entering medium name on PIM Add employee page 
await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div/div[2]/div[3]/div[2]/input').fill("Def");  ////entering last name on PIM Add employee page 



//await page.locator("//input[@placeholder='First Name']").fill("Try");
//await page.locator("//input[@placeholder='Middle Name']").fill("Abc");
//await page.locator("//input[@placeholder='Last Name']").fill("Def");
let num2 = "0" + Math.floor(Math.random() * 1000).toString().padStart(3, "0");
let empId = page.locator("(//input[@class='oxd-input oxd-input--active'])[2]");
console.log(await empId.inputValue());  //printing prefilled employee id
await empId.fill(num2.toString());
//await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").clear();
//empId.fill(num2.toString());
await page.locator('label:has(.oxd-switch-input)').click();   //clicking on Create Login Details Toggle button

const usernameInput = page.locator('//label[text()="Username"]/../following-sibling::div/input');
await usernameInput.waitFor({ state: 'visible' });
await usernameInput.fill("tryabc"+num); //entering username on PIM Add page
const userPassword = page.locator('//label[text()="Password"]/../following-sibling::div/input');
await userPassword.waitFor({ state: 'visible' });
await userPassword.fill("Password@123");   //entering password on PIMAdd page

const confirmPassword = page.locator('//label[text()="Confirm Password"]/../following-sibling::div/input');
await confirmPassword.waitFor({ state: 'visible' });
await confirmPassword.fill("Password@123");  ////entering confirm  password on PIMAdd page
await page.locator("//button[@type='submit']").click();  //submitting detail


// submitting full detail

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


let otherid = Math.floor(Math.random()*90000) + 10000;
await page.locator('//label[text()="Other Id"]/../following-sibling::div/input').click();
await page.locator('//label[text()="Other Id"]/../following-sibling::div/input').fill(otherid.toString());

let license = Math.floor(Math.random()*90000) + 10000;
//await page.locator("//label[text()=\"Driver's License Number\"]/../following-sibling::div/input").click();
//await page.locator("//label[text()=\"Driver's License Number\"]/../following-sibling::div/input").fill(license.toString());

const randomYear = Math.floor(Math.random() * (2005 - 1940 + 1)) + 1940;
const randomMonth = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
const randomDay = Math.floor(Math.random() * (31 - 1 + 1)) + 1;  

await page.locator("//label[text()='License Expiry Date']/ancestor::div[@class='oxd-input-group oxd-input-field-bottom-space']//input").fill(randomYear.toString()+"-"+randomMonth.toString()+"-"+randomDay.toString());  // entering licencse expiry date

await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[1]/div[1]/div/div[2]/div/div').click();   // clicking on country dropdown
await page.locator('//div[@role="listbox"]//span[text()="Indian"]').click(); // clicking on Indian

const birthYear = Math.floor(Math.random() * (2005 - 1940 + 1)) + 1940;
const birthMonth = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
const birthDay = Math.floor(Math.random() * (31 - 1 + 1)) + 1;  

await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[2]/div[1]/div/div[2]/div/div/input').fill(birthYear.toString()+"-"+birthMonth.toString()+"-"+birthDay.toString()); //entering date of birth

await page.locator ('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[4]/button').click();

await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[2]/div/form/div[1]/div/div[1]/div/div[2]/div').click();

await page.locator('//div[@role="listbox"]//span[text()="B+"]').click();

await page.locator("//label[text()='Test_Field']/../following-sibling::div/input").fill("09872");

await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[2]/div/form/div[2]/button').click();   // all detail save 




await page.locator("input[placeholder='Search']").fill("PIM"); //again searching PIM
await page.locator('//ul[@class="oxd-main-menu"]').click();



await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList'); //	PIM Dashboard
await page.waitForLoadState('networkidle');

// verify the page loaded correctly
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');//	PIM Dashboard

await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/input').fill(num2);  // entering employeed id 

const search = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]');

await search.waitFor({ state: 'visible' });
await search.click(); //searrhing



const recordFound = page.locator("//span[contains(normalize-space(), 'Record Found')]");
await expect(recordFound).toBeVisible(); //waiting for search result to be visible

///edit page now starts

await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div/div/div[9]/div/button[1]").click();
