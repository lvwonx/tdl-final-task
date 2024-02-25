import { Page } from './page.js';
import { browser } from '@wdio/globals';

class CartPage extends Page {
    get clickOnProceedToCheckout() { return $('.standard-checkout'); }
    get createAnAccountMessage() { return $('#create-account_form .page-subheading') }
    get clickOnItemRemovingButton() { return $('.cart_quantity_delete') }
    get isEmptyMessage() { return $('.ajax_cart_no_product') }
}

export default new CartPage();