type alphanumeric = string | number;

function add(a:alphanumeric, b: alphanumeric) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
}

console.log(add('pawan', 'sunuwar'));

class NewCustomer {
    isCreditAllowed(): boolean {
        return true;
    }
}

class Supplier {
    isInShortList(): boolean {
        return true;
    }
}

type BusinessContact = NewCustomer | Supplier;

function signContract(contact: BusinessContact): string {
    let message: string;

    if (contact instanceof NewCustomer) {
        message = contact.isCreditAllowed() ? 'Sign a new contract' : 'Credit Issue';
    }

    if (contact instanceof Supplier) {
        message = contact.isInShortList() ? 'Sign a new contract' : 'Supply Issue';
    }

    return message;
}
