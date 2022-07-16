class Person {
    get age() {
        return this._age;
    }
    set age(value) {
        if (value <= 0 || value >= 100)
            throw new Error('The age is invalid');
        this._age = value;
    }
    getFullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}
let person = new Person();
person.age = 10;
console.log(person.age);
