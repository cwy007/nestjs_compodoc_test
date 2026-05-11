import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AaaModule } from './aaa/aaa.module';
import { BbbModule } from './bbb/bbb.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AaaModule, BbbModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
