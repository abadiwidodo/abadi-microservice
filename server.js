var express = require('express');
var bodyParser = require('body-parser');

function Microservice(routes){
    this.middleware = function(req, res, next){ next(); };

    this.server = express();
    this.server.set('port', process.env.PORT || 3000);
    this.server.use(bodyParser.json());
    this.server.use(routes);
}

Microservice.prototype.start = function start() {
    this.server.listen(this.server.get('port'));
};

module.exports = Microservice;