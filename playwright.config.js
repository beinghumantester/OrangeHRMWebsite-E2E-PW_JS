// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const { trace } = require('console');


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config =({
  testDir: './tests',
  timeout: 80 * 1000,
  /* Run tests in files in parallel */

expect:{  
  timeout: 80*1000
},

 reporter : 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    browserName: 'chromium',
    screenshot: 'on',
    //trace: 'on',
    trace: 'retain-on-failure',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    headless: false,
    viewport: { width: 1920, height: 1080}
  },


  
  /* Configure projects for major browsers */

});

module.exports= config;