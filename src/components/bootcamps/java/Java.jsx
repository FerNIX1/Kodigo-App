import { Navbar } from '../../Navbar/Navbar'
import { Footer } from '../../Footer/Footer'
import { DescriptionJava } from './descriptionJava/DescriptionJava'
import { Link } from 'react-router-dom';
 
 export const Java = () => {
    return(
        <>
         <Navbar/><br /><br /><br />

    
         <img src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1706927954/Captura_de_pantalla_925_u3flwe.png"
         className='img-fluid'
         alt="" 
         style={{width: "100%"}}/>

         <DescriptionJava/>

<h1 className='container modules'>programa educativo</h1>
  
  <div className="container contenedor-fsj">
      <div>
      <h3 className='module-title'>Módulo 1: JAVA Y ALGORITMOS</h3>
      </div>
      <ul>
          <li>Historia y generalidades de Java</li>
          <li>Instalación y configuración de Java</li>
          <li>Instalación y configuración de IDE</li>
          <li>Conceptos básicos de Java: coding style, sintaxis, tipos de datos, modificadores de acceso, decisiones, ciclos</li>
          <li>Uso de memorias de Java</li>
          <li>Excepciones</li>
          <li>Introducción a clases y objetos</li>
          <li>Notación BIG O y determinación de la complejidad</li>
          <li>Algoritmos de búsqueda</li>
          <li>Algoritmos de ordenamiento</li>
      </ul>
  </div>

  <div className="container contenedor-fsj">
      <div>
      <h3 className='module-title'>Módulo 2: CONCEPTOS EXTENDIDOS Y AVANZADOS DE PROGRAMACION ORIENTADA A OBJETOS Y JAVA</h3>
      </div>
      <ul>
         <li>Introducción al concepto de programación orientada a objetos mediante abstracción</li>
         <li>Pilares de la programación orientada a objetos: abstracción, encapsulamiento, herencia, polimorfismo</li>
         <li>Asociación entre composición y herencia</li>
         <li>Descripción y aplicación de los principios SOLID</li>
         <li>GRASP</li>
         <li>Patrones creacionales</li>
         <li>Patrones estructurales</li>
         <li>Patrones de comportamiento</li>
         <li>Antipatrones </li>
         <li>Conceptos de refactorización</li>
         <li>Pruebas unitarias: JUnit y Mockito</li>
         <li>Bad smells</li>
         <li>Catálogo de técnicas de refactorización</li>
      </ul>
  </div>

  <div className="container contenedor-fsj">
      <div>
      <h3 className='module-title'>Módulo 3:REST - APIS CON JAVA</h3>
      </div>
      <ul>
       <li>Conceptos de bases de datos</li>
       <li>Bases de datos relacionales</li>
       <li>Modelo entidad - relación</li>
       <li>Normalización de bases de datos</li>
       <li>Introducción a SQL</li>
       <li>Bases de datos no relacionales</li>
       <li>Bases de datos con Java: JDBC, JPA, Hibernate</li>
       <li>Creación de un CRUD con los repositories</li>
       <li>Introducción al patrón MVC y sus componentes</li>
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