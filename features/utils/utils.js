export function parseMenuExpression(menuExpression) {
    // Women -> Tops -> Jackets
    const parts = menuExpression.split('->');

    return parts.map((p) => p.trim());
}

export function randomProductPosition() {
    // REVIEW: I wouldn't be so sure about min/max indexes.
    // Better approach would be to check, how manu options a "select" element has and the generate random index based on that.
    // But stil nice to see that you implementing the random-based product selection.
    const productPosition = Math.floor(Math.random() * (Math.floor(7) - Math.ceil(1)) + Math.ceil(1));
    return productPosition;
}

export function randomProductQty() {
    const productQty = Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1)) + Math.ceil(1));
    return productQty;
}