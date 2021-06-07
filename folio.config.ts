import { ChromiumEnv, FirefoxEnv, WebKitEnv, test, setConfig } from "@playwright/test";
import { reporters, setReporters } from "@playwright/test";
import { devices } from "playwright";

setConfig({
  testDir: "tests/Parts Trader",  // Search for tests in this directory.
    timeout: 90000,  // Each test is given 90 seconds.
    retries: 1,  // Failing tests will be retried at most two times.
    workers: 6
});

setReporters([
     // Report to the terminal with "list" reporter.
     new reporters.list(),
     // Additionally, output a JUnit XML file.
     new reporters.junit({ outputFile: 'junit.xml' }),
]);

const options = {
   headless: false,
   slowMo: 50,
   // Context options:
   viewport: { width: 1280, height: 1024 },
   ignoreHTTPSErrors: true,
   // Testing options:
   screenshot: 'on',
   video: 'retry-on-failure',
   baseHref: 'http://automationpractice.com/'
};

// const mobileoptions = {
//   headless: false,
//   slowMo: 50,
//   // Context options:
//   ...devices["iPhone 11"],
//   ignoreHTTPSErrors: true,
//   // Testing options:
//   screenshot: 'on',
//   video: 'retry-on-failure',
// };

// Run tests in three browsers.
test.runWith(new ChromiumEnv(options), { tag: 'chromium' });
//test.runWith(new ChromiumEnv(mobileoptions), { tag: 'chromium' });
//test.runWith(new FirefoxEnv(options), { tag: 'firefox' });
//test.runWith(new WebKitEnv(options), { tag: 'webkit' });
//test.runWith(new WebKitEnv(mobileoptions), { tag: 'webkit' });