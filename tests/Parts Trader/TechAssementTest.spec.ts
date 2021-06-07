import { test, expect } from "@playwright/test";
import { SearchPage } from "../../page-objects/Search Page/SearchPage";
import { ProductsPage } from "../../page-objects/Products Page/ProductsPage";
import { CheckoutPage } from "../../page-objects/Check Out Page/CheckoutPage";


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

    let searchPage,productsPage,checkoutPage: any;

    test.beforeEach(async ({ page }) => {
        searchPage = new SearchPage(page);
        productsPage = new ProductsPage(page);
        checkoutPage = new CheckoutPage(page);
        await page.goto('http://automationpractice.com/index.php');
    });
        
    test("Add to Cart Test", async ({page}) => {
        await searchPage.productSearch('Printed Summer Dress');        
        await searchPage.selectLowestPricedItem();
        await productsPage.updateQuantity('2');
        await productsPage.updateSize('M');
        await productsPage.updateColorToGreen();
        await productsPage.clickAddToCartButton();
        await productsPage.clickProceedToCheckoutButton();
        expect(await checkoutPage.checkTotalPrice()).toBe("$34.80");
        await page.screenshot({ path: 'screenshot.png', fullPage: true });
    });

});
