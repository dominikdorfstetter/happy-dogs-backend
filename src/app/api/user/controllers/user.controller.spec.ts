import { UserController } from '@app/api/user/controllers/user.controller';
import { UserService } from '@app/api/user/services/user.service';
import { BaseEntityServiceMock } from '@app/mocks/base-service.mock';
import { UserEntity } from '@app/api/user/entities';
import { MOCK_USER_1, MOCK_USERS } from '@app/mocks/entities/user.entitiy.mock';
import { of } from 'rxjs';

describe('UserController', () => {
  let userController: UserController;
  const userServiceMock = new BaseEntityServiceMock<UserEntity>();

  beforeEach(() => {
    userController = new UserController((userServiceMock as any) as UserService);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  it('should return an array of users', () => {
    jest.spyOn(userServiceMock, 'getAll').mockReturnValueOnce(of(MOCK_USERS));
    userController.findAll().subscribe((res: UserEntity[]) => {
      expect(res).toEqual(MOCK_USERS);
    });
  });

  it('should return a specific user', () => {
    jest.spyOn(userServiceMock, 'get').mockReturnValueOnce(of(MOCK_USER_1));
    userController.findOne({ uuid: MOCK_USER_1.uuid })
        .subscribe((user: UserEntity | undefined) => {
          expect(user).toBe(MOCK_USER_1);
        });
  });

  it('should return uuid after deletion of user', () => {
    jest.spyOn(userServiceMock, 'delete').mockReturnValueOnce(of(1));
    userController.delete(MOCK_USER_1.uuid).subscribe((res: number) => {
      expect(res).toBe(1);
    });
  });

});
