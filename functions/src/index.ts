import * as functions from 'firebase-functions';
import * as sgMail from '@sendgrid/mail';
import * as express from 'express';
import * as admin from 'firebase-admin';

const APP = express();
const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
const MY_MAIL = functions.config().sendgrid.targetmail;


sgMail.setApiKey(API_KEY);
admin.initializeApp(functions.config().firebase);
APP.use(express.json());


APP.post('/api/sendMail', (req, res) => {
    const msg = {
        to: `${MY_MAIL}`,
        from: 'lokomolo1@gmail.com',
        subject: 'From frontvision.co interested message',
        text: 'text',
        templateId: TEMPLATE_ID,
        dynamic_template_data: {
            phone: `${req.body.phone}`,
            name: `${req.body.name}`,
            message: `${req.body.message}`,
            mail: `${req.body.mail}`
        }
    };
    sgMail.send(msg)
        .then(() => {
            res.status(200).send()
        }, error => {
            res.status(500).send(error)
            if (error.response) {
                console.error(error.response.body)
            }
        });
})

export const sendGriD = functions.https.onRequest(APP)
export const helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});