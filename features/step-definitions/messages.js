import { Given, When, Then } from '@wdio/cucumber-framework';
import cartPage from '../page-objects/cart.page.js';

Then('I see a message {string}', async function(message) {
    await expect(cartPage.createAnAccountMessage).toHaveText(message.toUpperCase());
});