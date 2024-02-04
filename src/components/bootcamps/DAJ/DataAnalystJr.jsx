import { Footer } from "../../Footer/Footer"
import { Navbar } from "../../Navbar/Navbar"
import { DescriptionDataAnalyst } from "./description/DescriptionDataAnalyst"
import { Link } from 'react-router-dom';

export const DataAnalystJr = () => {
  return (
    <> 
       <Navbar/><br /><br /><br />
       <img src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1706824980/Captura_de_pantalla_912_wmkqhh.png"
    className='img-fluid'
    alt="" 
    style={{  width: "100%", height:"29em"}}/>


    <DescriptionDataAnalyst/>

<h1 className='container modules'>programa educativo</h1>
  
  <div className="container contenedor-fsj">
      <div>
      <h3 className='module-title'>Módulo 1: Fundamentos de Bases de Datos</h3>
      </div>
      <ul>
          <li>Conceptos de bases de datos relacionales: tablas, columnas, tipos de datos, relaciones, llaves, diagrama entidad-relación, 
            normalización, exploración de bases de datos relacionales.</li>
          <li>Fundamentos de Data Warehousing: bases de datos transaccionales y analíticas, principales enfoques y arquitecturas de data warehouse, el modelo dimensional.</li>
      </ul>
  </div>

  <div className="container contenedor-fsj">
      <div>
      <h3 className='module-title'>Módulo 2: Lectura y Extracción de Datos</h3>
      </div>
      <ul>
          <li>Lectura de datos en archivos planos con formato de texto.</li>
          <li>Creación de consultas en SQL: selección de columnas, uso de filtros, uso de funciones, construcción de joins (operación juntar), agrupación de datos, introducción a subconsultas.</li>
          <li>Extracción y carga de datos con SQL.</li>
      </ul>
  </div>

  <div className="container contenedor-fsj">
      <div>
      <h3 className='module-title'>Módulo 3: Análisis de Datos</h3>
      </div>
      <ul>
          <li>Tipos de análisis de datos y sus usos.</li>
          <li>Atributos, hechos y mediciones.</li>
          <li>Análisis dimensional: slicing & dicing, drill-down, drill-up, drill-across.</li>
          <li>Creación de reportes analíticos.</li>
          <li>Algunas técnicas básicas de análisis.</li>
      </ul>
  </div>

  <div className="container contenedor-fsj">
      <div>
      <h3 className='module-title'>Módulo 4: Presentación de Datos</h3>
      </div>
      <ul>
          <li>Introducción a herramientas de BI: Power BI</li>
          <li>Carga de datos y creación de modelos en Power BI</li>
          <li>Principios de diseño de tablas y gráficos efectivos</li>
          <li>Creación de dashboards</li>
          
      </ul>
  </div>

  
  <div className="container contenedor-fsj">
      <div>
      <h3 className='module-title'>Módulo 5: Programación con Datos</h3>
      </div>
      <ul>
          <li>Aplicaciones de álgebra lineal y estadística con Python</li>
          <li>Aplicaciones de programación en R para visualización de datos</li>
          <li>Conceptos de aplicación de Machine Learning para el análisis de datos</li>
     
      </ul>
  </div>

<Link to='/incripcion-Bootcamp'>
<div className='container'>
  <button className='btn-aplicar'>Aplica</button>
  </div><br />
  </Link>

<Footer/>
    
    </>
  )
}
