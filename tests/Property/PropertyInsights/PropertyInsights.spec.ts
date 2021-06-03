import { test, expect  } from "@playwright/test";
import { PIDetailPage } from "../../../page-objects/Property/PropertyInsights/PIDetailPage";
import { PIHomePage } from "../../../page-objects/Property/PropertyInsights/PIHomePage";
import { PIMapPage } from "../../../page-objects/Property/PropertyInsights/PIMapPage";

test.describe("Trademe PI:", () => { 
    let piHomePage,piMapPage,piDetailPage: any;

    const optionsIgnoreHTTPSErrors = {
        contextOptions: {
            ignoreHTTPSErrors: false,
        }
    };

    test.beforeEach(async ({ page, context }) => {
        piHomePage = new PIHomePage(page);
        piMapPage = new PIMapPage(page);
        piDetailPage = new PIDetailPage(page);
        //await page.goto(baseURL);
        //${Options.baseHref}
        
        await piHomePage.navigate('https://www.stage.trademe.co.nz/property/insights/');
        // Block any jpg requests for each test in this file.
        //await context.route(/.jpg/, route => route.abort());
    });
    
    test("Property Insights Test", async ({ page, browserName, context }) => {
        //await page.route(/.jpg/, route => route.abort());
        //await page.route('**/xhr_endpoint', route => route.fulfill({ path: 'mock_data.json' }));

        //await piHomePage.clickLogin();
        await piHomePage.clickLogInLink();
        await piHomePage.loginWithEmailPassword('1938902_scrubbed@trademe.co.nz','password');
        await piHomePage.search('6 Lovelock');
        await piMapPage.checkPiSummaryCard();
 /*       
        if ( (await page.innerText(piDetailPage.piSummaryPropertyAddress)).match('Stop tracking')){
            await piDetailPage.clickPITrackButton();
        }
        await piDetailPage.clickPITrackButton();
        await piDetailPage.clickCheckInterested();
        await piDetailPage.clickConfirmButton1();
        //debugger;
        await piDetailPage.clickPITrackButton();        
        });

    test("Property Insights Test Checking", optionsIgnoreHTTPSErrors, async ({ page, browserName, context }) => {
        //await page.route(/.jpg/, route => route.abort());
        await piPage.search('6 Lovelock');
        await piPage.checkPiSummaryCard();    */
        //const screenshot = await page.screenshot({ path: 'screenshot.png', fullPage: true });
        //expect(screenshot).toMatchSnapshot(`test.png`, { threshold: 0.1 });
        //await page.screenshot({ path: 'screenshot.png', fullPage: true });

        expect(await piDetailPage.getPiSummaryPropertyAddressSuburb()).toContain('Mount Eden, Auckland');   
        expect(await piDetailPage.getTitle()).toContain('6 Lovelock');   

        test.skip(browserName === "webkit", "optional description for the skip")
        expect(await piDetailPage.getPiSummaryPropertyAddress()).toBe('6 Lovelock Avenue\nMount Eden, Auckland');

        
    });

});
/* 

test("should be skipped on firefox", async ({ page, browserName }) => {
    test.skip(browserName === "firefox", "optional description for the skip");
    // Test function
});

test("tests on multiple web pages", async ({ context }) => {
    const pageFoo = await context.newPage();
    const pageBar = await context.newPage();
    const pageFour = await context.newPage();
    // Test function
  });

 

test.beforeEach(async ({ context }) => {
    // Block any css requests for each test in this file.
    await context.route(/.css/, route => route.abort());
  });
  
test("loads page without css", async ({ page }) => {
    // Alternatively, block any png requests just for this test.
    await page.route(/.png/, route => route.abort());

    // Test function code.
    await page.goto("https://stackoverflow.com");
});

test("compares page screenshot", async ({ page }) => {
    await page.goto("https://stackoverflow.com");
    const screenshot = await page.screenshot();
    expect(screenshot).toMatchSnapshot(`test.png`, { threshold: 0.2 });
});

 
const options = {
    contextOptions: {
        ignoreHTTPSErrors: false,
    }
};

test("no https errors in this test", options, async ({ page }) => {
    // Test function
}); */