import "/src/css/Servicios.css";

function Servicios() {
  return (
    <>
      <div id="Servicios" className="MAIN">
        <h1 className="titulo-servicios">Servicios</h1>
        <ul className="cards">
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img className="img-card" src="src/img/servicio1.png" />
              </div>
              <div className="card_content">
                <h2 className="card_title">Sistemas de video</h2>
                <p className="card_text">
                  Brindamos soluciones tecnológicas con equipos de alta calidad
                  para la visualización, captura y almacenamiento en sistemas de
                  CCTV
                </p>
              </div>
            </div>
          </li>

          <li className="cards_item">
            <div className="card">
              <div className="card_image">
              <img className="img-card" src="src/img/servicio2.png" />
              </div>
              <div className="card_content">
                <h2 className="card_title">Sistemas de Alarma</h2>
                <p className="card_text">
                  Ponemos a disposición de nuestros clientes una amplia línea de
                  equipos, soluciones y asesoría para la protección de sus
                  bienes e inmuebles, con sistemas de última tecnología contra
                  ROBO – ASALTO – INCENDIO.
                  

                </p>
              </div>
            </div>
          </li>

          <li className="cards_item">
            <div className="card">
              <div className="card_image">
              <img className="img-card" src="src/img/servicio3.png" />
              </div>
              <div className="card_content">
                <h2 className="card_title">Monitoreo 24/7</h2>
                <p className="card_text">
                Contamos con un Centro de Monitoreo de alta calidad con
                  personal y equipos 24/7, que ofrecen a nuestros clientes toda
                  la atención en el procesamiento y análisis de los eventos que
                  los sistemas de seguridad nos envían, para la correcta
                  atención de forma oportuna

                </p>
              </div>
            </div>
          </li>

          <li className="cards_item">
            <div className="card">
              <div className="card_image">
              <img className="img-card" src="src/img/servicio4.png" />
              </div>
              <div className="card_content">
                <h2 className="card_title">Respuesta Armada</h2>
                <p className="card_text">
                Nuestro personal de seguridad motorizado disponible 24/4, que
                  estará atento para atender el llamado de emergencia de los
                  sistemas de seguridad, personal que se encuentra debidamente
                  equipado y reglamentado ante el M.S.P.
                </p>
              </div>
            </div>
          </li>

          <li className="cards_item">
            <div className="card">
              <div className="card_image">
              <img className="img-card" src="src/img/servicio5.png" />
              </div>
              <div className="card_content">
                <h2 className="card_title">Mantenimiento</h2>
                <p className="card_text">
                Todos los equipos incluidos en el servicio brindado por SISEA
                  incluyen sin costo adicional el respectivo mantenimiento.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Servicios;
