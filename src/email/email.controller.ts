import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
import { RedisService } from 'src/redis/redis.service';

@Controller('email')
export class EmailController {
  constructor(
    private readonly emailService: EmailService,
    private readonly redisService: RedisService,
  ) { }

  @Get('code')
  async sendEmailCode(@Query('address') address: string) {
    const code = Math.floor(Math.random() * 900000 + 100000);

    await this.redisService.set(`captcha_${address}`, code, 5 * 60);

    await this.emailService.sendEmail(
      address,
      '验证码邮件',
      `<p>您的验证码是：<b>${code}</b>，有效期5分钟，请勿泄露给他人！</p>`,
    );

    console.log(`验证码已发送到${address}，请注意查收！`);
    return {
      message: '验证码已发送，请注意查收！',
      code,
    };
  }

  @Post()
  create(@Body() createEmailDto: CreateEmailDto) {
    return this.emailService.create(createEmailDto);
  }

  @Get()
  findAll() {
    return this.emailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmailDto: UpdateEmailDto) {
    return this.emailService.update(+id, updateEmailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emailService.remove(+id);
  }
}
