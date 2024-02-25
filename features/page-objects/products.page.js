import { Page } from './page.js';
import { browser, $ } from '@wdio/globals';

class ProductsPage extends Page {
    get productsQtyOnPage() { return $('[for=layered_condition_new] span'); }
    clickOnProduct(position) { return $(`li:nth-child(${position}) .product_img_link`); }
}

export default new ProductsPage();