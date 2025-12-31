 // To choose this configuration while running script give this command - npx playwright test --config playwright.config1.js
 // To choose particular project configuration while running script give this command - npx playwright test --config playwright.config1.js --project=Safari Execution


// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config=({
  testDir: './tests',
  retries :1, // it is applicable at global level and will retry all the failed test for number we specify
timeout:60*1000,  // this is the default timeout for each test case and overall the test will run for 40 seconds and it should be completed in that time and it is global time outs for all the test cases
expect: {
  timeout:40*1000  // it will wait for 40 seconds for the expect to be true and this is the default timeout for expect and time for assertions
},

reporter: 'html',

projects:[ 
  { // so we have option to define projects in playwright.cofig.js and define the properties value
    name : "Safari",
     use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    browserName: 'webkit',
    headless: false,
    workers: 5, 
    //bydefault test files are triggered parallely while test cases are triggered in sequence
    screenshot: 'on', // this will take screenshot for every test case and it will be saved in the artifacts folder
        video:'retain-on-failure', // this will take screenshot for every test case and it will be saved in the artifacts folder
    trace: 'on', // this will collect trace for every test case and it will be saved in the artifacts folder
    viewport: { width: 1920, height: 1080} //we are deciding the width and height of the screen 
   // ...devices['iPhone 11'], // we are just specifying the device name and it's upto playwright to handle it
  }
},
   { // so we have option to define projects in playwright.cofig.js and define the properties value
    name : "Chromium Execution",
     use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    browserName: 'chromium',
    headless: false,
    ignoreHttpsErrors:true,  //this will bydefault bypass the ssl certificate error on the page ,
    permissions: ['geolocation'], // when we set this, any default location permission will be allowed
    screenshot: 'on',
    video:'retain-on-failure', // this will take screenshot for every test case and it will be saved in the artifacts folder
    trace: 'on', // this will collect trace for every test case and it will be saved in the artifacts folder
    viewport: { width: 1920, height: 1080
// for android devices use ...devices[device_name] in chromium
    }
  }
}
     
 
  
]

});

module.exports= config;