import { NestFactory } from '@nestjs/core';

// Notice: don't import it from the '@configs/...'.
// It will not work, because of aliases start works only after this import
import './configs/ts-paths-fix-apply';

import { AppModule } from '@app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { getServiceConfig, ServiceConfigOptions } from '@configs/serviceconfig';

async function bootstrap(): Promise<void> {
  const serviceOptions: ServiceConfigOptions = getServiceConfig();
  const app = await NestFactory.create(AppModule);
  if (serviceOptions.apiDocsEnabled) {
    const config = new DocumentBuilder()
        .setTitle('happydogs backend')
        .setDescription('The happydogs API description')
        .setVersion('0.1')
        .addTag('happydogs')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(serviceOptions.apiPath, app, document);
  }

  await app.listen(serviceOptions.port);
}

// eslint-disable-next-line no-void
void bootstrap();
