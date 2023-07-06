const house = {
    squareFeet: 3000,
    numRooms: 8,
    doors: [],
    twoStories: true,
    extColor: "green",
    lockUp(){
        //Close all the doors in the house
        this.doors.forEach(door => door.close());
    }
};

//Keys on an object:
    //Properties
//Functions on an object - Methods

//Example 1
const houseBlueprint = {
    roof: {},
    doors: [],
    bathrooms: 1
}

const redHouse = Object.create(houseBlueprint);
redHouse.extColor = "red";
console.log(redHouse);

//Example 2
//Constructor
// function Rectangle(x, y){
//     //this keyword refers to the containing object
//     this.x = x;
//     this.y = y;
// }

//Create an instance of the object
// const myRectangle = new Rectangle(5, 7);
// console.log(myRectangle);

//Example 3
//Creating a blueprint for an object instance
class Rectangle {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    calcPerimeter(){
        return this.x * this.y;
    }
}

//Inherit from the Rectangle
class Square extends Rectangle {
    constructor(a){
        super(a, a);
        this.angle = 90;
    }
    calcPerimeter(){
        return this.x * this.y + 1;
    }
}

//Creating the actual (realized) instance of the class
const secondRectangle = new Rectangle(4, 3);
console.log(secondRectangle.calcPerimeter());
const mySquare = new Square(3);
console.log(mySquare);