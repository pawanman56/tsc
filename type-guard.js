function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
}
console.log(add('pawan', 'sunuwar'));
var NewCustomer = /** @class */ (function () {
    function NewCustomer() {
    }
    NewCustomer.prototype.isCreditAllowed = function () {
        return true;
    };
    return NewCustomer;
}());
var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    Supplier.prototype.isInShortList = function () {
        return true;
    };
    return Supplier;
}());
function signContract(contact) {
    var message;
    /*if (contact instanceof NewCustomer) {
        message = contact.isCreditAllowed() ? 'Sign a new contract' : 'Credit Issue';
    }

    if (contact instanceof Supplier) {
        message = contact.isInShortList() ? 'Sign a new contract' : 'Supply Issue';
    }*/
    if ('isCreditAllowed' in contact) {
        message = contact.isCreditAllowed() ? 'Sign a new contract' : 'Credit Issue';
    }
    else {
        message = contact.isInShortList() ? 'Sign a new contract' : 'Supply Issue';
    }
    return message;
}
