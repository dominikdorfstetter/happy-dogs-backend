import { Column, Entity } from 'typeorm';
import { BaseEntity } from '@app/base/base.entity';

@Entity()
export class PetEntity extends BaseEntity {
    @Column({
      name: 'ANIMALDATA_REG_NUMBER',
    })
    public animaldataRegNumber?: string;


}
