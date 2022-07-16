var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    User.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    User.prototype.describe = function () {
        return "Full name is ".concat(this.firstName, " ").concat(this.lastName);
    };
    return User;
}());
// class Employee extends User {
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        Employee.headCount++;
    }
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
    Employee.headCount = 0;
    return Employee;
}());
var john = new Employee('John', 'Doe', 'Web Developer');
var jane = new Employee('Jane', 'Doe', 'Web Developer');
// console.log(employee.getFullName());
// console.log(employee.describe());
console.log(Employee.headCount);
