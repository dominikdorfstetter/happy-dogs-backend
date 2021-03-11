import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { services } from './services';
import { controllers } from './controllers';
import { entities as userEntities } from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature(userEntities),
  ],
  controllers,
  providers: [...services],
})
export class UserModule {
}
