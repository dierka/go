const transactionFactory = require('go-database').mssql.transactionFactory;

module.exports = (server) => {

    server.use('/*', (req, res, next, app = server) => {

        let httpContext = app.httpContext;

        transactionFactory.createTransaction().then((transaction) => {

            httpContext.set('transaction', transaction);

            console.log('Request interceptada. Transaction estabelecida.');

            return next();

        });

    });

};