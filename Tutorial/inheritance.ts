class User {
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    describe(): string {
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

abstract class Employee {
    constructor(private firstName: string, private lastName: string) {}

    abstract getSalary(): number

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}

class FullTimeEmployee extends Employee {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }

    getSalary(): number {
        return this.salary;
    }
}

class Contractor extends Employee {
    constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
        super(firstName, lastName);
    }

    getSalary(): number {
        return this.rate * this.hours;
    }
}

let john = new FullTimeEmployee('John', 'Doe', 12000);
let jane = new Contractor('Jane', 'Doe', 100, 160);

console.log(john.compensationStatement());
console.log(jane.compensationStatement());
