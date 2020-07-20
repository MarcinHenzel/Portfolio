import * as functions from 'firebase-functions';

import * as sgMail from '@sendgrid/mail';

const API_KEY = functions.config().sendgrid.key;
sgMail.setApiKey(API_KEY);
const TEMPLATE_ID = functions.config().sendgrid.template; //todo
const MY_MAIL = functions.config().sendgrid.targetmail;
export const sendMail = functions.https.onRequest((request, response) => {
    const msg = {
        to: `${MY_MAIL}`,
        from: 'test@example.com',
        subject: 'From frontvision.co interested message',
        text: 'text',
        templateId: TEMPLATE_ID,
        dynamic_template_data: {
            phone: '111222333',
            name: "Maciek Lukaszczyk",
            message: "smierdzisz",
            mail: "fakemail@dsa"
        }
    };
    return sgMail.send(msg);
})
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});


// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
