import React from 'react'
import Video from '../src/components/Video'
import Servicios from '../src/components/Servicios'
import Informacion from '../src/components/Informacion'
import Publicaciones from '../src/components/Publicaciones'
import Contacto from '../src/components/Contacto'

const HomePage = () => {
  return (
    <div>
      <Video />
      <Servicios />
      <Informacion />
      <Publicaciones />
      <Contacto />
    </div>
  )
}


export default HomePage