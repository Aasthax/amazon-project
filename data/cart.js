export const cart = [];

export function addToCart(productId) {
    let matchingProduct;
    cart.forEach((item) => {
        if (productId===item.productId) {
            matchingProduct = item;
        }
    })
    if (matchingProduct) {
        matchingProduct.quantity++;
    }
    else {
        cart.push({
            productId: productId,
            quantity: 1
        });
    }
}