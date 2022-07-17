class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    describe() {
        return `Full name is ${this.firstName} ${this.lastName}`;
    }
}
// class Employee extends User {
// class Employee {
/*constructor(
    firstName: string,
    lastName: string,
    private jobTitle: string
) {
    super(firstName, lastName);
}

describe(): string {
    return super.describe() + `. I'm a ${this.jobTitle}.`;
}*/
/*public static headCount: number = 0;

constructor(
    private firstName: string,
    private lastName: string,
    private jobTitle: string
) {
    Employee.headCount++;
}
}*/
// let john = new Employee('John', 'Doe', 'Web Developer');
// let jane = new Employee('Jane', 'Doe', 'Web Developer');
// console.log(employee.getFullName());
// console.log(employee.describe());
// console.log(Employee.headCount);
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement() {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}
class FullTimeEmployee extends Employee {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
class Contractor extends Employee {
    constructor(firstName, lastName, rate, hours) {
        super(firstName, lastName);
        this.rate = rate;
        this.hours = hours;
    }
    getSalary() {
        return this.rate * this.hours;
    }
}
let john = new FullTimeEmployee('John', 'Doe', 12000);
let jane = new Contractor('Jane', 'Doe', 100, 160);
console.log(john.compensationStatement());
console.log(jane.compensationStatement());
