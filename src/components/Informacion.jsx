import '/src/css/Informacion.css'

function Informacion() {

  return (
    <>  
    <div className='informacion' id='Informacion'>
        <img src='src/img/info.png' className='info-img'/>
        <div className='info'>
          <h1 className='titulo-info'>Quienes somos</h1>
          <hr />
          <h5 className='sup-titulo'>Nuestra Misión</h5>
          <hr />
          <p className='info-contenido'>Proveer  a nuestros clientes un servicio de calidad, en materia de seguridad electrónica, para lograrlo incorporamos equipos y herramientas  de última tecnología y en constante evolución , contamos con un selecto grupo de colaboradores identificados en satisfacer las necesidades de nuestros clientes.</p>
          <h5 className='sup-titulo'>Visi&oacute;n</h5>
          <p className='info-contenido'>Ser empresa líder en materia de seguridad electrónica y física a nivel nacional, ofreciendo servicios de alta competitividad para satisfacer las exigencias de nuestros clientes.</p>
          <h5 className='sup-titulo'>Valores</h5>
          <div className="valores">
            <ul>
              {/* use icons */}
              <li><i className="fas fa-check"></i>seriedad</li>
              <li><i className="fas fa-check"></i>Responsabilidad</li>
              <li><i className="fas fa-check"></i>Trabajo en Equipo</li>
              <hr />
              <li><i className="fas fa-check"></i>Compromiso con los Resultados</li>
              <li><i className="fas fa-check"></i>Calidad de Servicio</li>
              <li><i className="fas fa-check"></i>Responsabilidad Social</li>

            </ul>
          </div>



          {/* <div className='valores'>
              <div className='valores1'>
                <p>✓ Seriedad</p>
                <p>✓ Responsabilidad</p>
                <p>✓ Trabajo en equipo</p>
              </div>
              <div className='valores2'>
                <p>✓ Compromiso con los resultados</p>
                <p>✓ Calidad de Servicio</p>
                <p>✓ Responsabilidad Social</p>
              </div>  
            </div> */}
        </div>
    </div>
    </>
  )
}

export default Informacion