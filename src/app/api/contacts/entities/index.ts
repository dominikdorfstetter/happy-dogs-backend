import { Type } from '@nestjs/common';
import { ContactEntity } from '@app/api/contacts/entities/contact.entity';
import { AddressEntity } from '@app/api/contacts/entities/address.entity';

export * from './contact.entity';

export const entities: Type[] = [
  ContactEntity, AddressEntity
];
