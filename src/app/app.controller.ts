import { Controller, Get, HttpCode } from '@nestjs/common';
import { Unprotected } from 'nest-keycloak-connect';
import { AppService } from './app.service';

@Controller()
export class AppController {

  public constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  @HttpCode(200)
  @Unprotected()
  public healthCheck(): boolean {
    return this.appService.sendAlive();
  }

}
