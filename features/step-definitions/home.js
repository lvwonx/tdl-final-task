import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../page-objects/home.page.js';
import { randomProductQty } from '../utils/utils.js';
import Page from '../page-objects/page.js';
import productPage from '../page-objects/product.page.js';

When('I input {string} in searching form', async function(element) {
    await homePage.searchingForm.setValue(element);
});

When('I click on searching button', async function() {
    await homePage.clickOnSearchButton.click();
});