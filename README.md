<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript happydogs backend

## Features and additions to [nestjs/typescript-starter](https://github.com/nestjs/typescript-starter):

* TypeScript [Path Aliases](/tsconfig.json#L29) configured
  * You can make imports like `import { ... } from '@app/...;`
  * You can add your own aliases
  * Aliases configuration in the one place [tsconfig.json](tsconfig.json#L29).
  * Jest & `module-alias` imports `paths` config using [ts-paths-fix](https://github.com/dominikdorfstetter/happy-dogs-backend/blob/master/src/configs/ts-paths-fix-apply.ts)
* Yarn for packages installation and [`check-yarn`](/tools/check-yarn.js) utility to prevent packages installation via `npm`
* Additional Jest matchers from [`jest-extended`](https://github.com/jest-community/jest-extended) configured
* [ESLint](https://eslint.org) for linting JS & TS files ([TSLint is deprecated in 2019](https://github.com/palantir/tslint#tslint)).
* Strict linting [config](/src/.eslintrc.js) ([sonarlint](https://github.com/SonarSource/eslint-plugin-sonarjs))
* [`.nvmrc`](https://github.com/nvm-sh/nvm#nvmrc)
* Git hooks via [husky](https://www.npmjs.com/package/husky)
* Security & Authorization [nest-keycloak-connect](https://www.npmjs.com/package/nest-keycloak-connect) 
* Docker Environment
    * [Keycloak](https://www.keycloak.org/) v.10.0 with postgres database
    * Postgres database for our API
* [TypeORM](https://typeorm.io/) as our ORM
* [OpenAPI / Swagger](https://docs.nestjs.com/openapi/introduction)

**Other features:**

* Wallaby JS works out of the box without any additional config  
  Notice: How to run in "Without Configuration" mode ([Official Wallaby JS Guide](https://wallabyjs.com/docs/intro/config.html#automatic-configuration))

## Setup & first run

Everything regarding the backend is configured in .env (.env.example). Everything regarding the docker-images is in docker/configs/*.env.


1. First start

    1. `git clone git@github.com:dominikdorfstetter/happy-dogs-backend.git`
    2. `cd happy-dogs-backend`
    3. `yarn install`
    4. `cp docker/docker-compose.local.yml docker/docker-compose.yml`
    5. `cp .env.example .env`
    6. `sh tools/start_containers.sh`
    7. `yarn run orm schema:sync`
    8. `yarn start`
    
2. Sync Model with DB

    1. `yarn run orm schema:sync` or `yarn run orm schema:drop` & sync after to remove the schema completely

3. Migrate data

    1. `yarn run migrations:diff`
    2. `yarn run migrations:run`
    
4. Seed data

    * `yarn run seeds:run` (to seed your data)
    * `yarn run seeds:new <TEMPLATE_NAME>` (it creates a new seed in /src/seeds)
    * `yarn run seeds:revert` to remove seed data from repositories

## How to

### Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# debug mode
$ yarn start:debug

# production mode
$ yarn build:prod
$ yarn start:prod
```

### Test

```bash
# unit tests
$ yarn test

# watch mode
$ yarn test:watch

# specific tests
yarn test -- src/my.spec.ts
yarn test:watch -- src/my.spec.ts

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

### Lint

```bash
# Just show problems
$ yarn lint

# Fix problems if it is possible
$ yarn lint:fix
```

## Author

| [<img src="https://avatars.githubusercontent.com/u/33449581?s=460&u=eb5d647ee8fe844e2f1639cdc6153e8e34f78b9d&v=4" width="100px;"/><br /><sub>Dominik Dorfstetter</sub>](https://github.com/dominikdorfstetter) |
| :---: |
