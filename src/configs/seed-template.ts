import { QueryRunner } from 'typeorm';

import { BaseSeed } from '@src/base-seed';

export class __CLASS_NAME__ extends BaseSeed {
  public name = '__TEMPLATE_NAME__';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async up(queryRunner: QueryRunner): Promise<any> {
    // const repo = this.getRepository();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async down(queryRunner: QueryRunner): Promise<any> {
    // const repo = this.getRepository();
  }

}
