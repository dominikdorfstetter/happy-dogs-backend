import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '@app/api/base/base.entity';
import { PetEntity } from '@app/api/pets/entities/pet.entity';
import { ApiProperty } from '@nestjs/swagger';

export enum FileType {
    PDF,
    PNG,
    JPG,
    GIF,
}

@Entity({
  name: 'DOCUMENTS',
  synchronize: true
})
export class DocumentEntity extends BaseEntity {

    @Column({
      name: 'TITLE',
      type: 'text',
      nullable: false
    })
    public title!: string;

    @Column({
      name: 'NAME',
      type: 'text',
      nullable: false
    })
    public fileName!: string;

    @Column({
      name: 'SIZE',
      type: 'text',
      nullable: false
    })
    public fileSize!: string;

    @Column({
      name: 'TYPE',
      type: 'enum',
      enum: FileType,
      nullable: false
    })
    public fileType!: FileType;

    @Column({
      name: 'DATA',
      type: 'bytea',
      nullable: false
    })
    public data!: Buffer;

    @ManyToOne(
      () => PetEntity,
      pet => pet.uuid,
      {
        eager: true,
        nullable: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
    @JoinColumn({
      name: 'PET_UUID'
    })
    public pet!: PetEntity;

}
