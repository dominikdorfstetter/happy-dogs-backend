import { Type } from '@nestjs/common';
import { PetEntity } from '@app/api/pets/entities/pet.entity';

export const entities: Type<any>[] = [
  PetEntity,
];
