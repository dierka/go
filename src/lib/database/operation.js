const godb = require('go-database');

module.exports = (server) => {

    return {

        getObject: async (sqlCommand, object) => {

            let transaction = server.httpContext.get('transaction');

            object = await godb.mssql.databaseOperation.getObject(sqlCommand, object, transaction);

            return object;

        },

        getList: async (sqlCommand, parameter = {}) => {

            let transaction = server.httpContext.get('transaction');

            let list = await godb.mssql.databaseOperation.getList(sqlCommand, parameter, transaction);

            return list;

        },

        insert: (sqlCommand, object) => {

            let transaction = server.httpContext.get('transaction');

            return godb.mssql.databaseOperation.insert(sqlCommand, object, transaction);

        }
    }

};