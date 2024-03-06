import { Given, When, Then } from '@wdio/cucumber-framework';
import searchingPage from '../page-objects/searching.page.js';

When('I see confirmation about searching {string} element', async function(element) {
    await expect(searchingPage.receivedSearchingElement).toHaveText(expect.stringContaining(element.toUpperCase()));
});

Then('I see only {string} products at searching page', async function(productKeyWord) {
    // REVIEW: Yeah, this index based approach is not good. You never know if you have 7 elements.
    // Look into $$() function which lets you get all of the elements with a specific selector. Then you can
    //  iterate over all found elements and check that they contain expected text.
    for(let i = 1; i <= 7; i++) {
        await expect(searchingPage.receivedProductName(i)).toHaveText(expect.stringContaining(productKeyWord));
    }
});