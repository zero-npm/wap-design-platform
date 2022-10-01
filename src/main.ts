import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
// 1.引入NestExpressApplication
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  // 2.加入到create
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public')); 

  /* 配置模板引擎，不用引入直接配置 */
  app.setBaseViewsDir('views');
  app.setViewEngine('ejs');

  await app.listen(3000);
}
bootstrap();