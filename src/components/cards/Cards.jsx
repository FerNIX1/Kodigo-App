import { Link } from 'react-router-dom';
import './cards.css';


export const Cards = () => {
  return (
    <>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

   <div className='container-card bg-white'>
      <h1 className='title-card'>Bootcamps</h1>
      <h3>Conoce nuestra oferta académica</h3>

      <div id="carouselExample" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card" style={{ width: '21rem' }}>
              <img src="https://guapacho.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-13-at-4.32.20-PM.jpeg" className="card-img-top img-card" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                <Link to='/dataAnalistJr'>
                  <button className='btn-card'>Me interesa</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
          <div className="card" style={{ width: '21rem' }}>
                      <img className="img-card" src="https://img.freepik.com/fotos-premium/hombre-retrato-sonrisa-programador-computadora-lugar-trabajo-oficina-noche-cara-ti-codificador-masculino-o-persona-programando-codificacion-escritura-desarrollo-software-o-tecnologia-informacion_590464-197574.jpg" alt="..."/>
                  <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                     <Link to='/fullStackJunior'>
                       <button className='btn-card'>Me interesa</button>
                     </Link>
                </div>
              </div>
              </div>
              <div className="carousel-item active">
              <div className="card" style={{ width: '21rem' }}>
                      <img className="img-card"  src="https://cronicasfreelancer.com/wp-content/uploads/2019/08/aprender-a-programar-despues-de-los-30.jpg"  alt="..."/>
                  <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                     <Link to='/fullStackJunior'>
                       <button className='btn-card'>Me interesa</button>
                     </Link>
                </div>
              </div>
              </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    </>
  )
}
