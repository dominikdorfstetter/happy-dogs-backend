import { Column, PrimaryColumn } from 'typeorm';
import { AuditEntity } from '@app/base/audit.entity';
import { v4 as generateUUID } from 'uuid';

export class BaseEntity extends AuditEntity {
    @PrimaryColumn({
      name: 'UUID',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
      default: generateUUID(),
    })
    public uuid!: string;

    @Column({ default: true })
    public isActive?: boolean;
}
