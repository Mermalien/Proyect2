const {MAILJET_PUBLIC_KEY, MAILJET_SECRET_KEY, SENDER_EMAIL, SENDER_NAME} = process.env;

const mailjet = require("node-mailjet").connect(MAILJET_PUBLIC_KEY, MAILJET_SECRET_KEY);

const sendMail = (subject, content, recipient) => {
    mailjet.post("send").request({
        FromEmail: SENDER_EMAIL,
        FromName: SENDER_NAME,
        Subject: subject,
        "Html-part": content,
        Recipients: [{Email: recipient}]
    });
};

module.exports = sendMail;