const transactionFactory = require('go-database').mssql.transactionFactory;
const tamper = require('tamper');

module.exports = (server) => {

    server.use(tamper((req, res) => {

            let transaction = res.app.httpContext.get('transaction');

            if (res.statusCode >= 200 && res.statusCode < 299) {

                transactionFactory.commitTransaction(transaction).then(() => {

                    console.log('commit realizado');
                    return;

                }).catch(err => {

                    throw Error(err);

                });

            } else {

                transactionFactory.rollbackTransaction(transaction).then(() => {

                    console.log('rollback realizado.');
                    return;

                }).catch(err => {

                    throw Error(err);

                });
            }

        })
    );

};