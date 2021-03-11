import { Entity, PrimaryColumn } from 'typeorm';
import { AuditEntity } from '@app/base/audit.entity';

@Entity()
export class UserEntity extends AuditEntity {

  @PrimaryColumn({
    name: 'UUID',
  })
  public uuid!: string;

}
