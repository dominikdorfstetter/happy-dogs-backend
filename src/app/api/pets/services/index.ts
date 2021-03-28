import { Type } from '@nestjs/common';
import { PetService } from '@app/api/pets/services/pet.service';

export const services: Type<any>[] = [
  PetService
];
