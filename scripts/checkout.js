import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
// import '../../data/oops/cart-class.js';
import {loadProductsFetch} from '../data/products.js';

loadProductsFetch().then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});