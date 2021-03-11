import { Type } from '@nestjs/common';

import { UserEntity } from './user.entity';

export * from './user.entity';

export const entities: Type<any>[] = [
  UserEntity,
];
