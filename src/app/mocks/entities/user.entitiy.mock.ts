import { UserEntity } from '@app/api/user/entities';
import { v4 as generateUUID } from 'uuid';

export const MOCK_USER_1 = {
  uuid: generateUUID(),
  creationTS: new Date(),
} as UserEntity;

export const MOCK_USER_2 = {
  uuid: generateUUID(),
  creationTS: new Date(),
} as UserEntity;

export const MOCK_USERS: UserEntity[] = [MOCK_USER_1, MOCK_USER_2];
