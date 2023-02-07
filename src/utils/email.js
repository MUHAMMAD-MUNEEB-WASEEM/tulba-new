const nodemailer = require('nodemailer');
const keys = require('../config/keys');

const sendEmail = async options => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    // Use following settings if you are using Gmail
    // service: 'Gmail',
    // auth: {
    //   user: gmailUsername,
    //   pass: gmailPassword
    // }
    host: keys.emailHost,
    port: keys.emailPort,
    auth: {
      user: keys.emailUsername,
      pass: keys.emailPassword
    }
  });

  // 2) Define the email options
  const mailOptions = {
    form: 'Metrimony <info@metrimony.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html: 
  };

  // 3) Actually send the email
  await transporter.sendMail(mailOptions); 
};

module.exports = sendEmail;