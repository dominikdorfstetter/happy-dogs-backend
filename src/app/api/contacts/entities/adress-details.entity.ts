import { Column, Entity } from 'typeorm';
import { BaseEntity } from '@app/api/base/base.entity';


/**
 * @author: Dominik Dorfstetter
 * AddressDetails entity
 */
@Entity()
export class AddressDetails extends BaseEntity {
    @Column({
      name: 'ZIPCODE',
    })
    public zipCode?: string;

    @Column({
      name: 'STREET',
    })
    public street?: string;

    @Column({
      name: 'HOUSE_NUMBER',
    })
    public houseNumber?: string;

    @Column({
      name: 'FLOOR',
    })
    public floor?: string;

    @Column({
      name: 'DOOR',
    })
    public door?: string;

    @Column({
      name: 'COUNTRY_CODE',
    })
    public countryCode?: string;
}
