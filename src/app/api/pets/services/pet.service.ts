import { Injectable } from '@nestjs/common';
import { BaseEntityService } from '@app/api/base/base-service.interface';
import { from, Observable } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { PetEntity } from '@app/api/pets/entities/pet.entity';
import { CreatePetDto } from '@app/api/pets/dtos/create-pet.dto';
import { UpdatePetDto } from '@app/api/pets/dtos/update-pet.dto';

@Injectable()
export class PetService implements BaseEntityService<PetEntity> {

  public constructor(
        @InjectRepository(PetEntity)
        private readonly petRepository: Repository<PetEntity>,
  ) {}

  create(payload: CreatePetDto): Observable<PetEntity> {
    return from(this.petRepository.save(payload));
  }

  delete(uuid: string): Observable<DeleteResult> {
    return from(this.petRepository.delete(uuid));
  }

  findAll(): Observable<PetEntity[]> {
    return from(this.petRepository.find());
  }

  findOne(uuid: string): Observable<PetEntity | undefined> {
    return from(this.petRepository.findOne({ uuid }));
  }

  update(payload: UpdatePetDto): Observable<UpdateResult> {
    const { name, animaldataRegNumber, birthDate, documents, vet } = payload;
    return from(this.petRepository.createQueryBuilder()
        .update(PetEntity)
        .set({
          name,
          animaldataRegNumber,
          birthDate,
          documents,
          vet
        })
        .where('UUID = :uuid', { uuid })
        .execute());
  }

}
