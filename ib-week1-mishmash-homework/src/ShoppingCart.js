// Checking my ShoppingCart in shopping-run.js

class ShoppingCart {
    constructor() {
        this.items = []
    }

// Mehofs for the class ShoppingCart
    getItems(){
        return this.items
    }
    // adds an item as object to the items array
    addItem(itemName, quantity, price){
        this.items.push(
            {
                name: itemName,
                pricePerUnit: price,
                quantity: quantity
            }
        )
    }
    // empties the shopping cart
    // I use this method since items = [] may produce problems
    // in later implementations if items is referenced from another
    // variable and not the original
    clear() {
        this.items.length = 0
    }
    // calculates the total price of items
    total() {
        items.reduce()
    }
}



module.exports = ShoppingCart


// The items need to be listed in an array
// Inside the array every added item is an object {}
// The object of each item has the following properties
// name 
// quantity
// pricePerUnit
//