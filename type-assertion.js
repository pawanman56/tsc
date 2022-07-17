function getNetPrice(price, discount, format) {
    var netPrice = price * (1 - discount);
    return format ? "$".concat(netPrice) : netPrice;
}
var netPrice = getNetPrice(100, 0.05, true);
console.log(netPrice);
// alternative type assertion
var anotherNetPrice = getNetPrice(100, 0.05, false);
console.log(anotherNetPrice);
