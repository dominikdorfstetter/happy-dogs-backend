import { Entity, PrimaryColumn } from 'typeorm';
import { AuditEntity } from '@app/api/base/audit.entity';

@Entity()
export class UserEntity extends AuditEntity {

  @PrimaryColumn({
    name: 'UUID',
  })
  public uuid!: string;

}
