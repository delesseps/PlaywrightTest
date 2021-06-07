import { test, expect } from "@playwright/test";
import { SearchPage } from "../../page-objects/Search Page/SearchPage";
import { ProductsPage } from "../../page-objects/Products Page/ProductsPage";
import { CheckoutPage } from "../../page-objects/Check Out Page/CheckoutPage";
import BasePage from "../../page-objects/BasePage";


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

    // let searchPage,productsPage,checkoutPage: any;
    let basePage: any;

    test.beforeEach(async ({ page }) => {
        // searchPage = new SearchPage(page);
        // productsPage = new ProductsPage(page);
        // checkoutPage = new CheckoutPage(page);
        basePage = new BasePage(page);
        await page.goto('http://automationpractice.com/index.php');
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });
    
    
    test("Add to Cart Test", async ({page}) => {
        await basePage.productSearch('Printed Summer Dress');        
        await basePage.selectLowestPricedItem();
        await basePage.updateQuantity('2');
        await basePage.updateSize('M');
        await basePage.updateColorToGreen();
        await basePage.clickAddToCartButton();
        await basePage.clickProceedToCheckoutButton();
        expect(await basePage.checkTotalPrice()).toEqual("$34.80");
        await page.screenshot({ path: 'screenshot.png', fullPage: true });
    });

});
