import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeycloakConnectModule, ResourceGuard, AuthGuard, RoleGuard } from 'nest-keycloak-connect';
import { getDefaultConnection } from '@configs/ormconfig';

import { UserModule } from '@app/api/user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { getKeycloakConfig } from '@configs/keycloakconfig';
import { LoggerMiddleware } from '@app/middlewares/logger.middleware';
import { UserEntity } from '@app/api/user/entities';
import { AppController } from './app.controller';
import { AppService } from '@app/app.service';
import { PetEntity } from '@app/api/pets/entities/pet.entity';
import { ContactEntity } from '@app/api/contacts/entities';
import { DocumentEntity } from '@app/api/documents/entities/document.entity';
import { AddressEntity } from '@app/api/contacts/entities/address.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...getDefaultConnection(),
      entities: [UserEntity, PetEntity, ContactEntity, DocumentEntity, AddressEntity],
    }),
    KeycloakConnectModule.register({
      ...getKeycloakConfig()
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    }],

})
export class AppModule {

  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }

}
