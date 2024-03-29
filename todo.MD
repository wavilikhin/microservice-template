# Backlog

[x] - Check that it runs from scratch
[x] - Add and test docker-compose.migrate.yml
[x] - Add and test docker-compose.db.yml
[x] - Add UI repo as separate container
[x] - Add dotenvsafe for front
[x] - Add dev version of container for UI
[x] - Fix UI proxy
[x] - Test CDUR
[x] - Create separate modules and controllers for users and posts
[x] - Descide how to run it in one command  
[x] - Run turborepo with docker - https://turborepo.org/docs/handbook/deploying-with-docker
    [x] - docker-compose.db and docker-compose.migrate starts as separate pipelines in docker
    [x] - db migrates
    [x] - db up
    [x] - frontend and server starts in dev mode in docker
[] - Fix prettier and eslint for apps/
  [] - create base tsconfig from front and server
  [] - create base prettier
  [] - add eslint prettier plugin
[] - Add dev version of container for server
[] - Add kafka repo
[] - Integrate kafka
[] - Update 'running the app' part in README
[] - Add the repo for reference - https://github.com/notiz-dev/nestjs-prisma-starter
[] - Add CI/CD
[] - Add sonarQube config
[] - Add precommit hooks
[] - Add alpine images for prod
[] - Take a look at this for migration - https://turborepo.org/docs/handbook/dev#running-tasks-before-dev
[] - Add server prod Docker version