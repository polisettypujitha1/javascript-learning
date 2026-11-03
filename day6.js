/*
const fruits = ["Apple", "Mango", "Orange","Banana", "Grapes"];
fruits.forEach(function(fruit,index){
    console.log(index,fruit);
});

*/
/*
const numbers = [10, 20, 30, 40, 50];
let sum = 0;
numbers.forEach(function(num){
    sum = sum + num;
});
console.log(sum);
*/

/*
const numbers = [12, 7, 20, 15, 8, 33, 40];
numbers.forEach(function(num) {
    if(num % 2 == 0) {
        console.log(num);
    }
});

*/

//Concept 2: map()
/*

const prices = [100, 200, 300, 400, 500];

const newPrices = prices.map(function(price){
    return price+50;
});
console.log(newPrices);
*/
/*
const numbers = [2, 3, 4, 5, 6];
const squareval = numbers.map(function(num){
    return num * num;
});
console.log(squareval);
*/
/*
const students = [
    { name: "Rahul", marks: 85 },
    { name: "Priya", marks: 92 },
    { name: "Arun", marks: 78 },
    { name: "Sneha", marks: 95 }
];

const names = students.map(function(student){
    return student.name;

})
console.log(names);
*/


//Next concept: filter()
/*
const numbers = [12, 7, 20, 15, 8, 33, 40];

const num = numbers.filter(function(number){
    return number > 15;
})
console.log(num);
*/
/*
const students = [
    { name: "Rahul", marks: 85 },
    { name: "Priya", marks: 32 },
    { name: "Arun", marks: 78 },
    { name: "Sneha", marks: 25 },
    { name: "Kiran", marks: 65 }
];

const score = students.filter(function(student){
    return student.marks >= 50;
})
console.log(score);
*/

/*
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 },
    { name: "Headphones", price: 2000 }
];

const newProductList = products.filter(function(product){
    return product.price < 5000;
})
console.log(newProductList);
*/

//Concept 4: find()

/*
const students = [
    { name: "Rahul", marks: 85 },
    { name: "Priya", marks: 32 },
    { name: "Arun", marks: 78 },
    { name: "Sneha", marks: 25 },
    { name: "Kiran", marks: 65 }
];

const newList = students.find(function(student){
    return student.marks > 70;
})
console.log(newList);
*/
/*
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
];
const productList = products.find(function(product){
    return product.name === "Keyboard";
})
console.log(productList);
*/

//Some()
/*
const students = [
    { name: "Rahul", marks: 35 },
    { name: "Priya", marks: 42 },
    { name: "Arun", marks: 28 },
    { name: "Sneha", marks: 65 }
];

const avail = students.some(function(student){
    return student.marks >= 60;
})
console.log(avail)

*/
/*
const products = [
    { name: "Laptop", stock: 0 },
    { name: "Mouse", stock: 0 },
    { name: "Keyboard", stock: 5 },
    { name: "Monitor", stock: 0 }
];

const newp = products.some(function(product){
    return product.stock >= 1;
})
console.log(newp);
*/


//reduce 
/*
const prices = [100, 250, 150, 300, 200];
const res = prices.reduce(function(total,price){
 return total + price
},0)
console.log(res);
*/
/*
const numbers = [45, 12, 89, 34, 67, 23];
const result = numbers.reduce(function(great,num){
    return great < num ? num:great
})
console.log(result)
*/
/*
const students = [
    { name: "Rahul", marks: 85 },
    { name: "Priya", marks: 92 },
    { name: "Arun", marks: 78 },
    { name: "Sneha", marks: 95 }
];

const result = students.reduce(function(total,student){
    return total + student.marks/4
},0)
console.log(result);
*/
/*
const products = [
    { name: "Laptop", price: 50000, quantity: 2 },
    { name: "Mouse", price: 500, quantity: 5 },
    { name: "Keyboard", price: 1500, quantity: 3 }
];
const res = products.reduce(function(total,product){
    return total + ( product.price * product.quantity)
},0)
console.log(res)
*/
/*
function multiply(a,b,callback){
    callback(a * b)
}
function showResult(result) {
    
    console.log("Result: " , result)
}

multiply(5, 4, showResult);
*/

//
/*
const prices = [450,1200,800,250,1500];

const total = prices.reduce(function(res,price){
      return res + price
},0)
console.log(total)

const highest = prices.reduce(function(high,price){
    return high < price ? price : high
},prices[0])
console.log(highest)

const lowest =prices.reduce(function(low,price){
    return low > price ? price : low
},prices[0])
console.log(lowest)
*/

/*
const prices = [450,1200,800,250,1500];

let sum = 0
prices.forEach(function(price){
    return sum = sum + price
})
console.log(sum)

high = prices[0]
prices.forEach(function(price){
    if(price > high) {
        high = price
    }
})
console.log(high)

low = prices[0]
prices.forEach(function(price){
    if(price < low) {
        low = price
    }
})
console.log(low)
*/
/*
const marks = [45, 72, 38, 90, 55, 29, 81];
const result = marks.filter(function(mark){
    return mark > 50
})
console.log(result)

const res = marks.some(function(mark){
    return mark >= 90
})
console.log(res)

const total = marks.reduce(function(sum,mark){
    return sum + mark
},0)
console.log(total)
*/

/*
const numbers = [10, 20, 30, 40];
function print(number,index) {
    console.log(index, " : ",number)
}
numbers.forEach(print)

*/
/*
const numbers = [10, 20, 30, 40];
numbers.forEach((number,index) => {
    console.log(index, " : ",number)
})*/

/*const numbers = [25, 30, 35];
const num = numbers.filter((number) => {
      return number > 20

})
console.log(num)
*/

//Next exercise: Use map() with an arrow function
/*
const numbers = [2, 3, 4, 5];
const squares = numbers.map((number) => {
    return number * number
})
console.log(squares)
*/


//use reduce
const prices = [100, 200, 300, 400];
const total = prices.reduce((sum,price) => sum + price)

console.log(total)

const numbers = [10, 15, 20, 25, 30];

const result = numbers.filter(number => number >= 20);

console.log(result);



const students = [
    { name: "Ravi", marks: 85 },
    { name: "Priya", marks: 45 },
    { name: "Kiran", marks: 75 },
    { name: "Anu", marks: 35 }
];

const res = students.filter((student) => student.marks >= 50)
console.log(res)