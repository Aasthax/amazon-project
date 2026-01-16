import {products} from '../data/products.js';
import {cart} from '../data/cart.js';

let productHTML = '';

products.forEach((product) => {
    productHTML+=`<div class="product">
                <div class="image-container">
                    <img class="product-image" src="../assets/${product.image}">
                </div>
                <p class="name">${product.name}</p>
                <div class="rating">
                    <img class="rating-stars" src="../assets/rating-${product.rating.stars*10}.png">
                    <p class="rating-num">${product.rating.count}</p>
                </div>
                <p class="price">$${(product.priceCents/100).toFixed(2)}</p>
                <select class="quantity">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
                <div class="added-container js-added-container">
                </div>
                <button class="add-to-cart js-add-to-cart" data-product-id=${product.id}>Add To Cart</button>
            </div>`;
});

document.querySelector('.js-product-container').innerHTML = productHTML;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
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

        let cartSize = 0;

        cart.forEach((item) => {
            cartSize+=1;
        })

        document.querySelector('.js-cart-size').innerHTML= cartSize;
    })
});

