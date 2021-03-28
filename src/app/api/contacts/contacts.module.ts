import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { services } from './services';
import { entities } from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature(entities),
  ],
  providers: [...services],
})
export class ContactsModule { }
