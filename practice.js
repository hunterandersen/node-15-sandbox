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
    new ShoppingItem(
        "Gel-Resolution 9 Tennis Shoe",
        129.95,
        0,
        "Men's Tennis Shoe",
        ["Asics", "Men", "Men's", "Shoe", "Apparel", "Tennis", "Sport"]
    ), new ShoppingItem(
        "Crosscourt Modern Sneaker",
        68.14,
        0,
        "Men's Sneaker",
        ["Cole Haan", "Men", "Men's", "Shoe", "Apparel", "Crosscourt", "Sport"]
    ), new ShoppingItem(
        "Gel-Nimbus 24 Running Shoes",
        80.00,
        0,
        "Men's Running Shoes",
        ["Asics", "Men", "Men's", "Shoe", "Apparel", "Running", "Sport"]
    ), new ShoppingItem(
        "Super Liga Og Retro Sneaker",
        64.98,
        0,
        "Men's Sneaker",
        ["Puma", "Men", "Men's", "Shoe", "Apparel", "Retro"]
    ), new ShoppingItem(
        "Endorphin Speed 2 Running Shoe",
        99.99,
        0,
        "Men's Shoe",
        ["Saucony", "Men", "Men's", "Shoe", "Apparel", "Running", "Sport"]
    )
];

const checkoutForm = document.querySelector("#checkout-form");
checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event.target);
});

function displayShoppingItems(){
    //Remove the previous cards
    const orderItemsUl = document.querySelector(".order-items > ul");
    orderItemsUl.innerHTML = "";
    //Build each card
    mockItemData.forEach(item => {
        //Create elements
        const itemCard = document.createElement("li");
        const title = document.createElement("h4");
        const description = document.createElement("h5");
        const priceBtnDiv = document.createElement("div");
        const price = document.createElement("p");
        const addBtn = document.createElement("button");
        //Modify elements
        itemCard.classList.add("item")
        title.textContent = `${item.title}`;
        title.classList.add("shopping-item-title");
        description.textContent = `${item.description}`;
        description.classList.add("shopping-item-description");
        priceBtnDiv.classList.add("shopping-item-priceBtnDiv");
        price.textContent = `$${item.price}`;
        price.classList.add("shopping-item-price");
        addBtn.textContent = `Add to Cart`;
        addBtn.classList.add("shopping-item-addToCart");
        addBtn.addEventListener("click", () => addItemToCart(item));
        //Append elements
        priceBtnDiv.append(price, addBtn);
        itemCard.append(title, description, priceBtnDiv);
        //Add the card to the screen
        orderItemsUl.appendChild(itemCard);
    })
}

/**
 * 
 * @param {ShoppingItem} item 
 */
function addItemToCart(item){
    //I need to know which button was clicked
    //and what item that refers back to
    console.log(item);
    //Track that that specific item was clicked again
    item.addToCart();
    //Display the up-to-date cart
    displayCart();
}

const tallySheet = {};

function displayCart(){
    //Clear out the old cart
    const cartList = document.querySelector(".shopping-cart > ul");
    cartList.innerHTML = null;
    //Create the shopping cart items one by one
    mockItemData.forEach(item => {
        if (item.quantity){
            //Create elements
            const newLi = document.createElement("li");
            const p1 = document.createElement("p");
            const p2 = document.createElement("p");
            //Modify Elements
            p1.textContent = `${item.title}`;
            p2.textContent = `x${item.quantity}`;
            //Append the Elements
            newLi.append(p1, p2);
            cartList.appendChild(newLi);
        }
    });
}

displayShoppingItems();