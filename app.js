const express = require ('express');
const app = express();
const ejs = require ('ejs');
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();

const path = require("path");
let port = process.env.PORT;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

if(app.get("env")==="production"){
  const enforce = require("express-sslify");
  app.use(enforce.HTTPS({trustProtoHeader: true}));
}

app.get('/', (req, res)=>{
    res.render('home');
});

app.get('/about', (req, res)=>{
    res.render('about');
});

app.get('/gallery', (req, res)=>{
    res.render('gallery');
});

app.get('/contact', (req, res)=>{
    res.render('contact');
});

app.get('/contactsuccess', (req, res)=>{
    res.render('contactsuccess');
});

app.post("/contact", (req, res)=>{
    async function main() {
        // create reusable transporter object using the default SMTP transport
        const smtpHost = process.env.SMTP_HOST;
        const smtpPort = process.env.SMTP_PORT;
        let transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: false, // true for 465, false for other ports
          auth: {
            user: process.env.USER_NAME, // SMTP user Name
            pass:process.env.USER_PWD // SMTP password
          },
        });
      
        const emailReceivers = process.env.EMAIL_RECEIVERS;

        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: req.body.email, // sender address
          to: emailReceivers, // list of receivers
          subject: req.body.subject, // Subject line
          text: req.body.message, // plain text body
        //   html: "<b>Hello world?</b>", // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      
        // Preview only available when sending through an Ethereal account
        // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      }
      
    main().catch(console.error);
    res.redirect("/contactsuccess");
});

if (port == null || port == "") {
  port = 3000;
}

app.listen(port, (req, res)=>{
    console.log(`This apllication is listening on port ${port}`);
});