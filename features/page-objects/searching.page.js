import { Page } from './page.js';
import { browser } from '@wdio/globals';

class SearchingPage extends Page {
    get receivedSearchingElement() { return $('.lighter'); }
    get receivedProductName() { return $('[itemprop=name] a') }
}

export default new SearchingPage();