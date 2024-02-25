import productPage from "../page-objects/product.page.js";

export function parseMenuExpression(menuExpression) {
    // Women -> Tops -> Jackets
    const parts = menuExpression.split('->');

    return parts.map((p) => p.trim());
}

export function randomProductPosition() {
    const productPosition = Math.floor(Math.random() * (Math.floor(7) - Math.ceil(1)) + Math.ceil(1));
    return productPosition;
}

export function randomProductQty() {
    const productQty = Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1)) + Math.ceil(1));
    return productQty;
}