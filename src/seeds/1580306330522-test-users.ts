import { Like } from 'typeorm';
import * as _ from 'lodash';

import { BaseSeed } from '@src/base-seed';
import { UserEntity } from '@app/api/user/entities';

const fakeUser = (keycloakID: string, createdBy: string) => _.assign(new UserEntity(), { uuid: keycloakID, createdBy });

/**
 * This is a demo seed. Feel free to remove/update it.
 */
export class TestUsers1580306330522 extends BaseSeed {
  public name = 'TestUsers1580306330522';

  public async up(): Promise<any> {
    const repo = this.getRepository(UserEntity);

    await repo.insert([
      fakeUser('123', '123'),
      fakeUser('234', '123'),
    ]);
  }

  public async down(): Promise<any> {
    const repo = this.getRepository(UserEntity);

    await repo.delete({ uuid: Like('234') });
  }

}
