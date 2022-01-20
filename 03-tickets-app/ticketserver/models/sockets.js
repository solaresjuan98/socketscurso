
const TicketList = require('./ticket-list')

class Sockets {

    constructor(io) {

        this.io = io;
        // Crear instancia del ticketlist
        this.ticketList = new TicketList()
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', (socket) => {

            console.log('cliente conectado :D')
            // Escuchar evento: mensaje-to-server
            // socket.on('mensaje-to-server', ( data ) => {
            //     console.log( data );

            //     this.io.emit('mensaje-from-server', data );
            // });

            socket.on('solicitar-ticket', (data, callback) => {

                const nuevoTicket = this.ticketList.crearTicket()
                callback(nuevoTicket);
                //console.log(nuevoTicket)
            });

            socket.on('siguiente-ticket-trabajar', (usuario, callback) => {
                const { agente, escritorio } = usuario;
                const suTicket = this.ticketList.asignarTicket(agente, escritorio);

                callback(suTicket);
                console.log(suTicket)
                this.io.emit('ticket-asignado', this.ticketList.ultimos13)
            })

        });
    }


}


module.exports = Sockets;