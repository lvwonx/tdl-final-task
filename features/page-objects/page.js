export class Page {
    get clickOnCartImage() { return $('a[title="View my shopping cart"]'); }
}

export default new Page();