import { Column, PrimaryColumn } from 'typeorm';
import { AuditEntity } from '@app/api/base/audit.entity';
import { v4 as generateUUID } from 'uuid';

export class BaseEntity extends AuditEntity {
    @PrimaryColumn({
      name: 'UUID',
      default: generateUUID(),
    })
    public uuid!: string;

    @Column({
      name: 'IS_ACTIVE',
      default: true
    })
    public isActive?: boolean;
}
