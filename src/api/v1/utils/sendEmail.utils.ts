import { createTransport } from 'nodemailer';

import dotenv from 'dotenv';
dotenv.config();

interface MailDetails {
  to: string;
  subject: string;
  text: string;
  html: string
}

export const sendEmail = ({ to, subject, text, html }: MailDetails) => {
  let mailTransporter = createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    logger: true,
    debug: true,
    // secureConnection: false,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailDetails = {
    from: process.env.NODEMAILER_USER,
    to,
    subject,
    text,
    html
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log('Error Occurs');
    } else {
      console.log('Email sent successfully');
    }
  });
};
