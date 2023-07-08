const addToCartButtons = document.querySelectorAll(".add-to-cart");


/**
 * Describes one item that a customer can purchase
 */
class ShoppingItem {
    /**
     * @param {string} title
     * @param {number} price
     * @param {number} quantity
     * @param {string} description
     * @param {string[]} classifications
     */
    constructor(title, price, quantity = 0, description = "", classifications = []){
        this.title = title;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
        this.classifications = classifications;
    }

    remove() {
        this.quantity = 0;
    }

    addToCart() {
        this.quantity++;
    }

    setPrice(newPrice, thing){
        this.price = newPrice;
    }

    addClassification(newClassification){
        this.classifications.push(newClassification);
    }

    removeClassification(prevClassification){
        this.classifications = this.classifications.filter(c => c!=prevClassification);
    }

}

//Component State (Memory for this moment in time)
const mockItemData = [
    new ShoppingItem()
];

const checkoutForm = document.querySelector("#checkout-form");
checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event.target);
});

const tallySheet = {};

addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        //Update a tally sheet of shopping cart items
            //I need to know which button was clicked
            //and what item that refers back to
            const parent = event.target.parentElement;
            const itemName = parent.firstElementChild.textContent;
            console.log(itemName);
            //Track that that specific item was clicked again
            if (!tallySheet[itemName]){
                tallySheet[itemName] = 1;
            } else {
                tallySheet[itemName]++;
            }
        //Display the up-to-date version
        displayCart();
    });
});

function displayCart(){
    //Clear out the old cart
    const cartList = document.querySelector(".shopping-cart > ul");
    cartList.innerHTML = null;
    //Create the shopping cart items one by one
    const tallyKeys = Object.keys(tallySheet);
    for (let i = 0; i < tallyKeys.length; i++){
        const newLi = document.createElement("li");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");

        p1.textContent = `${tallyKeys[i]}`;
        p2.textContent = `x${tallySheet[tallyKeys[i]]}`;

        //Add the elements to the page
        newLi.append(p1, p2);
        cartList.appendChild(newLi);
    }
    //Add them to the DOM (aka display them)
}