const nodemailer = require("nodemailer");
const { Readable } = require("stream");
require("dotenv").config({ path: __dirname + "/.env" });

const sendMailNormal = async (options) => {
  console.log(options);
  try {
    // 1) Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    // 2) Define the email options
    const message = {
      from: "ABC Company <plusaigaurav@gmail.com>",
      to: options.email,
      subject: options.subject,
      text: options.message,
    };

    // 3) Actually send the email
    await transporter.sendMail(message);
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const sendMailPayMent = async (options, file) => {
  try {
    // 1) Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    // 2) Define the email options
    const message = {
      from: "A Plus Pathshala <apluspathshala@gmail.com>",
      to: options.email,
      subject: options.subject,
      text: options.message,
    };
    // 3) Add attachment if file is provided
    if (file) {
      const readableStream = new Readable();
      readableStream.push(file.buffer);
      readableStream.push(null);

      const attachment = {
        filename: file.originalname,
        content: readableStream,
      };

      message.attachments = [attachment];
    }

    // 3) Actually send the email
    await transporter.sendMail(message);
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

//export only sendMail function
module.exports = { sendMailNormal, sendMailPayMent };
