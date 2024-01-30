import {Cards} from '../cards/Cards'
import { Footer } from '../Footer/Footer'
import './home.css'

export const Home = () => {
  
  return (
    <>
   <div className="contenedor">
    <div className="imagen-contenedor">
  
      <img src="https://cdn.www.gob.pe/uploads/document/file/3623952/standard_Talentos%20usando%20la%20PC.%20%281%29.jpg.jpg" alt="" width="100%" />
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
         
        
         <button>Aplica</button>
        </div>
    </div>

       <Cards/>

       <Footer />
    
    </>
  )
}
