const BandList = require("./band-list");


class Sockets {

    constructor(io) {

        this.io = io;
        this.bandList = new BandList();
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', (socket) => {

            console.log('Client connected');

            // Emitir al cliente conectado todas las bandas actuales
            socket.emit('current-bands', this.bandList.getBandas())

            // Votar por la banda
            socket.on('votar-banda', (id) => {
                this.bandList.increaseVotes(id)
                this.io.emit('current-bands', this.bandList.getBandas())
            })

            // Borrar banda
            socket.on('borrar-banda', (id) => {
                this.bandList.removeBand(id)
                this.io.emit('current-bands', this.bandList.getBandas())
            })

            // Cambiar nombre banda
            socket.on('cambiar-nombre-banda', ({id, nombre}) => {

                this.bandList.changeName(id, nombre)
                this.io.emit('current-bands', this.bandList.getBandas())
            })

            // Crear nueva banda
            socket.on('nueva-banda', ({nombre}) => {
                this.bandList.addBand(nombre)
                this.io.emit('current-bands', this.bandList.getBandas())
            })
        });
    }


}


module.exports = Sockets;