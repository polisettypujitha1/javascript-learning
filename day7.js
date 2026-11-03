//    Concept 1 — JavaScript Objects  //
/*
const student = {
    name : "Anu",
    age : 22,
    course : "JavaScript",
    marks : 85,
    isPassed : true
}

console.log(student)
console.log(student.name)
console.log(student.marks)
student.marks = 95
console.log(student.marks)
student.city = "Hyderabad"
console.log(student)
*/



             //Concept 2 — Object Methods//
/*
const employee = {
    name : "Anu",
    role : "Software Developer",
    salary : 30000 ,
    displayDetails(){
        console.log("Employee Name: ",this.name)
        console.log("Role: ", this.role)
        console.log("salary: ",this.salary)
    }
    
}                                   
employee.displayDetails()

*/
                 //Concept 3 — Dot Notation vs Bracket Notation
                 /*
const employee = {
    name: "Ravi",
    role: "Developer",
    salary: 25000
};

const key = "role";

console.log(employee.key);
console.log(employee[key]);
*/

          //Next concept — Nested Objects
/*
const employee = {
    name: "Anu",
    role: "Developer",

    address: {
        city: "Hyderabad",
        state: "Telangana",
        pincode: 500001
    }
};

//console.log(employee.address.city);
//console.log(employee.address.state);
console.log(employee.name)
console.log(employee.address.city)
console.log(employee.address.pincode)


*/

           //Concept 4 — Arrays of Objects
/*
const employees = [
    { id: 1, name: "Anu", role: "Developer", salary: 30000 },
    { id: 2, name: "Ravi", role: "Tester", salary: 25000 },
    { id: 3, name: "Priya", role: "Designer", salary: 35000 }
];

for(let i = 0; i <= 2; i++) {
    console.log(employees[i].name


    )
}

console.log(employees[1].salary)
employees[2].salary = 40000
console.log(employees)  */

     //Object References

     /*
const employee1 = {
    name: "Anu",
    salary: 30000
};

const employee2 = employee1;

employee2.salary = 40000;

console.log(employee1.salary);
console.log(employee2.salary);
*/

         //Next concept — Object Destructuring
/*
const employee = {
    id: 101,
    name: "Priya",
    department: "IT",
    salary: 40000
};  

const {name,salary} = employee
console.log(name)
console.log(salary)

*/
/*
const employee = {
    name: "Ravi",
    role: "Tester",
    salary: 35000
};
const {name : employeeName} = employee
const {salary : employeeSalary} = employee
console.log(employeeName)
console.log(employeeSalary)
const {department = "Default Value"} =employee
console.log(department)    */



       //Next concept — Array Destructuring
/*
const employeeDetails = ["Anu", 23, "Developer", 30000];

const [first,second,third,four] = employeeDetails 
console.log(first)
console.log(second)
console.log(third)
console.log(four)
*/

//Next concept — Skipping array elements
/*
const employeeDetails = ["Anu", 23, "Developer", 30000];

const [first, , four] = employeeDetails
console.log(first)
console.log(four)
*/   

      //Concept 8 — Spread Operator (...)

      /*
const employee = {
    id: 101,
    name: "Priya",
    role: "Tester",
    salary: 25000
};

const employeeCopy = {...employee}
const updatedEmployee = {...employee,salary : 35000,department: "Testing"}
console.log(employee)
console.log(updatedEmployee)
console.log(employeeCopy)

*/

//Next exercise — Spread with arrays
/*
const employees = ["Anu", "Ravi", "Priya"];
const employeesCopy = [...employees]
const updatedemployees = [...employees,"Kiran"]
console.log(employeesCopy)
console.log(updatedemployees)
*/

            //Next concept — Rest Parameters (...)

/*
function addEmployee(... name) {
   console.log(name)
   console.log(name.length)
   
}
 addEmployee("Anu", "Ravi", "Priya", "Kiran");

*/

         //Next exercise — Rest parameters with calculation

/*
    function calculateSalary(...salary){
        const total = salary.reduce((sum,salary) => {
        return sum + salary
    },0)
        console.log("Number Of Employees: ", salary.length)
        
        console.log(total)

    }
    calculateSalary(25000, 30000, 35000, 40000);
     
    
*/

           //Next concept — Default Parameters
/*
function createEmployee(name = "Unknown",role = "Not Assigned"){
    console.log(name)
    console.log(role)

}
    createEmployee("Anu", "Developer");
    createEmployee();
    */



   // Next concept — Optional Chaining (?.)

/*
   const employee = {
    name: "Anu",
    address: null
};

console.log(employee.address?.city);
console.log(employee.address.city);
*/

          //Next concept — Nullish Coalescing (??)


//Task

const employee = {
    id :101,
    name: "puja",
    role : "Associate Software engineer",
    salary : 400000,
    department : "Backend"

}

function displayEmployee(employee) {
    const {id,name,role,salary,department} = employee
    console.log(id)
    console.log(name)
    console.log(role)
    console.log(salary)
    console.log(department)
}
displayEmployee(employee);

function updateEmployee(employee, newSalary) {
    return {
        ... employee,
        salary : newSalary
    }
}
const updatedEmployee = updateEmployee(employee, 500000);

displayEmployee(updatedEmployee);


