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
      name: 'NUMBER',
    })
    public number?: string;

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
