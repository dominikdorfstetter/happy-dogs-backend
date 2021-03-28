import { Type } from '@nestjs/common';
import { PetController } from '@app/api/pets/controllers/pet.controller';

export const controllers: Type<any>[] = [
  PetController
];
