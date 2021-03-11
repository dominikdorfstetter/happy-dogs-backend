import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode, NotFoundException,
  Param,
  Post,
} from '@nestjs/common';

import { Unprotected } from 'nest-keycloak-connect';
import { CreateUserDto } from '@app/api/user/dtos/create-user.dto';
import { UserService } from '@app/api/user/services/user.service';
import { UserEntity } from '../entities';
import {Observable} from "rxjs";

@Controller('users')
export class UserController {

  public constructor(
    private readonly userService: UserService,
  ) {}

  @Post()
  @HttpCode(200)
  @Unprotected()
  public create(@Body() createUserDto: UserEntity): Observable<UserEntity> {
    return this.userService.create(createUserDto);
  }

  @Get()
  @HttpCode(200)
  @Unprotected()
  public findAll(): Observable<UserEntity[]> {
    return this.userService.findAll();
  }

  @Get(':uuid')
  @HttpCode(200)
  @Unprotected()
  public findOne(@Param() params: { uuid: string }): Observable<UserEntity | undefined> {
    return this.userService.findOne(params.uuid);
  }

  @Delete(':uuid')
  @HttpCode(200)
  @Unprotected()
  public delete(@Param() params: { uuid: string }): Observable<any> {
    return this.userService.delete(params.uuid);
  }
}
