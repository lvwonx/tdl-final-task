import { Page } from './page.js';
import { browser } from '@wdio/globals';

class HomePage extends Page {
    get searchingForm() { return $('.search_query'); }
    get clickOnSearchButton() { return $('button[name=submit_search]'); }
}

export default new HomePage();