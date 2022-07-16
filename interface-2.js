var format;
format = function (str, isUpper) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format('hi', true));
var lowerCase;
lowerCase = function (src) {
    return src.toLocaleLowerCase();
};
console.log(format('Hi', false));
