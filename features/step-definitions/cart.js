import { Given, When, Then } from "@wdio/cucumber-framework";
import cartPage from "../page-objects/cart.page.js";
import productPage from "../page-objects/product.page.js";
import { browser, $ } from "@wdio/globals";

When('I click Proceed to checkout button', async function() {
    await productPage.clickOnProceedToCheckout.waitForClickable();
    await productPage.clickOnProceedToCheckout.click();

    await cartPage.clickOnProceedToCheckout.click();
});

When('I click on item removing button', async function() {
    await cartPage.clickOnItemRemovingButton.click();
});

Then('I see a message {word}', async function(word) {
    await expect(cartPage.isEmptyMessage).toHaveText(word); // I wanted to make it with .alert-warning selector and message "Your shopping cart is empty."
});                                                         // but there was some magic ;). log.txt about it in my git