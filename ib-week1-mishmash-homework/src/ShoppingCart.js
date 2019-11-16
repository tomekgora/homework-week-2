// Checking my ShoppingCart with node in shopping-run.js
// Some issues with this implementation:
//      Adding second item with the same name adds it as 
//      separate object

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
        this.items.reduce(
            (total, item) => {
                const sum = item.pricePerUnit * item.quantity
                console.log(total)
                return sum
            }
        )
        
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