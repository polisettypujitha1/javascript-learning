//Class,Object,Constructor,Methods
/*
class Student {
    constructor(name,age,course) {
        this.name = name
        this.age = age
        this.course = course
    }
    displayDetails(){
        console.log("Name : ", this.name)
        console.log("Age : " , this.age)
        console.log("Course : " , this.course)
    }
}
    const student1 = new Student("Anu", 22, "JavaScript");
    const student2 = new Student("Ravi", 23, "Python");

student1.displayDetails();
student2.displayDetails();
*/


         //encapsulation

//1.1  Public fields

/*
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}

const emp1 = new Employee("Anu", 30000);

console.log(emp1.name);
console.log(emp1.salary);

emp1.salary = 40000;

console.log(emp1.salary);
*/

//Private fields (#)
/*
class Employee {
    #salary;

    constructor(name, salary) {
        this.name = name;
        this.#salary = salary;
    }

    displaySalary() {
        console.log("Salary:", this.#salary);
    }
}

const emp1 = new Employee("Anu", 30000);

console.log(emp1.name);
emp1.displaySalary();
*/

/*

class Employee {
     name 
    #salary
    constructor(name,salary) {
        this.name = name
        this.#salary = salary
    }

    displayDetails(){
        console.log("Employee Name: " , this.name)
        console.log("Employee Salary: ",this.#salary)
    }
     getSalary() {
    return this.#salary
}
    setSalary(newSalary) {
        if(newSalary > 0 ){
            this.#salary = newSalary
        }
        else {
            console.log("Invalid Salary")
        }
    }
}
employee = new Employee("Anu" , 40000)
employee.displayDetails()

//Next: Getter and Setter methods

*/




     //Inheritance
     /*
 class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    displayDetails() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }
}

class Manager extends Employee {
}
*/



//Super keyword
/*
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    displayDetails(){
        console.log("Name: " , this.name)
        console.log("Salary: " , this.salary)
        console.log("Department: " , this.department)
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        // Add super() here
        super(name,salary)
        this.department = department
        // Initialize department here
        
    }
}
const manager = new Manager("Ravi",600000,"HR")
manager.displayDetails()    */

          //Next topic: Method Overriding


/*
class Employee {
    constructor(name,salary){
        this.name = name
        this.salary = salary
    }
    displayDetails() {
        console.log("Name : " , this.name)
        console.log("Salary : " , this.salary)
    }

}

class Manager extends Employee {
    constructor(name,salary,department) {
        super(name,salary)
        this.department = department
    }

    displayDetails(){
        console.log("Name : " , this.name)
        console.log("Salary : " , this.salary)
        console.log("Department : ", this.department)
    }
}
const employee = new Employee("Anu" , 300000)
const manager = new Manager("Anu", 300000, "IT")

employee.displayDetails() 
manager.displayDetails()

*/






      //*      Task       *//
class Employee {
    name
    id
    #salary
    constructor (name,id,salary){
        this.name = name
        this.id = id
        this.#salary = salary
    }

    displayDetails(){
        console.log("Name : ",this.name)
        console.log("ID : " , this.id)
        console.log("Salary : ", this.#salary)
    }

    getSalary() {
        return this.#salary
    }

    setSalary(newSalary){
        if(newSalary > 0) {
            this.#salary = newSalary
        }
        else {
            console.log("Invalid Salary")
        }
    }


}

const employee1 = new Employee("Anu", 101, 30000);

employee1.displayDetails();

employee1.setSalary(35000);

console.log("Updated Salary:", employee1.getSalary());

class Manager extends Employee{
    constructor(name,id,salary,department) {
        super(name,id,salary)
        this.department = department
    }
    displayDetails() {
        console.log("Manager Name : ",this.name)
        console.log("Manager ID: " , this.id)
        console.log("Manager Salary:", this.getSalary());
        console.log("Department : " , this.department)
    }
}
const manager = new Manager("Ravi" , 102, 60000, "HR")
manager.displayDetails();

