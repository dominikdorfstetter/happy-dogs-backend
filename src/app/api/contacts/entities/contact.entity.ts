import { Column, Entity } from 'typeorm';
import { BaseEntity } from '@app/base/base.entity';
import { AddressDetails } from '@app/api/contacts/entities/adress-details.entity';

@Entity()
export class ContactEntity extends BaseEntity {
    @Column({
      name: 'NAME',
    })
    public name?: string;

    @Column({
      name: 'PHONE',
    })
    public phone?: string;

    @Column({
      name: 'EMAIL',
    })
    public email?: string;

    public address?: AddressDetails;

}
