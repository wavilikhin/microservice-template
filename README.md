# Microservice boilerplate

## Description

This is a microservice boilerplate repo \
It has a default setup for UI, Backend, DB and Message broker

### Technologies used

**Backend:** [Nest.js](https://github.com/nestjs/nest) \
**DB:** [PostgreSQL](https://www.postgresql.org) + [Prisma](https://www.prisma.io/) \
**Frontend:** [Next.js](https://nextjs.org) \
**Message broker:** [Kafka](https://kafka.apache.org)

## Installation

```bash
$ yarn install
```
<!-- 
## Running the app

```bash
# development
$ yarn start
# watch mode
$ yarn start:dev
# production mode
$ yarn start:prod
``` -->

## Running the app (Docker)

```bash
$ yarn docker:build
# you can omit -d flag in package.json script to see logs
$ yarn docker
```

> **Note:** Sometimes nest-js container start could fail if it will be started before postgress container. You can just stopp all the containers with `docker-compose stop` and run them again with `docker-compose up` or follow the next steps:

```bash
# Run each container explicitly step by step
$ yarn docker:db
$ yarn docker:migrate
$ yarn docker:build
$ yarn docker
```

## Seeding the data base

```bash
$ yarn seed
```

> **Note:** If you are running postgress in Docker container - set the `DB_HOST` env to `local`

<!-- ## Test

```bash
# unit tests
$ yarn test
# e2e tests
$ yarn test:e2e
# test coverage
$ yarn test:cov
``` -->

## License

[MIT licensed](LICENSE).
