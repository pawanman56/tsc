function merge<A extends object, B extends object>(obj1: A, obj2: B) {
    return {
        ...obj1,
        ...obj2
    };
}

let result = merge(
    { name: 'John Doe' },
    { age: 25 }
);

console.log(result);

function props<C, D extends keyof C>(obj: C, key: D) {
    return obj[key];
}

let str = props({ name: 'John Doe'}, 'name');
console.log(str);
