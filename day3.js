/*function welcome() {
    console.log("Welcome to JavaScript Learning!");
}
welcome();
welcome();
welcome();
*/
//Topic 3.2 Function Expression
/*
const sayHello = function (){
    console.log("Hello! I am learning JavaScript functions.");
}
sayHello();
sayHello();
*/

//Concept 3: Parameters and arguments
/*
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("pujitha");
greet("Aditya");
*/
/*
function introduce(name,city){
    console.log(`My name is ${name} and I live in ${city}`);

}
introduce("pujitha","Bangalore");
introduce("Aditya","Bangalore");

*/

//Concept 4: return vs console.log()
/*
function calculateTotal(price,quantity) {
 return price * quantity;

}
const bill = calculateTotal(50,4);
console.log(bill);

*/

/*
function celsiusToFahrenheit(celcius){
    return F = (celcius * 9/5)+32;
}
const Fahrenheit = celsiusToFahrenheit(37);
console.log(Fahrenheit);
*/

//Concept 5: Eligibility checker using functions
/*
function checkEligibility(age){
    if(age >= 18) {
        console.log("Eligible");
    }
    else{
        console.log("Not Eligible");
    }
}
checkEligibility(25);
checkEligibility(16);
*/
/*
function calculateGrade(marks) {
    if(marks >= 90 && marks <= 100) {
        return 'A';
    }
    else if(marks <= 89 && marks >= 75) {
        return 'B';
    }
    else if(marks <= 74 && marks >= 60) {
        return 'C';
    }
    else if(marks <= 59 && marks >= 35) {
        return 'D';
    }
    else{
        return 'Fail';
    }
}




const result = calculateGrade(95);
const result1 = calculateGrade(82);
const result2 = calculateGrade(65);
const result3 = calculateGrade(30);
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
*/

function addition(a,b){
    return a+b;
}
function subtraction(a,b){
    return a-b;
}
function multiplication(a,b){
    return a*b;
}
function division(a,b){
    if(b === 0) {
        return "Cannot divide by zero";
    }
    return a/b;
}

const res = addition(20,10);
const res1 = subtraction(20,10);
const res2 = multiplication(20,10);
const res3 = division(20,10);
const res4 = division(20,0);
console.log(res);
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
