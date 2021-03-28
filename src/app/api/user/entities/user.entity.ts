import { Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { AuditEntity } from '@app/api/base/audit.entity';
import { List } from 'immutable';
import { PetEntity } from '@app/api/pets/entities/pet.entity';

@Entity({
  name: 'APP_USER',
  synchronize: true
})
export class UserEntity extends AuditEntity {

  @PrimaryColumn({
    name: 'UUID',
  })
  public uuid!: string;

  @OneToMany(
    () => PetEntity,
    pet => pet.uuid,
    {
      eager: false,
      nullable: true,
      cascade: true
    })
  public pets?: Promise<List<PetEntity>>;



}
