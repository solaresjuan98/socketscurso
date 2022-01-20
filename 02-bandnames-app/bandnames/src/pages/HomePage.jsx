import React, { useContext } from 'react'
import { SocketContext } from '../context/SocketContext'

import { AddBand } from '../components/AddBand'
import { BandList } from '../components/BandList'


export const HomePage = () => {


  //const [bands, setBands] = useState([])
  const { online } = useContext(SocketContext)
  //const { socket, online } = useSocket('http://localhost:8080')

  // useEffect(() => {

  //   setOnline(socket.connected)
  // }, [socket])


  // useEffect(() => {


  // }, [socket])


  // // Borrar (id) => 'borrar-banda'

  // const cambiarNombre = (id, nombre) => {

  //   socket.emit('cambiar-nombre-banda', { id, nombre })
  // }


  return (
    <div className='container mt-5'>
      <div className="alert">
        <p>
          Service status:
          {
            online ? <span className='text-success'> online</span> : <span className='text-danger'> offline</span>
          }


        </p>
      </div>

      <h1>BandNames</h1>
      <hr />

      <div className="row">
        <div className="col-8">
          <BandList />
        </div>

        <div className="col-4">
          <AddBand />
        </div>
      </div>

    </div>
  )
}
