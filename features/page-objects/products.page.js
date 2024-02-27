import { Page } from './page.js';
import { browser, $ } from '@wdio/globals';

class ProductsPage extends Page {
    clickOnProduct(position) { return $(`li:nth-child(${position}) .product_img_link`); }
}

export default new ProductsPage();