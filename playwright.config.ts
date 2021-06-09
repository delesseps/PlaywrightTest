// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {

    testDir: "tests",

    reporter: [
        ['list'],
        ['junit', {outputFile: 'report.xml'}],
        ['json', {outputFile: 'report.json'}]
    ],
                 
    timeout: 90000,
    retries: 1,
    workers: 6,

    projects: [
        {
          name: 'Chrome Stable',
          use: {
            browserName: 'chromium',
            // Launch options
            headless: false,
            screenshot: 'on',
            // Context options
            viewport: { width: 1280, height: 1024 },
            ignoreHTTPSErrors: true,
            // Testing options
            video: 'retain-on-failure',
          },
        },
        // {
        //   name: 'Desktop Safari',
        //   use: {
        //     browserName: 'webkit',
        //     viewport: { width: 1200, height: 750 },
        //   }
        // },
        // Test against mobile viewports.
        // {
        //   name: 'Mobile Chrome',
        //   use: devices['Pixel 5'],
        // },
        // {
        //   name: 'Mobile Safari',
        //   use: devices['iPhone 12'],
        // },
        {
          name: 'Desktop Firefox',
          use: {
            browserName: 'firefox',
            viewport: { width: 1280, height: 1024 },
            headless: false,
            screenshot: 'on',
            ignoreHTTPSErrors: true,
            // Testing options
            video: 'retain-on-failure',
          }
        },
      ],

};
export default config;