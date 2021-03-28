import { PartialType } from '@nestjs/swagger';
import { CreateContactDto } from '@app/api/contacts/dtos/create-contact.dto';

export class UpdateContactDto extends PartialType(CreateContactDto) {
    uuid: string;
}
