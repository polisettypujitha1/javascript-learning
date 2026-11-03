/*let company = "Google";

function employeeDetails(){
    let role = "Software Developer";
    console.log(company);
    console.log(role);
}
employeeDetails();
console.log(company);
*/
/*

//Concept 2: Block scope
let age = 22;

if(age > 18){
    let message = "You are an Adult";
    console.log(message);
}
console.log(age);
*/

/*
let score = 80;

if (score >= 50) {
    let result = "Passed";
}

console.log(result);
*/

//Concept 3: Variable shadowing
/*
let name = "Pujitha";

function displayName() {
    let name = "Aditya";
    console.log(name);
}

displayName();

console.log(name);
*/

//Concept 4: Arrow functions
/*
let calculateSquare = (number) => number * number 
     

let res = calculateSquare(6);
console.log(res);
*/
/*
let multiply = (a,b) => a*b;
let res = multiply(5,4);
console.log(res);
*/

//Concept 5: Lexical scope
/*
function outerFunction() {
    let message = "Hello from outer function";

    function innerFunction() {
        console.log(message);
    }

    innerFunction();
}

outerFunction();
*/

//Concept 6: Function execution order
/*
function calculate() {
    console.log("Starting calculation");

    display();

    console.log("Calculation finished");
}

function display() {
    console.log("Displaying result");
}

console.log("Program started");

calculate();

console.log("Program ended");
*/

//Task


const Name = "pujitha";
function total(a,b,c){
    return a+b+c;
}
const res = total(95,92,98);

let avg = (m1,m2,m3) => (m1+m2+m3)/3;

const average = avg(95,92,98);
function grade(average){
    if(average >= 90){
        return 'A';
    }
    else if(average >= 75) {
        return 'B';
    }
    else if(average >= 60 ) {
        return'C';
    }
    else if(average >= 35 ) {
        return 'D';
    }
    else {
        return "Fail";
    }

}


//let average = avg(85,90,80);
const Grade = grade(average);
function studentReport(){

   console.log(`Student Name: ${Name}`);
   console.log(`Total Marks: ${res}`);
   console.log(`Average Marks: ${average}`);
    console.log(`Grade: ${Grade}`);
}
studentReport();
