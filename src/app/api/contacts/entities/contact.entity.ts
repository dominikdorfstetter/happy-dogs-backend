import {Column, Entity, JoinColumn, OneToOne} from 'typeorm';
import { BaseEntity } from '@app/api/base/base.entity';
import { AddressDetails } from '@app/api/contacts/entities/adress-details.entity';

/**
 * @author: Dominik Dorfstetter
 * Contact entity
 */
@Entity()
export class ContactEntity extends BaseEntity {
    @Column({
      name: 'NAME',
    })
    public name: string;

    @Column({
      name: 'PHONE',
    })
    public phone: string;

    @Column({
      name: 'WEBSITE',
    })
    public website: string;

    @Column({
      name: 'EMAIL',
    })
    public email: string;

    @OneToOne(() => AddressDetails)
    @JoinColumn()
    public address: AddressDetails;

}
