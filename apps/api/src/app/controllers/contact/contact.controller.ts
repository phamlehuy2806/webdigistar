import { Controller, Post, Req } from '@nestjs/common';
import { SmtpMailService } from '../../providers/mail/smtp/smtp.service';

@Controller('contact')
export class ContactController {
  constructor(
    private mailerService: SmtpMailService
  ) {}

  @Post()
  sendEmail(@Req() req: Request): Promise<{error: string, message: string}> {
    return this.mailerService.sendEmail(req.body)
    .then(() => {
      return {
        error: null,
        message: "Gửi email thành công"
      }
    })
    .catch(() => {
      return {
        error: "Gửi email thất bại",
        message: null
      }
    })
  }
}
