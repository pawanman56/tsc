interface Mailable {
    send(email: string): boolean,
    queue(email: string): boolean
}

interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean
}

class Mail implements FutureMailable {
    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} after ${after} ms.`);
        return true;
    }

    send(email: string): boolean {
        console.log(`Send email to ${email}`);
        return true;
    }

    queue(email: string): boolean {
        console.log(`Queue an email to ${email}`);
        return true;
    }
}

let sendMailAfter = new Mail();
let sendMail = new Mail();
let queueMail = new Mail();

console.log(sendMailAfter.later('pawan@mail.com', 1000));
console.log(sendMail.send('pawan@mail.com'));
console.log(queueMail.queue('pawan@mail.com'));
