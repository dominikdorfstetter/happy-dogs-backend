import { Column, Entity } from 'typeorm';
import { BaseEntity } from '@app/api/base/base.entity';

export enum FileType {
    PDF,
    PNG,
    JPG,
    GIF,
}

@Entity()
export class DocumentEntity extends BaseEntity {

    @Column({
      name: 'TITLE',
      type: 'text',
      nullable: false
    })
    public title: string;

    @Column({
      name: 'FILE_NAME',
      type: 'text',
      nullable: false
    })
    public fileName: string;

    @Column({
      name: 'FILE_SIZE',
      type: 'text',
      nullable: false
    })
    public fileSize: string;

    @Column({
      name: 'FILE_TYPE',
      type: 'enum',
      enum: FileType,
      nullable: false
    })
    public fileType: FileType;

    @Column({
      name: 'FILE_DATA',
      type: 'bytea',
      nullable: false
    })
    public data: Buffer;

}
