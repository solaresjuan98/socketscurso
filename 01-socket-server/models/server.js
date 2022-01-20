const express = require('express');
// Servidor de sockets
const http = require('http');
const socketio = require('socket.io')
const path = require('path');
const Sockets = require('./Sockets');

class Server {


    constructor() {
        this.app = express()
        this.port = 8080;
        // Http Server
        this.server = http.createServer(this.app)
        // Configuraciones de sockets
        this.io = socketio(this.server, {/* configuraciones */ })
    }

    middlewares() {
        // Desplegar el directorio público
        this.app.use(express.static(path.resolve(__dirname, '../public')))
    }

    configurarSockets() {
        new Sockets(this.io);
    }

    exetute() {

        // Inicializar middlewares
        this.middlewares();

        // Inicializar sockets 
        this.configurarSockets();

        // Inizializar server 
        this.server.listen(this.port, () => {
            console.log('Server running in port: 8080')
        })
    }
}

module.exports = Server;