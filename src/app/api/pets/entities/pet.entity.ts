import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '@app/api/base/base.entity';
import { UserEntity } from '@app/api/user/entities';
import { ContactEntity } from '@app/api/contacts/entities';
import { DocumentEntity } from '@app/api/documents/entities/document.entity';
import { List } from 'immutable';

@Entity({
  name: 'PETS',
  synchronize: true
})
export class PetEntity extends BaseEntity {

    @Column({
      name: 'ANIMALDATA_REG_NUMBER',
      type: 'text',
      nullable: true
    })
    public animaldataRegNumber?: string;

    @Column({
      name: 'NAME',
      type: 'text',
      nullable: false
    })
    public name!: string;

    @Column({
      name: 'BIRTHDATE',
      type: 'date',
      nullable: true
    })
    public birthDate: Date;

    @ManyToOne(
      () => UserEntity,
      user => user.uuid,
      {
        nullable: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    )
    @JoinColumn({
      name: 'OWNER_UUID',
    })
    public owner!: UserEntity;

    @ManyToOne(
      () => ContactEntity,
      contact => contact.uuid,
      {
        eager: true,
        nullable: true,
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL',
      }
    )
    @JoinColumn({
      name: 'VET_UUID'
    })
    public vet?: ContactEntity;

    @OneToMany(
      () => DocumentEntity,
      document => document.uuid,
      {
        nullable: true,
        eager: false,
        cascade: true
      }
    )
    @JoinTable()
    public documents?: Promise<List<DocumentEntity>>;
}
