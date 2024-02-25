import { Page } from './page.js';
import { browser, $ } from '@wdio/globals';

class ProductPage extends Page {
    get productAvailability() { return $('.label-success'); }
    get selectProductQty() { return $('input[name="qty"]'); }
    get clickOnSizeDropDown() { return $('#group_1.form-control'); }
    selectProductSize(productSize) { return $(`option[value="${productSize}"]`); }
    get selectProductColor() { return $('.color_pick'); }
    get clickOnAddToCart() { return $('#add_to_cart'); }
    get productQtyInCart() { return $('.ajax_cart_product_txt_s .ajax_cart_quantity') }
    get addedProductQty() { return $('#layer_cart_product_quantity') }
    get clickOnClosingWindow() { return $('.cross[title="Close window"]') }
    get clickOnProceedToCheckout() { return $('.button-medium[title="Proceed to checkout"]'); }
}

export default new ProductPage();