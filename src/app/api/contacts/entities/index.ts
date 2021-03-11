import { Type } from '@nestjs/common';
import { ContactEntity } from '@app/api/contacts/entities/contact.entity';

export * from './contact.entity';

export const entities: Type<any>[] = [
  ContactEntity,
];
