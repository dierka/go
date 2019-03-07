const server = require('./server');
const config = require('./config');

module.exports = () => {

    let portaHttp = config.http.port;

    server.listen(portaHttp);
    console.log('Servidor iniciado com Sucesso! Executando na porta: ' + portaHttp);

};