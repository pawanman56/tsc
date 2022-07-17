var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function getRandomNumberElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var numbers = [1, 2, 8, 3, 0, 4, 5];
var colors = ['red', 'green', 'blue'];
console.log(getRandomNumberElement(numbers));
console.log(getRandomNumberElement(colors));
function getRandomElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var numArry = [1, 5, 7, 13];
var randomElm = getRandomElement(numArry);
console.log(randomElm);
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var res = merge({ name: 'John Doe' }, { position: 'Web Developer' });
console.log(res);
