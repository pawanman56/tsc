function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}

let netPrice = getNetPrice(100, 0.05, true) as string;
console.log(netPrice);

// alternative type assertion
let anotherNetPrice = <number>getNetPrice(100, 0.05, false);
console.log(anotherNetPrice);
