const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const cors = require('./cors');
const debug = require('debug');
const consign = require('consign');
const httpContext = require('express-http-context');
const config = require('./config');
const operation = require('./database/operation');
const goDatabase = require('go-database');
const jwt = require('jsonwebtoken');
const request = require('odin-request-retry');

server.use(cors);

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(httpContext.middleware);

server.httpContext = httpContext;

server.use(function (req, res, next) {
    debug('Request:', req.method, req.originalUrl, 'Time:', new Date(), 'Query Params:', req.query, 'Headers:', req.headers, "Body:", req.body);
    next();
});

server.config = config;
server.debug = debug;
server.operation = operation(server);
server.jwt = jwt;
server.remoteRequest = request.request;

goDatabase.mssql.connectionFactory.createConnection(config.database).then(() => {

    require('./interceptor/request') (server);
    require('./interceptor/response') (server);
    require('./error/errorHandler') (server);

    try {
        consign({cwd: './resources/'}).include('/')
        .into(server);
    } catch (e) {
        console.error(e);
    }

}).catch((err) => {

    debug('err');

    process.exit(1);

});



module.exports = server;
