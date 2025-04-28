import Mailgen from "mailgen";
import nodemailer from "nodemailer";
import { ApiError } from "./api-error";

const sendMail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "defalut",
    product: {
      name: "IPOConnect Team",
      link: "https://mailgen.js/",
    },
  });

  const emailBody = mailGenerator.generate(options.mailGenContent);
  const emailText = mailGenerator.generatePlaintext(options.mailGenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASS,
    },
  });

  const mail = {
    from: "ipoconnect@gmail.com", // sender address
    to: options.email, // list of receivers
    subject: options.subject, // Subject line
    text: emailText, // plain text body
    html: emailBody, // html body
  };

  try {
    await transporter.sendMail(mail)
  } catch (error) {
    console.error("Email failed");

    throw new ApiError(400, "Email failed")
    
  }
};

const emailVerificationMailGenContent = (name, verificationUrl) => {
  return {
    body: {
      name: name,
      intro:
        "Welcome to IPOConnect web! We are very excited to have you on board",
      action: {
        instructions: "To get started with our web, please click here",
        button: {
          color: "#22BC66",
          text: "Verify your email",
          link: verificationUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help",
    },
  };
};

const forgotPasswordMailGenContent = (name, verificationUrl) => {
  return {
    body: {
      name: name,
      intro: "We have got a request to reset your password",
      action: {
        instructions: "To reset your password, please click here",
        button: {
          color: "#22BC66",
          text: "Reset password",
          link: verificationUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help",
    },
  };
};

// sendMail({
//     email: user.email,
//     subject: "",
//     mailGenContent: emailVerificationMailGenContent(
//         name,
//         ``
//     )
// })
