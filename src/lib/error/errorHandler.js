module.exports = (server) => {

    server.use('/*', (error, req, res, next, app = server) => {

        if (error.stack) {

            console.error(error.stack);

            if(res.statusCode === 200) {

                res.status(500);

            }

            return res.send({
                errorMessage: error.message
            });

        } else {

            console.error(error);

            if (res.statusCode === 200) {

                res.status(400);
            }

            return res.send({
                errorMessage: error
            });

        }

    });

};