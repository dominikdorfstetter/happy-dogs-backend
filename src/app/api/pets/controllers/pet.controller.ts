import { ContactService } from '@app/api/contacts/services/contact.service';
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CreateContactDto } from '@app/api/contacts/dtos/create-contact.dto';
import { Observable } from 'rxjs';
import { ContactEntity } from '@app/api/contacts/entities';
import { UpdateContactDto } from '@app/api/contacts/dtos/update-contact.dto';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreatePetDto } from '@app/api/pets/dtos/create-pet.dto';
import { PetEntity } from '@app/api/pets/entities/pet.entity';
import { PetService } from '@app/api/pets/services/pet.service';
import { UpdatePetDto } from '@app/api/pets/dtos/update-pet.dto';

const CONTACT_PATH = ':uuid/contact/:contactUuid';

@Controller('pets')
export class PetController {

  constructor(private readonly contactService: ContactService,
                private readonly petService: PetService) {}

                @Post()
                @HttpCode(200)
  public create(@Body() createPetDto: CreatePetDto): Observable<PetEntity> {
    return this.petService.create(createPetDto);
  }

  @Get(':uuid')
  @HttpCode(200)
                public findOne(@Param() params: { uuid: string }): Observable<PetEntity | undefined> {
                  return this.petService.findOne(params.uuid);
                }

  @Put(':uuid')
  @HttpCode(200)
  public update(@Param() params: { uuid: string },
                       @Body() updatePetDto: UpdatePetDto): Observable<UpdateResult> {
    return this.petService.update({
      ...updatePetDto,
      uuid: params.uuid
    });
  }

  @Delete(':uuid')
  @HttpCode(200)
  public delete(
      @Param() params: { uuid: string }): Observable<DeleteResult> {
    return this.petService.delete(params.uuid);
  }

  // PET-CONTACTS

    @Post(':uuid/contact')
    @HttpCode(200)
  public createContact(@Body() createContactDto: CreateContactDto): Observable<ContactEntity> {
    return this.contactService.create(createContactDto);
  }

    @Get(CONTACT_PATH)
    @HttpCode(200)
    public findContact(
        @Param() params: { contactUuid: string }): Observable<ContactEntity | undefined> {
      return this.contactService.findOne(params.contactUuid);
    }

    @Put(CONTACT_PATH)
    @HttpCode(200)
    public updateContact(@Param() params: { contactUuid: string },
                         @Body() updateContactsDto: UpdateContactDto): Observable<UpdateResult> {
      return this.contactService.update({
        ...updateContactsDto,
        uuid: params.contactUuid
      });
    }

    @Delete(CONTACT_PATH)
    @HttpCode(200)
    public deleteContact(
        @Param() params: { contactUuid: string }): Observable<DeleteResult> {
      return this.contactService.delete(params.contactUuid);
    }
}

