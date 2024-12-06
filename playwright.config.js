// @ts-check
const { defineConfig, devices } = require('@playwright/test');
//const fs = require('fs');

// Read failed tests from a JSON file if it exists
//let failedTests = [];
//if (fs.existsSync('failed-tests.json')) {
//  const rawData = fs.readFileSync('failed-tests.json', 'utf-8');
//  failedTests = JSON.parse(rawData);//
//}

module.exports = defineConfig({
  testDir: './tests',
  outputDir: 'test-results', // Custom output directory for test results
  reporter: [
  //  ['list'], // Default console reporter
  //  ['json', { outputFile: 'test-results/report.json' }], // JSON reporter
  //  ['html', { outputFolder: 'test-results/html-report', open: 'never' }] // HTML reporter
  ],
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  use: {
    trace: 'on-first-retry',
  },

  // Conditionally set the `grep` filter if there are failed tests
  //grep: failedTests.length ? new RegExp(failedTests.join('|')) : undefined,

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
