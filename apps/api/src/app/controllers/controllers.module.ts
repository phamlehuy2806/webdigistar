import { Module } from '@nestjs/common';
import { ContactController } from './contact/contact.controller';
import { SmtpMailService } from '../providers/mail/smtp/smtp.service';

@Module({
  controllers: [ContactController],
  providers: [SmtpMailService],
})
export class ControllersModule {}
