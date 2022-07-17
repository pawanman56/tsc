function getRandomNumberElement(items: any[]): any {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let numbers = [1, 2, 8, 3, 0, 4, 5];
let colors = ['red', 'green', 'blue'];

console.log(getRandomNumberElement(numbers));
console.log(getRandomNumberElement(colors));
