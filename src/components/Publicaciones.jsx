import '../css/Publicaciones.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Publicaciones() {

    return (
        <>
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




            {/* <div className='publicaciones' id='Publicaciones'>
        <h1 className='titulo-publi'>Publicaciones</h1>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="5000">
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img src="src/img/publi3.jpg" className="publicacion" alt="publicacion3"/>
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img src="src/img/publi4.jpg" className="publicacion" alt="publicacion4"/>
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img src="src/img/publi5.jpg" className="publicacion" alt="publicacion5"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

        </div>
    </div> */}
        </>
    )
}

export default Publicaciones