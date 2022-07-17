function getFullName(person) {
    if (person.middleName)
        return "".concat(person.firstName, " ").concat(person.middleName, " ").concat(person.lastName);
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var johnDoe = {
    firstName: 'John',
    lastName: 'Doe'
};
var janeDoe = {
    firstName: 'Jane',
    middleName: 'K.',
    lastName: 'Doe',
    age: 26
};
console.log(getFullName(johnDoe));
console.log(getFullName(janeDoe));
