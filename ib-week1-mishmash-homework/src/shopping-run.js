// for testing out my ShippingCart.js

const ShoppingCart = require("./ShoppingCart");


const cart = new ShoppingCart;
console.log(cart)
console.log(cart.getItems())

cart.addItem('sausage', 4, 44)
cart.addItem('cheese', 2, 25)
cart.addItem('bread', 1, 44)

