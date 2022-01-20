
import React, { useState, useEffect, useContext } from 'react'
import { SocketContext } from '../context/SocketContext'

export const BandList = () => {

    const [bands, setBands] = useState([])
    const { socket } = useContext(SocketContext)


    useEffect(() => {

        socket.on('current-bands', (bands) => {
            setBands(bands)
        })

        return () => socket.off('current-bands')
    }, [socket])

    const cambioNombre = (event, id) => {

        const nuevoNombre = event.target.value;

        setBands(bands => bands.map(band => {
            if (band.id === id) {
                band.name = nuevoNombre;
            }

            return band
        }))

    }

    const onPerdioFoco = (id, nombre) => {

        socket.emit('cambiar-nombre-banda', { id, nombre })
    }


    const votar = (id) => {
        //console.log('votar - app')
        socket.emit('votar-banda', id)
    }

    const borrar = (id) => {
        socket.emit('borrar-banda', id)
    }


    const crearRows = () => {
        return (

            bands.map(band => (
                <tr key={band.id}>
                    <td>
                        <button
                            className='btn btn-primary'
                            style={{ borderRadius: '5px' }}
                            onClick={() => votar(band.id)}>
                            Votar
                        </button>
                    </td>
                    <td>
                        <input
                            className='form-control'
                            value={band.name}
                            onChange={(event) => cambioNombre(event, band.id)}
                            onBlur={() => onPerdioFoco(band.id, band.name)}
                        />
                    </td>
                    <td>
                        <h5>{band.votes}</h5>
                    </td>
                    <td>
                        <button
                            className='btn btn-danger'
                            style={{ borderRadius: '5px' }}
                            onClick={() => borrar(band.id)}>
                            Borrar
                        </button>
                    </td>
                </tr>
            ))

        )

    }

    return (
        <>

            <table className='table table-stripped'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Votos</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody >
                    {crearRows()}
                </tbody>
            </table>
        </>
    )
}
