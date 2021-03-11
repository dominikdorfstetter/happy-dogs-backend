import { UserEntity } from '@app/api/user/entities';

export const MOCK_USER_1 = {
  uuid: 'test-uuid-1',
  name: 'Herr Testermann',
  createdBy: 'me, the great Mephisto',
  creationTS: new Date(),
} as UserEntity;

export const MOCK_USER_2 = {
  uuid: 'test-uuid-2',
  name: 'Frau Testermann',
  createdBy: 'me, the great Mephisto',
  creationTS: new Date(),
} as UserEntity;

export const MOCK_USERS: UserEntity[] = [MOCK_USER_1, MOCK_USER_2];
