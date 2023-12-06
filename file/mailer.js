require('dotenv').config();

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

var mailOptions = {
    from: 'obaze.omotii@gmail.com',
    to: 'martinoba01@gmail.com',
    subject: 'Email From My Node App',
    text: 'Wow.. it is so cool and the environment variable is working'
};

transporter.sendMail(mailOptions)
    .then(function(response){
        console.log('Mail Sent, response:', response);
    })
    .catch(function(error){
        console.log('Error: ', error);
    });