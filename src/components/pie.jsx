import '../css/pie.css'


  const year = new Date().getFullYear()

 function Pie() {

  return (
    <>
        <div className='pie-body'>
            <p>© {year}. Creado por <b><a href='https://futuretechnologiescr.netlify.app'>Future Technologies</a></b></p>
        </div>
    </>
  )
}

export default Pie