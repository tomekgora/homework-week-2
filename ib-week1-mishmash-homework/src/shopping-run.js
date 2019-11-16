// for testing out my ShippingCart.js

// const ShoppingCart = require("./ShoppingCart");


// const cart = new ShoppingCart;
// console.log(cart)
// console.log(cart.getItems())

// cart.addItem('sausage', 4, 44)
// cart.addItem('cheese', 2, 25)
// cart.addItem('bread', 1, 44)


const trolley = [ {name:'bread', pricePerUnit: 4, quantity: 44 }, 
                  {name: 'cheese', pricePerUnit: 5, quantity: 12},
                  {name: 'sausage', pricePerUnit: 6, quantity: 4}]

// function total() {
//     this.items.reduce(
//         (total, item) => 
//             total + item.quantity * item.pricePerUnit
            
function total(items) {
    items.reduce(
        (sum, item) => { return (sum + (item.pricePerUnit * item.quantity))}
    )
}
console.log(total(trolley))