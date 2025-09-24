// @ts-check
const { defineConfig, devices } = require('@playwright/test');


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config =({
  testDir: './tests',
  timeout: 40 * 1000,
  /* Run tests in files in parallel */

expect:{  
  timeout: 4*1000
},


  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    browserName: 'chromium',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    headless: false 
  },

  /* Configure projects for major browsers */

});

module.exports= config;