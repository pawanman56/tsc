interface Json {
    toJson(): string
}

class Person2 implements Json {
    constructor( private firstName: string, private lastName: string) {}

    toJson(): string {
        return JSON.stringify(this);
    }
}

let newPerson = new Person2('John', 'Doe');

console.log(newPerson.toJson());
