import { Page } from './page.js';
import { browser } from '@wdio/globals';

class MenuPage extends Page {
    clickOnMenuItem(menuItem) { return $(`a[title="${menuItem}"]`); }
}

export default new MenuPage();