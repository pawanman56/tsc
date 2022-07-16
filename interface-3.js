var Person2 = /** @class */ (function () {
    function Person2(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person2.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    return Person2;
}());
var newPerson = new Person2('John', 'Doe');
console.log(newPerson.toJson());
