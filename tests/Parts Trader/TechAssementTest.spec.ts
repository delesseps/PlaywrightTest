import { test, expect  } from "@playwright/test";
import { APHomePage} from "../../page-objects/Home/APHomePage";
import {SearchPage} from "../../page-objects/Search Page/SearchPage";


test.describe("Parts Trader E2E:", () => {

//     Navigate to http://automationpractice.com/index.php
//         Search for ‘Printed Summer Dress’
// Select the cheapest dress
//     Change the Quantity from 1 to 2
//     Change the Size from S to M
//     Change the colour from Yellow to Green
//     Select “Add to cart”
// Select “Proceed to Checkout”
// Assert that the price equals $34.80
//     Take a screenshot of the cart and attach it along with your code

    let apHomePage,searchPage: any;

    test.beforeEach(async ({ page, context }) => {
        apHomePage = new APHomePage(page);
        searchPage = new SearchPage(page);
        await apHomePage.navigate('http://automationpractice.com/index.php');
    });
    
    test("Add to Cart Test", async ({ page, browserName, context }) => {
        await apHomePage.productSearch('Printed Summer Dress');
        await searchPage.sortBy('price:asc');
        await searchPage.selectLowestPricedItem;
    });

});
