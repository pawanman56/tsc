import { StringValidator } from './Validator';

class ZipCodeValidator implements StringValidator {
    isValid(s: string): boolean {
        const numberRegex = /^[0-9]+$/;
        return s.length === 5 && numberRegex.test(s);
    }
}

export { ZipCodeValidator };
