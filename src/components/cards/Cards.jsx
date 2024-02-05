import { Link } from 'react-router-dom';
import './cards.css';


export const Cards = () => {

  const estiloIconos = { margin: '4px' };
  const disenioCard = {width: '17rem', background: "transparent", borderColor: "transparent"};

  return (
    <>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>


  

   <div className='container-card bg-cont-card'>
      <h1 className='title-card'>Bootcamps kodigo</h1>
      <p className='subtitle'>Conoce nuestra oferta académica</p>

      <div className="cards-container">
            <div className="card " style={disenioCard}>
              <img src="https://guapacho.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-13-at-4.32.20-PM.jpeg" className=" img-card" alt="..."/>
              <div className="card-body">
              <h5 className="card-title">Full Satck Jr</h5>
                   
              <p className='nivel'>Intermedio</p>

              {/* íconos */}
              <div>
                 <img src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" style={estiloIconos} width="56px" alt="" />
                 <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" style={estiloIconos}  width="56px" alt="" />
                 <img src="https://w7.pngwing.com/pngs/628/224/png-transparent-bootstrap-plain-wordmark-logo-icon.png"style={estiloIconos}  width="36px" alt="" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" style={estiloIconos}  width="45px" alt="" /><br />
                 <img src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1706716487/laravel-removebg-preview_rrndme.png" style={estiloIconos}  width="65px" alt="" />
                 <img src="https://assets.stickpng.com/images/58481791cef1014c0b5e4994.png" style={estiloIconos}  width="50px" alt="" />
                 <img src="https://e7.pngegg.com/pngimages/105/17/png-clipart-microsoft-azure-sql-database-microsoft-sql-server-cloud-computing-blue-text.png"  style={estiloIconos} width="45px" alt="" />
              </div>

               <Link to="/FullStackJunior">
                  <button className='btn-card'>Me interesa</button>
                </Link>
              </div>
            </div>
              <div className="card" style={disenioCard}>
                      <img className="img-card" src="https://img.freepik.com/fotos-premium/hombre-retrato-sonrisa-programador-computadora-lugar-trabajo-oficina-noche-cara-ti-codificador-masculino-o-persona-programando-codificacion-escritura-desarrollo-software-o-tecnologia-informacion_590464-197574.jpg" alt="..."/>
                      <div className="card-body">
                         <h5 className="card-title">Data Analyst Jr</h5>
                         <p className='nivel'>Intermedio</p>
                           {/* Iconos */}
                           <div>
                               <img src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1706722417/excel-removebg-preview_d6ayya.png" style={{marginRight: "20px"}} width="80px" alt="" />
                               <img src="https://seeklogo.com/images/P/python-logo-C50EED1930-seeklogo.com.png" width="44px" alt="" /><br />
                               <img src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1706720478/studio-removebg-preview_ymy9k4.png" style={{ paddingTop: "13px"}} width="70px" alt="" />
                               <img src="https://logohistory.net/wp-content/uploads/2023/05/Power-BI-Symbol.png" style={{marginLeft: "33px", marginTop:"13px"}} width="88px" alt="" ></img>
                           
                           </div>
                       
                        <Link to='/DataAnalystJunior'>
                            <button className='btn-card'>Me interesa</button>
                        </Link>
                      </div>
              </div>
             
              <div className="card" style={disenioCard}>
                      <img className="img-card"  src="https://cronicasfreelancer.com/wp-content/uploads/2019/08/aprender-a-programar-despues-de-los-30.jpg"  alt="..."/>
                  <div className="card-body">
                     <h5 className="card-title">Python developer</h5>
                     <p className='nivel'>Intermedio</p>
                   
                   {/* iconos */}
                   <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/2560px-Django_logo.svg.png"  style={{marginRight: "30px"}} width="60px" alt="" />
                    <img src="https://seeklogo.com/images/P/python-logo-C50EED1930-seeklogo.com.png"  width="44px" alt="" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png" style={{marginLeft: "33px"}} width="40px" alt="" />
                   </div>
                     <Link to='/PythonDeveloper'>
                       <button className='btn-card'>Me interesa</button>
                     </Link>
                </div>
              </div>

              <div className="card" style={disenioCard}>
                      <img className="img-card"  src="https://hoydia.com.ar/wp-content/uploads/2023/03/dplnews_mujeresprogramadoras_vr131219.jpg"  alt="..."/>
                  <div className="card-body">
                     <h5 className="card-title">Java developer</h5>
                     <p className='nivel'>Intermedio</p>
                   
                   {/* iconos */}
                   <div>
                    <img src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1706735564/java-removebg-preview_xclgh3.png"   width="76px" alt="" />
                  
                   </div>
    
                     <Link to='/JavaDeveloper'>
                       <button className='btn-card'>Me interesa</button>
                     </Link>
                </div>
              </div>
              </div>
              </div>
   </>
  )
}
