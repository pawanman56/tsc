function getRandomNumberElement(items: any[]): any {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let numbers = [1, 2, 8, 3, 0, 4, 5];
let colors = ['red', 'green', 'blue'];

console.log(getRandomNumberElement(numbers));
console.log(getRandomNumberElement(colors));

function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let numArry = [1, 5, 7, 13];
let randomElm = getRandomElement<number>(numArry);

console.log(randomElm);
