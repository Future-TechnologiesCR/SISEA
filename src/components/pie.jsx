import '../css/pie.css'


const year = new Date().getFullYear()

function Pie() {

  return (
    <>
      <div className='pie-body'
        style={{
          color: 'white',
        }}
      >
        <p>© {year} Creado por <b><a href='https://futuretechcr.com'>Future Technologies CR</a></b></p>

        {/* SISEA
        Curridabat, San José, Costa Rica */}

      </div>
    </>
  )
}

export default Pie