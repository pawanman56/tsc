class Person {
    private _age: number;
    private _firstName: string;
    private _lastName: string;

    public get age() {
        return this._age;
    }

    public set age(value: number) {
        if (value <= 0 || value >= 100) throw new Error('The age is invalid');

        this._age = value;
    }

    public getFullName(): string {
        return `${ this._firstName } ${ this._lastName }`;
    }
}

let person = new Person();
person.age = 1000;

console.log(person.age);
