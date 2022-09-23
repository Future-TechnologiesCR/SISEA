import '../css/Publicaciones.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Publicaciones() {

    return (
        <>
        <div id='Publicaciones'>
            <h1 className='titulo-publicaciones'>Publicaciones</h1>
                <div className="publicaciones" style={{ padding: '15px'}}>
                <div className="carousel-wrapper">
                    <Carousel infiniteLoop autoPlay stopOnHover showThumbs={false} dynamicHeight={true}>
                        <div>
                            <img src="src/img/publi1.jpg" className="publicacion" alt="publicacion1" />

                        </div>
                        <div>
                            <img src="src/img/publi2.jpg" className="publicacion" alt="publicacion2" />

                        </div>
                        <div>
                            <img src="src/img/publi3.jpg" className="publicacion" alt="publicacion3" />
                        </div>
                        <div>
                            <img src="src/img/publi4.jpg" className="publicacion" alt="publicacion4" />
                        </div>
                        <div>
                            <img src="src/img/publi5.jpg" className="publicacion" alt="publicacion5" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
        </>
    )
}

export default Publicaciones