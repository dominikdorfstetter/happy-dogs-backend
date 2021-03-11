import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseEntityService } from '@app/base/base-service.interface';
import { from, Observable } from 'rxjs';
import { UserEntity } from '../entities';

@Injectable()
export class UserService implements Partial<BaseEntityService<UserEntity>> {

  public constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public create(user: UserEntity): Observable<UserEntity> {
    return from(this.userRepository.save<UserEntity>(user));
  }

  public delete(uuid: string): Observable<any> {
    return from(this.userRepository.delete(uuid));
  }

  public findOne(uuid: string): Observable<UserEntity | undefined> {
    return from(this.userRepository.findOne({ uuid }));
  }

  public findAll(): Observable<UserEntity[]> {
    return from(this.userRepository.find());
  }

}
