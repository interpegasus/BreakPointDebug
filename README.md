This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# Stack
- Angular
- Mongo DB
- Node
- Express

## DB


## Local DB
$ brew install mongodb mongoose
$ brew services start mongodb

## Admin via mongo-express
 - Mounted at /admin via app.js

## Scheduling
- Via node-cron

## Background Processes
- Redis and Bull

## API Docs via Swagger
/api-docs

## Redis
$ redis-server /usr/local/etc/redis.conf

## Debug Via Visual Studio Code
/.vscode/launch.json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "runtimeExecutable": "nodemon",
            "restart": true,
            "console": "integratedTerminal",
            "internalConsoleOptions": "neverOpen",
            "name": "Launch Program",
            "program": "${works ceRoot}/bin/www"
        },
        {
            "type": "node",
            "request": "attach",
            "name": "Attach to Port",
            "address": "localhost",
            "port": 5858
        },
    ]
}

## Starting the local app in Visual Studio Code with debugger
1. Edit your /.vscode/launch.json and add the data from above under: "Debug Via Visual Studio Code"
2. Click debug icon in Visual Studio
3. Click green button next to "Launch Battle Royale"
4. The server starts at port 3000 at: http://localhost:3000/api
5. Visual Studio supports adding breakpoints among other debugging features.

## Build app distro
$ npm build

## Starting Local app in developoment and autodetect changes  
$ redis-server /usr/local/etc/redis.conf
$ brew services start mongodb
$ nodemon npm start
$ nodemon npm debug-app