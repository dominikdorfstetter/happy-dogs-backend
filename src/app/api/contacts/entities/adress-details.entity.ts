import { Column } from 'typeorm';

export class AddressDetails {
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
