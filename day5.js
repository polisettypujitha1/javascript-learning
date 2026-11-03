//Topic Array
/*const programmingLanguages = ["JavaScript","Python","Java","C","C++"];
console.log(programmingLanguages);
*/
//Concept 2: Accessing array elements
/*
console.log(programmingLanguages[0]);
console.log(programmingLanguages[1]);
console.log(programmingLanguages[2]);
*/
//Concept 3: Finding the length of an array
//console.log(programmingLanguages.length);

//Concept 4: Updating array elements
/*
const animals = ["Dog", "Cat", "Lion", "Tiger"];
animals[1] = "Elephant";
animals[animals.length-1] = "Horse";
console.log(animals);
*/



//Concept 5: Adding elements using push()
/*
const cities = ["Hyderabad", "Bangalore"];
cities.push("Chennai");
cities.push("Mumbai");
console.log(cities);

//cities.push("Chennai", "Mumbai");
*/

//Next exercise: pop()
/*
const subjects = ["JavaScript", "Python", "Java", "SQL"];

subjects.pop();
subjects.pop();

console.log(subjects);

*/

//Next concept: unshift()
/*
const numbers = [20, 30, 40];

numbers.unshift(10);

console.log(numbers);
*/
//Next concept: shift()
/*
const languages = ["JavaScript", "Python", "Java", "C++"];

languages.shift();
languages.shift();

console.log(languages);
*/


//Day 5 – Next concept: slice()
/*
const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(1, 4);

console.log(result);
console.log(numbers);
*/


//Next concept: splice()
/*const animals = ["Dog", "Cat", "Tiger"];

animals.splice(1, 0, "Elephant");

console.log(animals); //Hint: splice(start, deleteCount, newElement).
*/

//Array topic – includes()

const fruits = ["Apple", "Mango", "Banana", "Orange"];

console.log(fruits.includes("Mango"));
console.log(fruits.includes("Grapes"));

//indexOf()
const languages = ["JavaScript", "Python", "Java", "C++"];

console.log(languages.indexOf("JavaScript"));
console.log(languages.indexOf("Java"));
console.log(languages.indexOf("React"));


//Task

const shoppingCart = ["Shoes", "Shirt", "Watch"];
shoppingCart.push("Bag");   //shoes,shirt,watch,bag
shoppingCart.shift();     //shirt,watch,bag
shoppingCart.unshift("Mobile"); //Mobile,shirt,watch,bag
shoppingCart.splice(2,1,"Laptop"); 
console.log(shoppingCart);

const searchItem = "Shoes";

if (shoppingCart.includes(searchItem)) {
    console.log("Product found");
    console.log("Position:", shoppingCart.indexOf(searchItem));
} else {
    console.log("Product not found");
}
const removeItem = "Shirt";
const index = shoppingCart.indexOf(removeItem);
if(index !== -1) {
    shoppingCart.splice(index,1);
    console.log("Product Removed Successfully");
    
}
else {
    console.log("Product not found");
}
console.log("Updated Cart: ", shoppingCart);
//const prices = [1200,2500,800,1500];
const prices = [450, 1200, 800, 250, 1500];

const total = prices[0]+prices[1]+prices[2]+prices[3]+prices[4];
console.log(total);
console.log(prices.length);
let high = prices[0];

if(high < prices[1]) {
    high = prices[1];
}
if(high < prices[2]){
    high = prices[2];
}
if(high < prices[3]){
    high = prices[3];
}

if(high < prices[4]){
    high = prices[4];
}

console.log("Highest: ", high);

let low = prices[0];
if(low > prices[1]) {
low = prices[1];
}
if(low > prices[2]) {
    low =prices[2];
}
if(low > prices[3]) {
    low =  prices[3];
}
if(low > prices[4]){
    low = prices[4];
}
console.log("Lowest: ",low);
