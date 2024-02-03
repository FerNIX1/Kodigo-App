import './descriptionDataAnalyst.css'

export const DescriptionDataAnalyst = () => {
    return(
        <>
         <div class="container description-daj">
        <span>Data Analyst Jr. es una capacitación intensiva de 18 semanas que incluye la enseñanza de habilidades prácticas en Python, 
            Power BI y manejo de bases de datos, entre otras tecnologías. Este bootcamp tiene un enfoque práctico ya que al finalizar 
            el programa de estudios serás capaz de ejecutar las tareas y crear soluciones requeridas. Los principios y técnicas que se
           estudiarán han sido seleccionados con el objetivo de que puedas desarrollar una base relevante y sólida para ingresar al mundo del análisis de datos. Las herramientas que se emplearán están entre las más reconocidas y utilizadas en el mundo de analítica de datos.  </span>
         </div>
    <div className='container' style={{ display: 'flex', alignItems: 'center' }}>
    <img style={{ width: "9em", backgroundColor: "purple"}} src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1706933701/Captura_de_pantalla_926_eaolj8.png" alt="" />
    <div style={{ marginLeft: '1em' }}>
        <span style={{fontSize: "23px", color:"#700899"}}>Perfil del egresado</span><br />
        <span style={{fontSize: "36px", color: "#4d065b", fontWeight:"420"}}>Data Analyst Jr.</span>
    </div>
</div><br />




<div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
  {/* primeros 3  */}
  <div className="responsive-container">
    {/* 1 */}
    <div className="grid-container">
      <div className="grid-item">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img style={{ width: "6em", margin: "12px" }} src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1706935152/1_liljlo.png" alt="Imagen 1 de 1" />
          <div className='container'>
            <span style={{ color: "#700877", fontWeight: "600"}}>Modalidad</span><br />
            <span style={{ fontSize: "30px", color: "#4d065b", fontWeight: "420" }}>Virtual</span>
          </div>
        </div>
      </div>
    </div>

    {/* 1*/}
    <div className="grid-container">
      <div className="grid-item">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img style={{ width: "6em", margin: "12px" }} src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1706935786/Captura_de_pantalla_927_dsby2d.png" alt="Imagen 2 de 1" />
          <div className='container'>
            <span style={{ fontSize: "30px", color: "#4d065b", fontWeight: "420" }}>Clases de Programación</span><br />
            <span style={{ color: "#700877", fontWeight: "600" }}>Lunes y Miércoles 6:00 pm a 9:00 pm</span>
          </div>
        </div>
      </div>
    </div>

    {/* 3 */}
    <div className="grid-container">
      <div className="grid-item">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img style={{ width: "6em", margin: "12px" }} src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1706935786/Captura_de_pantalla_927_dsby2d.png" alt="Imagen 3 de 1" />
          <div className='container'>
            <span style={{ fontSize: "30px", color: "#4d065b", fontWeight: "420" }}>Clases de Refuerzo</span><br />
            <span style={{ color: "#700877", fontWeight: "600" }}>Horario asíncrono</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Segunda fila*/}
  <div className="responsive-container">
    {/*1*/}
    <div className="grid-container">
      <div className="grid-item">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img style={{ width: "6em", margin: "12px" }} src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1706937428/Captura_de_pantalla_928_jjqthw.png" alt="Imagen 1 de 2" />
          <div className='container'>
            <span style={{ color: "#700877", fontWeight: "600"}}>Duración</span><br />
            <span style={{ fontSize: "30px", color: "#4d065b", fontWeight: "420" }}>4 meses</span>
          </div>
        </div>
      </div>
    </div>

    {/* 2*/}
    <div className="grid-container">
      <div className="grid-item">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img style={{ width: "6em", margin: "12px" }} src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1706937601/Captura_de_pantalla_930_cr27q6.png" alt="Imagen 2 de 2" />
          <div className='container'>
            <span style={{ fontSize: "30px", color: "#4d065b", fontWeight: "420" }}>Clases de HPE</span><br />
            <span style={{ color: "#700877", fontWeight: "600" }}>Martes 7:00 pm a 8:00 pm</span>
          </div>
        </div>
      </div>
    </div>

    {/* 3*/}
    <div className="grid-container">
      <div className="grid-item">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img style={{ width: "6em", margin: "12px" }} src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1706996380/Captura_de_pantalla_929_luaill.png" alt="Imagen 3 de 2" />
          <div className='container'>
            <span style={{color: "#700877", fontWeight: "600" }}></span>Inicio<br />
            <span style={{fontSize: "30px", color: "#4d065b", fontWeight: "420" }}>Lanzamiento 2024</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        
        </>
    )
}