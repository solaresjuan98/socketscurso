class Sockets {

    constructor(io) {
        this.io = io;
        this.socketEvents()
    }

    socketEvents() {

        // On connection
        this.io.on('connection', (socket) => {
            //console.log(socket.id)


            // socket.emit('mensaje-bienvenida', {
            //     msg: 'Bienvenido al servidor',
            //     fecha: new Date()
            // })

            // Escuchar evento
            socket.on('mensaje-a-server', (data) => {
                console.log(data)

                this.io.emit('mensaje-desde-servidor', data)
            })


        })


    }

}

module.exports = Sockets;