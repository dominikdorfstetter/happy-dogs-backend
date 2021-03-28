import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from '@app/api/base/base.entity';
import { ContactEntity } from '@app/api/contacts/entities/contact.entity';


/**
 * @author: Dominik Dorfstetter
 * AddressDetails entity
 */
@Entity({
  name: 'CONTACT_ADDRESS',
  synchronize: true
})
export class AddressEntity extends BaseEntity {

    @OneToOne(
      () => ContactEntity,
      contact => contact.address,
      {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    @JoinColumn(
      {
        name: 'contact_uuid'
      })
    public contact!: ContactEntity;

    @Column({
      name: 'ZIPCODE',
      nullable: false,
      type: 'text',
    })
    public zipCode!: string;

    @Column({
      name: 'STREET',
      nullable: false,
      type: 'text'
    })
    public street!: string;

    @Column({
      name: 'HOUSE_NUMBER',
      nullable: false,
      type: 'text'
    })
    public houseNumber!: string;

    @Column({
      name: 'FLOOR',
      nullable: true,
      type: 'text'
    })
    public floor?: string;

    @Column({
      name: 'DOOR',
      nullable: true,
      type: 'text'
    })
    public door?: string;

    @Column({
      name: 'COUNTRY_CODE',
      nullable: false,
      type: 'text'
    })
    public countryCode!: string;
}
