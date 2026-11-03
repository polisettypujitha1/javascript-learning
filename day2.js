//Concept 1: Template literals
/*
let name = "pujitha";
let age = 23;
console.log(`my name is ${name} and ${age}`);
*/
/*
let product = "Laptop";
let price = 45000;
let quantity = 2;

console.log(`I bought ${quantity} ${product}s for ₹${price} each.`);
*/
/*
let product = "Notebook";
let price = 50;
let quantity = 3;

let total = price * quantity;

console.log(`Product: ${product}`);
console.log(`Price per item: ₹${price}`);
console.log(`Quantity: ${quantity}`);
console.log(`Total bill: ₹${total}`);
*/
//Loops

//for loop
/*
for(let i = 0;i < 5; i++) {
    console.log("Welcome to JavaScript Course");
}

for(let i = 1; i <= 10; i++) {
    console.log("Hello");
}
*/

//Reverse
/*
for(let i = 10;i >= 1; i--) {
    console.log(i);
}
let sum = 0;
for(let i = 1; i <= 10; i++) {
    sum = sum + i;
}
console.log(sum);
*/

/*
let Sum = 0
for(let i = 1;i <= 10; i++) {
    if(i % 2 === 0) {
        Sum = Sum+i;
    }
}

console.log(Sum);
*/

//Next concept: while loop
/*
let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}
*/

//Next: do...while loop
/*
let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 3);
*/

//Next exercise: break
/*
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
*/
//Next: continue
/*
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
*/
//task
/*
for(let k = 1;k <= 10; k++){
    if(k === 5) {
        continue;
    }
    if(k === 8) {
        break;
    }
    console.log(k);
}
*/

//Pattren
/*
for(let i = 1; i <= 3; i++) {
    for(let j =1;j <= i; j++) {
        process.stdout.write("*" + " ");
    }
    console.log();
}
*/
/*
for(let i = 1; i <= 4; i++) {
    for(let j = 1; j <= i; j++) {
        process.stdout.write(j + " ");
    }
    console.log();
}
*/
/*
for(let i = 4; i >= 1; i--) {
    for(let j = 1; j <= i; j++) {
        process.stdout.write(j + " ");
    }
    console.log();
}
console.log();
*/

/*
let product = 1;
for(let i = 1; i <= 5; i++) {
    product = product * i;
}
console.log(product);
*/
/*
let number = 123;
while(number > 0) {
    let digit = number % 10;
    console.log(digit);
    number = Math.floor(number / 10);
}

*/
/*
let n = 4567;

while(n > 0) {
    let digit = n % 10;
    console.log(digit);
    n = Math.floor(n /10);
}

*/

/*
//count Numbers

let Number = 45678;
let count = 0;
while(Number > 0) {
    let digit = Number % 10;
    count++;
    Number = Math.floor(Number / 10);
}
console.log(count);

*/

/*
//Sum

let n = 456;
let sum = 0;
while(n > 0) {
    let digit = n % 10;
    sum = sum + digit;
    n = Math.floor(n / 10);
}

console.log(sum);
*/

/*
//Reverse Number

let number = 1234;

let reverse = 0;
while(number > 0) {
    let rev = number % 10;
    reverse = reverse * 10 + rev;
    number = Math.floor(number / 10);
}
console.log(reverse);
*/

/*
let number = 7;
let n = number;
let rev = 0;
while(n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n /10); 
}
if(rev === number) {
    console.log(number , " is Palindrome");
}
else {
    console.log(number," is not palindrome");
}
*/

const numbers = [12, 45, 7, 89, 23, 56];
let large = numbers[0];
for(let i = 1; i < numbers.length; i++) {
    if(large < numbers[i]){
        large = numbers[i];
    }
}
console.log(large);