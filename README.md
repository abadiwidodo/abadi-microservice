ABADI MICROSERVICE
---
NodeJS microservice package

You can pass in custom express routes

Usage
---
```
var Server = require('abadi-microservice');
var routes = require('./app/routes');

const server = new Server(routes);

server.start();
```