import { Footer } from '../../Footer/Footer'
import { Navbar } from '../../Navbar/Navbar'
import { DescriptionFSJ } from './description/DescriptionFSJ'
import { Link } from 'react-router-dom';

import './FSJ.css'

export const FSJ = () => {
  return (
    <>
    <Navbar/><br /><br /><br />

    
    <img src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1706760973/Captura_de_pantalla_911_kyvkta.png"
    className='img-fluid'
    alt="" 
    style={{width: "100%"}}/>

   <DescriptionFSJ/>
 
   <h1 className='container modules'>programa educativo</h1>
  
    <div className="container contenedor-fsj">
        <div>
        <h3 className='module-title'>Módulo 1: Fundamentos de desarrollo web</h3>
        </div>
        <ul>
            <li>Introducción al Desarrollo Web</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Git y GitHub</li>
        </ul>
    </div>

    <div className="container contenedor-fsj">
        <div>
        <h3 className='module-title'>Módulo 2: Fundamentos de JavaScript</h3>
        </div>
        <ul>
            <li>Introducción a JavaScript</li>
            <li>Estructuras de Control (Condicionales, Repetitivas) y Funciones</li>
            <li>Métodos String & Array</li>
            <li>Document Object Model (Práctica)</li>
            <li>Introducción a TypeScript</li>
            <li>Programación Orientada a Objetos</li>
        </ul>
    </div>

    <div className="container contenedor-fsj">
        <div>
        <h3 className='module-title'>Módulo 3: Desarrollo Frontend con React</h3>
        </div>
        <ul>
            <li>Fundamentos de React JS</li>
            <li>Arquitectura de React JS</li>
            <li>React Hooks</li>
            <li>React Fetch y Axios</li>
            <li>React Router DOM</li>
            <li>React Redux</li>
            <li>Buenas Prácticas de Desarrollo Frontend</li>
        </ul>
    </div>

    <div className="container contenedor-fsj">
        <div>
        <h3 className='module-title'>Módulo 4: Fundamentos de PHP y Programación Backend</h3>
        </div>
        <ul>
            <li>Sintaxis PHP</li>
            <li>Estructuras de Control y Funciones en PHP</li>
            <li>Introducción a Estructuras de Datos</li>
            <li>Algoritmos de Búsqueda y Ordenamiento</li>
            
        </ul>
    </div>

    
    <div className="container contenedor-fsj">
        <div>
        <h3 className='module-title'>Módulo 5: Programación Orientada a objetos y Gestión de Datos</h3>
        </div>
        <ul>
            <li>Programación Orientada a Objetos en PHP</li>
            <li>UML Orientación a Objetos</li>
            <li>Principios SOLID</li>
            <li>Patrones de Diseño</li>
            <li>Bases de Datos SQL</li>
            <li>Patrones de Arquitectura MVC</li>
            <li>Introducción a Frameworks PHP</li>
            
        </ul>
    </div>

    <div className="container contenedor-fsj">
        <div>
        <h3 className='module-title'>Módulo 6: Desarrollo Backend Avanzado y Proyecto Final</h3>
        </div>
        <ul>
        <li>Arquitectura de Laravel</li>
        <li>Query Builder en Laravel</li>
        <li>Implementación de APIs con Laravel</li>
        <li>Vistas con Blade en Laravel</li>
        <li>Buenas Prácticas de Desarrollo Backend</li>
        <li>Proyecto Final de Desarrollo Backend</li>
            
        </ul>
    </div>
  

    <Link to='/incripcion-Bootcamp'>
      <div className='container'>
      <button className='btn-aplicar' 
      >Aplica
      </button>
      </div><br />
    </Link>

<Footer/>
    </>
  )
}
