interface PersonInterface {
    firstName: string,
    middleName?: string,
    lastName: string
}

function getFullName(person: PersonInterface) {
    if (person.middleName) return `${person.firstName} ${person.middleName} ${person.lastName}`;
    return `${person.firstName} ${person.lastName}`;
}

let johnDoe = {
    firstName: 'John',
    lastName: 'Doe'
};

let janeDoe = {
    firstName: 'Jane',
    middleName: 'K.',
    lastName: 'Doe',
    age: 26
};

console.log(getFullName(johnDoe));
console.log(getFullName(janeDoe));
