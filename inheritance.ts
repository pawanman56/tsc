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

class Employee extends User {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string
    ) {
        super(firstName, lastName);
    }
}

let employee = new Employee('John', 'Doe', 'Web Develope');

console.log(employee.getFullName());
console.log(employee.describe());
