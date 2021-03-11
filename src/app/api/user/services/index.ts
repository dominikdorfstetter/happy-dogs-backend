import { Provider } from '@nestjs/common';

import { UserService } from './user.service';

export const services: Provider[] = [
  UserService,
];
