const nodemailer = require('nodemailer');
require('dotenv').config();

const sendVerificationEmail = (email, token) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Email Verification',
        html: `<p>Click <a href="http://localhost:5000/api/auth/verify-email?token=${token}">here</a> to verify your email.</p>`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Verification email sent: ' + info.response);
        }
    });
};

module.exports = sendVerificationEmail;
