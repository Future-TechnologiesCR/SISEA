import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import '/src/css/Encabezado.css'

function Encabezado() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
          <nav className='navbar'>

              <img src='src/img/Logo.png'  width="100rem" height="100rem" 
               className='navbar-imagen'
              />

            <h4 id='titulo' className='logo'><b>SISEA Seguridad</b></h4>
            <ul className={isMobile ? "nav-links-mobile":"nav-links"}
            onClick={()=>setIsMobile(false)}>
                <Link to='/#' className='INICIO'>
                    <li>Inicio</li> 
                </Link>
                <Link to='/#Servicios' className='SERVICIOS'>
                    <li>Servicios</li>
                </Link>
                <Link to='/catalogo#Catalogo' className='CATALOGO'>
                    <li>Catálogo</li>
                </Link> 
                <Link to='/#Informacion' className='INFORMACION'>
                    <li>Información</li>
                </Link>
                <Link to='/#Publicaciones' className='PUBLICACIONES'>
                    <li>Publicaciones</li>
                </Link>
                <Link to='/#Contacto' className='CONTACTO'>
                    <li>Contacto</li>
                </Link>
            </ul>
            <button className='mobile-menu-icon'
            onClick={()=>setIsMobile(!isMobile)}>
              {isMobile ? (<i className="fas fa-times"></i>) : ( <i className="fas fa-bars"></i>)}
            </button>
          </nav>
    </>
  )
}

export default Encabezado