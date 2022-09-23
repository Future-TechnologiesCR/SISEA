import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "/src/css/Encabezado.css";

function Encabezado() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="hard">
          <img
            src="src/img/Logo.png"
            // width="100rem"
            // height="100rem"
            className="navbar-imagen"
          />
          <h4 className="logo">
            <b>SISEA Seguridad</b>
          </h4>
        </div>

<<<<<<< HEAD
=======
            <img src='src/img/Logo.png'  width="100rem" height="100rem" 
             className='navbar-imagen'
            />
>>>>>>> 449193a9ef3155683b1b99d9dbdc599222cd3ef8

        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <li>
            <Link smooth to="/#inicio" className="INICIO">
              Inicio
            </Link>
          </li>
          <li>
            <Link smooth to="/#servicios" className="SERVICIOS">
              Servicios
            </Link>
          </li>
          <li>
            <Link smooth to="/#contacto" className="CONTACTO">
              Contacto
            </Link>
          </li>
          <li>
            <Link to="/#Informacion" className="INFORMACION">
              Información
            </Link>
          </li>
          <li>
            <Link to="/#Publicaciones" className="PUBLICACIONES">
              Publicaciones
            </Link>
          </li>
          <li>
            <Link to="/#Contacto" className="CONTACTO">
              Contacto
            </Link>
          </li>
        </ul>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </nav>
    </>
  );
}

export default Encabezado;
