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
class Employee {
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

    public static headCount: number = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string
    ) {
        Employee.headCount++;
    }
}

let john = new Employee('John', 'Doe', 'Web Developer');
let jane = new Employee('Jane', 'Doe', 'Web Developer');

// console.log(employee.getFullName());
// console.log(employee.describe());

console.log(Employee.headCount);
