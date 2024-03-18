import nodemailer from "nodemailer";
import handlebars from "handlebars";
import { emailTempalte } from "./email_template/forgotpass";
export async function sendMail({ to, name, subject, body }) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.log(error);
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}

export function compileEmailTemplate(email, url) {
  const template = handlebars.compile(emailTempalte);
  const htmlBody = template({ email, url });
  return htmlBody;
}
