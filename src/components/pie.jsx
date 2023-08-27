import '../css/pie.css'


  const year = new Date().getFullYear()

 function Pie() {

  return (
    <>
        <div className='pie-body'>
            <p>© {year} Creado por <b><a href='https://futuretechcr.com'>Future Technologies CR</a></b></p>
        </div>
    </>
  )
}

export default Pie