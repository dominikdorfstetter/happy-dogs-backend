import { BeforeUpdate, Column } from 'typeorm';

export class AuditEntity {

    @Column({
      name: 'CREATION_TS',
      default: new Date(),
    })
    public creationTS!: Date;

    @Column({
      name: 'UPDATE_TS',
      nullable: true,
      default: null,
    })
    public updateTS?: Date;

    @BeforeUpdate()
    public updateAudit(): void {
      this.updateTS = new Date();
    }

}
