import React from 'react'

export default function Tarjeta({ img, title, children}) {
  return (
  <>
    <div className="card-catalogo"
      style={{ margin: "0 0 50px 0" }}>
      <img className="img-card-catalogo" src={img}
      onError={(e) => { e.target.onerror = null; e.target.src = "/src/img/Logo.png" }} />
      <h3 className="card-titulo-catalogo">{title}</h3>
      <hr />
      <div className="card-body-catalogo">
        <p>{children}</p>
      </div>
    </div>
  </>
  )
}