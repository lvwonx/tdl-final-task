import { Page } from './page.js';
import { browser } from '@wdio/globals';

class SearchingPage extends Page {
    get receivedSearchingElement() { return $('.lighter'); }
    receivedProductName(productPos) { return $(`li:nth-child(${productPos}) a.product-name[itemprop=url]`) }
}

export default new SearchingPage();