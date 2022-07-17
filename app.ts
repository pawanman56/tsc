import { EmailValidator } from './modules/EmailValidator';

let message: string = 'Hello World!';

// create h1 element
let heading = document.createElement('h1');
heading.textContent = message;

// use EmailValidator
let email = 'john.doe@testmail.com';
let emailValidator = new EmailValidator();
let res = emailValidator.isValid(email);

console.log(res);

// add h1 to document
document.body.appendChild(heading);
