console.log('Hello World');

//Data types in js
//strings
let name = 'Jane'
let school = 'UON'

console.log(name + ' studies in ' + school)//same as print in .py

let names = 'John'
let schools = 'UON'

console.log(`${names} also studies in ${schools}`)

//dealing with arrays
let col =['red','green','blue']
//add a 'black' color after the last index of the array
col.push('black')
console.log(col)
//remove the value 'red' and swap the position of 'green' and 'blue'.

col.shift()
console.log(col)
//dd the color 'yellow' on the first index of the array
col.unshift('yellow')
console.log(col)

//conditional statements
let balance = 3000;



if (balance > 5000) {

console.log("You have the money for this trip. Let's go!");

} else {

console.log("Sorry, not enough money. Save more!");

}

console.log("The end!");

//exercise
let grade = 'A';
if (grade === 'A'){
console.log(`You got an ${ grade}, so here's a Chocolate for you!`)
}else if (grade === 'B'){
console.log(`You got a ${ grade}, so here's a Cookie for you`)
}else if (grade === 'C'){
console.log(`You got a ${grade}, there's room for improvement and here's your Candy!`)
}else{
console.log('No reward to give')

}

//for statements
for (let x = 0; x < 10; x++) {

    console.log(x);
    
    }
//while statements
let i = 0;



while (i < 6) {

console.log(`The value of i = ${i}`);

i++;

}

//Exercise #6
//Write a program that prints a half pyramid using asterisks * 
function printHalfPyramid(rows) {
    for (let k = 1; k <= rows; k++) {
        console.log("The value of k = " + (k - 1));
        let row = '';
        for (let j = 1; j <= k; j++) {
            row += '*';
        }
        console.log(row);
    }
}

// Usage
printHalfPyramid(5);

//functions
function greet(name) {

    console.log(`Hello, ${name}!`);
    
    console.log("Nice weather today, right?");
    
    }
greet('John')

//Exercise #7
//Write a function named calculateSquare() that's used to calculate the area and perimeter of a square shape.

function calculateSquare(side){
    let area= side*side
    let per= 4*side
    console.log(`The square side is ${side}`)
    console.log(`The area of the square is ${area}`)
    console.log(`The perimeter is ${per}`)
}
calculateSquare(2)

//objects in js
let myBook = {

    title: "JavaScript Introduction",
    
    author: "Nathan Sebhastian",
    
    };
    // add release year property
    myBook.year = 2023;
    // add publisher property
    myBook["publisher"] = "CodeWithNathan";
    console.log(myBook);

    //additional properties
//deleting data
//delete myBook.author;
//check if a value exists
//console.log('title'in mybook);

//Exercise #8
//Create a person object with the following properties:

let person = {
    namess: 'Jane',
    age: 20,
    greet:function (greet){
        console.log(`Hello! My name is ${this.namess} amd I am ${this.age} years old.`)
    }
}
person.greet();

//Final Exercise: Build a Cash Register Machine
//Let's build a cash register machine that can add items to a shopping cart, calculate total price, calculate discounts, and accept payment by cash.
// Define the cash register object
const cashRegister = {
    shoppingCart: [],
    items: {
        "Phone": 300,
        "Smart TV": 220,
        "Gaming Console": 150
    },
    addItem: function(itemName) {
        if (this.items[itemName] !== undefined) {
            this.shoppingCart.push(itemName);
            console.log(itemName + " added to the shopping cart.");
        } else {
            console.log("Sorry, we don't sell " + itemName);
        }
    },
    calculateTotalPrice: function() {
        let totalPrice = 0;
        for (let item of this.shoppingCart) {
            totalPrice += this.items[item];
        }
        return totalPrice;
    },
    pay: function(paymentAmount) {
        let totalPrice = this.calculateTotalPrice();
        if (totalPrice > 400) {
            totalPrice *= 0.9; // Apply 10% discount
        }
        console.log("Total price: $" + totalPrice);
        if (paymentAmount >= totalPrice) {
            let change = paymentAmount - totalPrice;
            console.log("Thank you for your purchase! Your change is $" + change.toFixed(2));
        } else {
            console.log("Sorry, you don't have enough money to purchase the items.");
        }
    }
};

// Test the cash register
cashRegister.addItem("Phone");
cashRegister.addItem("Smart TV");
cashRegister.addItem("Gaming Console");
console.log("Total price: $" + cashRegister.calculateTotalPrice());
cashRegister.pay(600);
