import * as dotenv from 'dotenv';
import { KeycloakConnectOptions } from 'nest-keycloak-connect/interface/keycloak-connect-options.interface';

dotenv.config();

export const getKeycloakConfig = (): KeycloakConnectOptions => ({
  'auth-server-url': process.env.KEYCLOAK_AUTH_URL,
  realm: process.env.KEYLOAK_REAlM || '',
  'client-id': process.env.KEYKLOAK_CLIENT_ID,
  secret: process.env.KEYCLOAK_SECRET || '',
  cookieKey: process.env.KEYCLOAK_COOKIE_KEY || '',
});
