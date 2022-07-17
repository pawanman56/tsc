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
