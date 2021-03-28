import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from '@app/api/base/base.entity';
import { AddressEntity } from '@app/api/contacts/entities/address.entity';
import { PetEntity } from '@app/api/pets/entities/pet.entity';
import { List } from 'immutable';

/**
 * @author: Dominik Dorfstetter
 * Contact entity
 */
@Entity({
  name: 'CONTACTS',
  synchronize: true
})
export class ContactEntity extends BaseEntity {

    @Column({
      name: 'NAME',
      nullable: false,
      type: 'text'
    })
    public name!: string;

    @Column({
      name: 'PHONE',
      nullable: true,
      type: 'text'
    })
    public phone?: string;

    @Column({
      name: 'WEBSITE',
      nullable: true,
      type: 'text'
    })
    public website?: string;

    @Column({
      name: 'EMAIL',
      nullable: false,
      type: 'text'
    })
    public email!: string;

    @OneToOne(
      () => AddressEntity,
      address => address.contact,
      {
        eager: true,
        cascade: true,
        nullable: true
      }
    )
    @JoinColumn({
      name: 'ADDRESS_UUID',
    })
    public address?: AddressEntity;

    @OneToMany(() => PetEntity,
               pet => pet.uuid,
               {
                 nullable: true,
                 eager: false,
                 cascade: true
               })
    @JoinTable()
    public pets?: Promise<List<PetEntity>>;

}
