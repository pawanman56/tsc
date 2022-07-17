import { EmailValidator } from './modules/EmailValidator';
import ZipCodeValidator from './modules/ZipCodeValidator';

let message: string = 'Hello World!';

// create h1 element
let heading = document.createElement('h1');
heading.textContent = message;

// use EmailValidator
let email = 'john.doe@testmail.com';
let emailValidator = new EmailValidator();
let res = emailValidator.isValid(email);

// use ZipCodeValidator
let zipValidator = new ZipCodeValidator();
let zipRes = zipValidator.isValid('44660');

console.log(res);
console.log(zipRes);

// add h1 to document
document.body.appendChild(heading);
