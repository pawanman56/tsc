// type-casting using `as` keyword
let input1 = document.querySelector('input[type="text"]') as HTMLInputElement;

console.log(input1.value);

let inputText = (input1 as HTMLInputElement).value;
let el: HTMLElement;
el = new HTMLInputElement();

// type-casting using `<>` operator
let input2 = <HTMLInputElement>document.querySelector('input[type="text"]');

console.log(input2.value);
