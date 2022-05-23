import { MailAdapter, SendMailData } from "../mall.adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "badc76a4714695",
    pass: "811305a56ab62d"
  }
});

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({subject, body }: SendMailData) {
        await transport.sendMail({
      from : 'Equipe Feedget <oi@feedget.com>',
      to: 'Jaqueline pires <piresjaqueline17@gmail.com>',
      subject,
      html: body,
    });
  }
}