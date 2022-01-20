import React, { useState, useContext } from 'react'
import { SocketContext } from '../context/SocketContext'
import { useSocket } from '../hooks/useSocket'

export const AddBand = () => {

    const [valor, setValor] = useState('')

    const { socket } = useContext(SocketContext);

    const onSubmit = (ev) => {
        ev.preventDefault();
        //console.log(valor)

        if (valor.trim().length > 0) {
            // Llamar funcion
            socket.emit('nueva-banda', { nombre: valor })

            setValor('')
        }
    }

    return (
        <>
            <h3>AddBand</h3>

            <form onSubmit={onSubmit}>
                <input type="text"
                    className='form-control'
                    placeholder='Nombre banda'
                    value={valor}
                    onChange={(ev) => setValor(ev.target.value)}
                />
            </form>
        </>
    )
}
