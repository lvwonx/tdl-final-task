import { Given, When, Then } from '@wdio/cucumber-framework'
import menuPage from '../page-objects/menu.page.js';
import { parseMenuExpression } from '../utils/utils.js';
import Page from '../page-objects/page.js';

Given('I am on home page', async function() {
    await browser.navigateTo('http://www.automationpractice.pl/');
});

When('I select {word} menu item', async function(menuItem) {
    await menuPage.clickOnMenuItem(menuItem).click();
});

When('I click on the cart image', async function() {
    await Page.clickOnCartImage.click();
});