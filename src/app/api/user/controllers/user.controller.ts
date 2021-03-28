import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';

import { UserService } from '@app/api/user/services/user.service';
import { UserEntity } from '../entities';
import {Observable} from 'rxjs';
import { CreateUserDto } from '@app/api/user/dtos/create-user.dto';

@Controller('users')
export class UserController {

  public constructor(
    private readonly userService: UserService,
  ) {}

  @Post()
  @HttpCode(200)
  public create(@Body() createUserDto: CreateUserDto): Observable<UserEntity> {
    return this.userService.create(createUserDto);
  }

  @Get()
  @HttpCode(200)
  public findAll(): Observable<UserEntity[]> {
    return this.userService.findAll();
  }

  @Get(':uuid')
  @HttpCode(200)
  public findOne(@Param() params: { uuid: string }): Observable<UserEntity | undefined> {
    return this.userService.findOne(params.uuid);
  }

  @Delete(':uuid')
  @HttpCode(200)
  public delete(@Param() params: { uuid: string }): Observable<any> {
    return this.userService.delete(params.uuid);
  }
}
