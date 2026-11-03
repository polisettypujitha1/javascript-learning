/*
================================
DAY 1: JAVASCRIPT FUNDAMENTALS
================================
*/

// TOPIC 1: console.log()
// console.log("Hello, JavaScript!");
// console.log("I am learning Web Development");
// console.log(100);
// console.log("Pujitha");
// console.log("Bangalore");
// console.log("I am learning JavaScript for Web Development");

/*
--------------------------------
TOPIC 2: Variables using let
--------------------------------
*/

// let name = "Puja";
// let city = "Bangalore";

// console.log(name);
// console.log(city);

// const course = "JavaScript";
// console.log(course);

/*
--------------------------------
TOPIC 3: Let Vs Const
--------------------------------
*/

// let score = 100;
// console.log(score);
// score = 20;
// console.log(score);

// const country = "India";
// console.log(country);
// country = "Japan";
// console.log(country);

/*
--------------------------------
TOPIC 4: Data Types
--------------------------------
*/
/*
let Myname = "Pujitha";
let age = 23;
let isLearning = true;
console.log(Myname);
console.log(age);
console.log(isLearning);
*/

/*Topic 4.1 String
let myname = "Pujitha";
let nickName = 'puja';
console.log(myname);
console.log(nickName);   */

//Topic 4.2 Number
/*let Age = 23;
let score = 95.4;
console.log(Age);
console.log(score);
*/

//Topic 4.3 Boolean
/*let isLearning = true;
let isCompleted = false;
console.log(isLearning);
console.log(isCompleted);
*/

//Topic 4.4 typeof

/*
let Name = "Puja";
let age = 23;
let isLearning = true;

console.log(typeof Name);
console.log(typeof age);
console.log(typeof isLearning);
*/

//Topic 4.5 undefined
/*
let myName;
console.log(myName);
console.log(typeof myName);

myName = "Puja";
console.log(myName);
console.log(typeof myName);

//Topic 4.6 null
let number = null;
console.log(number);
console.log(typeof number);
*/

/*
--------------------------------
TOPIC 5:Type Conversion in JavaScript
--------------------------------
*/ 
//Topic  5.1 converting String to Number
/*
let num1 = "5";
let num2 = "4";
console.log(num1 + num2);

console.log(Number(num1) + Number(num2));

//Topic 5.2 converting Number to String

let a = 5;
let b = 6;
console.log(String(a) + String(b));

//Topic 5.3 Converting to Boolean
let name1 = "Puja";
let fullname = "";
let a1 = null;
let b1 = undefined;
let Number1 = 1;
let number2 = 0;
let isCompleted = "false";
let value = "0";
console.log(Boolean(name1));
console.log(Boolean(fullname));
console.log(Boolean(a1));
console.log(Boolean(b1));
console.log(Boolean(number1));
console.log(Boolean(number2));
console.log(Boolean(isCompleted));
console.log(Boolean(value));

/*
--------------------------------
TOPIC 6:Arithmetic Operators
--------------------------------
*/ 
// Topic 6.1: Addition

// let num1 = 20;
// let num2 = 7;
// console.log(num1 + num2);

// let num1 = 35;
// let num2 = 12;
// console.log(num1 - num2);

// let num1 = 25;
// let num2 = 4;
//console.log(num1 * num2);
//console.log(num1 / num2);
// 
// let num1 = 17;
// let num2 = 5;
// console.log(num1 % num2);
// let num1 = 3;
// let num2 = 4;
// console.log(num1 ** num2);


/*
--------------------------------
TOPIC 7: Comparison Operators
--------------------------------
*/

// Topic 7.1: Greater Than
// let a = 85;
// let b = 40;
// console.log(a>b);
// console.log(a>90);
// Topic 7.2: Less Than
// let age = 18;
// let requiredAge = 21;

// console.log(age < requiredAge);
// console.log(requiredAge < age);

// Topic 7.3: Greater Than or EqualTo
// let marks = 40;

// console.log(marks >= 40); 
// console.log(marks >= 50); 
// Topic 7.4: Less Than or EqualTo
// let score = 50;

// console.log(score <= 50); 
// console.log(score <= 40); 

//Topic 7.5: Strict Equality (===)
// console.log(10 === 10);
// console.log(10 === 5);
// console.log(10 === "10");

//Topic 7.6: Strict Inequality (!==)
// console.log(10 !== 5);    
// console.log(10 !== 10);   
// console.log(10 !== "10"); 

//Topic 8: Logical Operators:
//Topic 8.1: AND (&&)
 let age = 23;
 console.log(age >= 18 && age <= 30);


 //Topic 8.2: OR (||)
 let day = "Sunday";

console.log(day === "Sunday" || day === "Saturday");

//Topic 8.3: NOT (!)
let isRaining = false;

console.log(!isRaining);
