import { Type } from '@nestjs/common';
import { ContactService } from '@app/api/contacts/services/contact.service';

export const services: Type<any>[] = [
  ContactService
];
