interface BusinessPartner {
    name: string,
    credit: number
}

interface Identity {
    id: number,
    name: string
}

interface Contact {
    email: string,
    phone: string
}

type OrgEmployee = Identity & Contact;
type Customer = BusinessPartner & Contact;

let e: OrgEmployee = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@mail.com',
    phone: '+977-981-1234567'
}

let c: Customer = {
    name: 'Jane Doe',
    credit: 120,
    email: 'john.doe@mail.com',
    phone: '+977-981-1234567'
}

console.log(e, c);
