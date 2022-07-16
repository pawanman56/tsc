var Mail = /** @class */ (function () {
    function Mail() {
    }
    Mail.prototype.later = function (email, after) {
        console.log("Send email to ".concat(email, " after ").concat(after, " ms."));
        return true;
    };
    Mail.prototype.send = function (email) {
        console.log("Send email to ".concat(email));
        return true;
    };
    Mail.prototype.queue = function (email) {
        console.log("Queue an email to ".concat(email));
        return true;
    };
    return Mail;
}());
var sendMailAfter = new Mail();
var sendMail = new Mail();
var queueMail = new Mail();
console.log(sendMailAfter.later('pawan@mail.com', 1000));
console.log(sendMail.send('pawan@mail.com'));
console.log(queueMail.queue('pawan@mail.com'));
