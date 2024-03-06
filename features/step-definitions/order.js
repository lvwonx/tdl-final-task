import { Given, When, Then } from '@wdio/cucumber-framework'
import productsPage from '../page-objects/products.page.js';
import productPage from '../page-objects/product.page.js';
import cartPage from '../page-objects/cart.page.js';
import { randomProductPosition } from '../utils/utils.js';
import { randomProductQty } from '../utils/utils.js';

When('I select one of the products', async function() {
    // const productPos = randomProductPosition();
    // await productsPage.clickOnProduct(productPos).click();
    await browser.debug();
});

When('I select quantity, size and color', async function() {
    // REVIEW: Thumbs up for trying to find a configuration that is available instead of blindly selecting one specific.
    // But the be more sure about that, you should have first, filtered products by "in stock" filter.
    // let productSize = 1;
    // while(true) {
    //     productSize++;
    //     await productPage.clickOnSizeDropDown.click();
    //     await productPage.selectProductSize(productSize).click();
    //     if(productPage.productAvailability) break;
    // }

    // REVIEW:
    // You can't `setValue` on `option` element.
    // You should have found `select` element and then used `selectBy` function. I showed it in the documentation in one of the workshop lectures.
    // For example, https://webdriver.io/docs/api/element/selectByIndex, to select by index
    // await productPage.selectProductQty.setValue(randomProductQty());
    // await productPage.selectProductColor.click();
    await browser.debug();
});

When('I click Add to cart button', async function() {
    await productPage.clickOnAddToCart.waitForDisplayed();
    await productPage.clickOnAddToCart.click();
});

When('I close the confirmation of order window', async function() {
    await productPage.clickOnClosingWindow.waitForDisplayed();
    await productPage.clickOnClosingWindow.click();
});

Then('I see correct number of items in the cart', async function() {
    await expect(productPage.productQtyInCart).toHaveText(await productPage.addedProductQty.getText())
});