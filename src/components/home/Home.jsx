import React from 'react'
import {Cards} from '../cards/Cards'
import './home.css'



export const Home = () => {
  
  return (
    <>  
    <div className="image-contenedor">
      <img className='img-fluid' src="https://cdn.www.gob.pe/uploads/document/file/3623952/standard_Talentos%20usando%20la%20PC.%20%281%29.jpg.jpg" alt="" width="100%" style={{height:'700px'}} />
      <div className="degradado"></div>
    </div>
  
    <div className="contenido">
      <div className="frase1">
        <span>Invierte en tu</span><br />
      </div>
      <div className="frase2">
        <span>Futuro</span>
      </div>
      <div className="frase3">
        <span>Nuestros bootcamps te preparan para tener un mejor futuro</span>
      </div>
      <button className='btn-home'>Aplica</button>
    </div>
    
  {/* Segunda parte */}
    <div className='image-contenedor2'>
  <img  src="https://media.istockphoto.com/id/1273929462/es/foto/fondo-abstracto-de-movimiento-borroso-desenfocado-p%C3%BArpura.jpg?s=612x612&w=0&k=20&c=kG5W3eCBDEfepltAf8wzDouK2OJuani2NMPOJR2C9jk=" alt="" style={{width:"100%", height:'400px'}} />
  
  <div className='container'>
  <div className="contenido2">
    <div className="card
     text-bg-light mb-1 card-image2" >  
      <div className="card-body">
    
        <img
      src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1706736311/descarga-removebg-preview_u7pzx2.png"
      alt="Descripción de la imagen"
      className="img-fluid" 
    />
    <div className='description'>
      <span>Somos una academia de tecnologia creativa</span>
    </div>
    <div className='descripcion'>
      <span>Somos un emprendimiento social y nuestro objetivo es acelerar tu aprendizaje, empoderar tus habilidades y arrancar tu carrera como programador/a software. En Kodigo impartimos bootcamps diseñados a tus necesidades de aprendizaje y adaptados a lo requerido por empresas top en tecnología.</span>
    </div>    
      </div>
    </div>
  </div>
  </div>
</div>


{/* 3 */}
<div style={{ padding: "5em", paddingBottom: "30px", boxSizing: "border-box" }}>
  
<div className='container'>
    <div className='bootcamp0'>
    <span>¿Qué es un</span><br />
    <span className='bootcamp'>Bootcamp?</span>
    </div>

    <div style={{ display: "flex", flexDirection: "column", alignItems: "left", paddingLeft:"23px"}}>
      <span style={{ fontSize: "20px", paddingTop: "20px" }}>
        Los Bootcamps son cursos intensivos que dotan a los estudiantes de una excelente preparación para saltar al mercado laboral. 
        Las características principales son las clases intensivas y un temario muy concentrado.
      </span>
    </div>
  </div>
</div>

      </>
  )
}
