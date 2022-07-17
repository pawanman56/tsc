function getRandomNumberElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var numbers = [1, 2, 8, 3, 0, 4, 5];
var colors = ['red', 'green', 'blue'];
console.log(getRandomNumberElement(numbers));
console.log(getRandomNumberElement(colors));
