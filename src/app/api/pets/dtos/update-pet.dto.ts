import { PartialType } from '@nestjs/swagger';
import { CreatePetDto } from '@app/api/pets/dtos/create-pet.dto';

export class UpdatePetDto extends PartialType(CreatePetDto) {
    uuid: string;
}
