import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // 开启优雅退出：监听系统终止信号，主动安全关闭 TypeORM 等数据库连接释放端口
  app.enableShutdownHooks();

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
