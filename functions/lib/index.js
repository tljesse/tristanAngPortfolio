"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
admin.initializeApp();
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);
exports.sendContactMessage = functions.database.ref('/messages/{pushKey}').onWrite((event) => {
    const snapshot = event.data;
    // Only send email for new messages.
    if (snapshot.previous.val() || !snapshot.val().name) {
        return;
    }
    const val = snapshot.val();
    const mailOptions = {
        to: 'tristanljesse@gmail.com',
        subject: `Information Request from ${val.name}`,
        html: val.html
    };
    return mailTransport.sendMail(mailOptions).then(() => {
        return; // console.log('Mail sent to: tristanljesse@gmail.com');
    });
});
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
//# sourceMappingURL=index.js.map