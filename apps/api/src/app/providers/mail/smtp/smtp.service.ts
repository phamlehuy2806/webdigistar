import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class SmtpMailService {
  constructor(private readonly mailerService: MailerService) {}

  public sendEmail(body): Promise<void> {
    const output = `
      <p>Có email liên hệ mới</p>
      <h3>Chi tiết email</h3>
      <ul>
        <li>Tên người liên hệ: ${body.name}</li>
        <li>Công ty: ${body.company}</li>
        <li>Email: ${body.email}</li>
        <li>Phone: ${body.phone}</li>
      </ul>
      <h3>Tin nhắn</h3>
      <p>${body.message}</p>
    `;
    return this.mailerService
      .sendMail({
        to: 'nguyenbinhanltv@gmail.com',
        from: 'Contact <test@localhost>',
        subject: 'Testing Nest MailerModule ✔',
        text: 'welcome',
        html: output,
      });
  }
}
