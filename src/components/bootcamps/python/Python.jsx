import { Navbar } from "../../Navbar/Navbar"
import { Footer } from '../../Footer/Footer'
import { DescriptionPython } from "./descriptionPython/DescriptionPython"
import { Link } from 'react-router-dom';
import './python.css'



export const Python = () => {
    return (
      <>
          <Navbar/><br /><br /><br />

          <img src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1706923228/Captura_de_pantalla_924_npph43.png"
          className='img-fluid'
          alt="" 
          style={{width: "100%"}}/>

          <DescriptionPython/>


          <h1 className='container modules'>programa educativo</h1>
  
  <div className="container contenedor-python">
      <div>
      <h3 className='module-title'>Módulo 1: Desarrollo de features</h3>
      </div>
      <ul>
          <li>Analizar los requerimientos y criterios de aceptación en el ticket, según el procedimiento establecido.</li>
          <li>Evaluar las soluciones preexistentes en el mismo proyecto o fuera de este, según el procedimiento establecido.</li>
          <li>Implementar e integrar el feature, siguiendo el procedimiento establecido. </li>
               </ul>
  </div>

  <div className="container contenedor-python">
      <div>
      <h3 className='module-title'>Módulo 2: Testing de código</h3>
      </div>
      <ul>
          <li>Delimitar el core de la aplicación, con base a modelos y aspectos evaluados de los requerimientos.</li>
          <li>Escribir los test para lograr la cobertura meta, siguiendo el procedimiento establecido.</li>
          <li>Crear o modificar los features, asegurando el cumplimiento de los test.</li>
      </ul>
  </div>

  <div className="container contenedor-python">
      <div>
      <h3 className='module-title'>Módulo 3: Debuging de código</h3>
      </div>
      <ul>
          <li>Revisar el flujo que la aplicación sigue en la ejecución, monitoreando la memoria y el procesador y buscando los bugs.</li>
          <li>Revisar el performance de la aplicación, garantizando el rendimiento de la meta.</li>
      </ul>
  </div>

  <div className="container contenedor-python">
      <div>
      <h3 className='module-title'>Módulo 4: Refactorización de código</h3>
      </div>
      <ul>
          <li>Identificar oportunidades de refactoring, buscando aumentar la calidad del código.</li>
          <li>Ejecutar el refactor, dando cumplimiento a las políticas establecidas.</li>
          
      </ul>
  </div>

  
  <div className="container contenedor-python">
      <div>
      <h3 className='module-title'>Módulo 5: Versionamiento de código</h3>
      </div>
      <ul>
          <li>Realizar el repo, asegurando que inician en el mismo punto.</li>
          <li>Establecer Branching Strategy, buscando minimizar conflictos.</li>
          <li>Definir las políticas (gitamgis; naning, comit size), según lineamientos establecidos.</li>
              </ul>
  </div>

  <div className="container contenedor-python">
      <div>
      <h3 className='module-title'>Módulo 6: Diseño de bases de datos
</h3>
      </div>
      <ul>
      <li>Modelar el diagrama E-R contemplando las entidades necesarias.</li>
      <li>Normalizar la base de datos, según las necesidades del proyecto.</li>
      <li>Normalizar la base de datos, según las necesidades del proyecto.</li>
         
      </ul>
  </div>

  <div className="container contenedor-python">
      <div>
      <h3 className='module-title'>Módulo 6: Realización de presentaciones de avance
</h3>
      </div>
      <ul>
      <li>Comunicar los avances del proyecto, en el idioma indicado y mostrando confianza y conocimiento del proceso.</li>
      <li>Tomar nota del feedback, buscando solventar las observaciones e incorporar las recomendaciones dadas.</li>

         
      </ul>
  </div>


  <Link to='/inscripcion-Bootcamp'>
     <div className='container'>
     <button className='btn-aplicar'>
        Aplica
     </button>
     </div><br />
  </Link>

   <Footer/>
      </>
    )
}