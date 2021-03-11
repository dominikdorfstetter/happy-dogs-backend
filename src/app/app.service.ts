import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  public sendAlive(): boolean {
    return true;
  }
}
