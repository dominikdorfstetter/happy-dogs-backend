import * as dotenv from 'dotenv';

dotenv.config();

export interface ServiceConfigOptions {
    port: number;
    apiDocsEnabled: boolean;
    apiPath: string;
}

export const getServiceConfig = (): ServiceConfigOptions => ({
    port: Number(process.env.SERVICE_PORT) || 3000,
    apiDocsEnabled: Boolean(process.env.SERVICE_API_DOCS_ENABLED) || true,
    apiPath: process.env.SERVICE_API_DOCS_PATH || 'api',
});
