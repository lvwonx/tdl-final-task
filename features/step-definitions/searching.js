import { Given, When, Then } from '@wdio/cucumber-framework';
import searchingPage from '../page-objects/searching.page.js';
import { productQtyOnPage } from '../utils/utils.js';

When('I see confirmation about searching {string} element', async function(element) {
    await expect(searchingPage.receivedSearchingElement).toHaveText(expect.stringContaining(element.toUpperCase()));
});

Then('I see only {string} products at searching page', async function(productKeyWord) {
    for(let i = 1; i <= 7; i++) {
        await expect(searchingPage.receivedProductName(i)).toHaveText(expect.stringContaining(productKeyWord));
    }
});