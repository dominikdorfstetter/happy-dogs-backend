import { Injectable } from '@nestjs/common';
import { BaseEntityService } from '@app/api/base/base-service.interface';
import { ContactEntity } from '@app/api/contacts/entities';
import { from, Observable } from 'rxjs';
import { CreateContactDto } from '@app/api/contacts/dtos/create-contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UpdateContactDto } from '@app/api/contacts/dtos/update-contact.dto';

@Injectable()
export class ContactService implements BaseEntityService<ContactEntity> {

  public constructor(
        @InjectRepository(ContactEntity)
        private readonly contactRepository: Repository<ContactEntity>,
  ) {}

  create(payload: CreateContactDto): Observable<ContactEntity> {
    return from(this.contactRepository.save(payload));
  }

  delete(uuid: string): Observable<DeleteResult> {
    return from(this.contactRepository.delete(uuid));
  }

  findAll(): Observable<ContactEntity[]> {
    return from(this.contactRepository.find());
  }

  findOne(uuid: string): Observable<ContactEntity | undefined> {
    return from(this.contactRepository.findOne({ uuid }));
  }

  update(payload: UpdateContactDto): Observable<UpdateResult> {
    const { uuid, address, website, phone, name, email } = payload;
    return from(this.contactRepository.createQueryBuilder()
        .update(ContactEntity)
        .set({
          website,
          phone,
          name,
          email,
          address
        })
        .where('UUID = :uuid', { uuid })
        .execute());
  }

}
