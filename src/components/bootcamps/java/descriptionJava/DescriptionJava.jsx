import './descriptionJava.css'

export const DescriptionJava = () => {
    return (
        <>
        
        <div class="container description-Java">
        <span>Java Developer es un Bootcamp de 15 semanas enfocado en los fundamentos de la arquitectura de Software en donde aprenderás a programar con JAVA, 
            uno de los lenguajes de programación más populares a nivel internacional. En este programa intensivo, explorarás desde lo básico hasta principios SOLID,
             centrados en buenas prácticas. Con Java y Spring Boot, crearás REST APIs sólidas tras lecciones interactivas, proyectos y retroalimentación personalizada. 
             Desarrollarás habilidades esenciales y estarás listo para enfrentar desafíos en el desarrollo moderno de software Java.</span>
          </div>
    <div className='container' style={{ display: 'flex', alignItems: 'center' }}>
    <img style={{ width: "9em", backgroundColor: "purple"}} src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1706933701/Captura_de_pantalla_926_eaolj8.png" alt="" />
    <div style={{ marginLeft: '1em' }}>
        <span style={{fontSize: "23px", color:"#700899"}}>Perfil del egresado</span><br />
        <span style={{fontSize: "36px", color: "#4d065b", fontWeight:"420"}}>Java Developer</span>
    </div>
</div><br />




    <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
  {/* primeros 3  */}
  <div className="responsive-container">
    {/* 1 */}
    <div className="grid-container">
      <div className="grid-item">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img style={{ width: "6em", margin: "12px" }} src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1706935152/1_liljlo.png" alt="Imagen 1" />
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
          <img style={{ width: "6em", margin: "12px" }} src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1706935786/Captura_de_pantalla_927_dsby2d.png" alt="Imagen 1" />
          <div className='container'>
            <span style={{ fontSize: "30px", color: "#4d065b", fontWeight: "420" }}>Clases de Programación</span><br />
            <span style={{ color: "#700877", fontWeight: "600" }}>Lunes, Miércoles y Viernes 6:00 pm a 8:00 pm</span>
          </div>
        </div>
      </div>
    </div>

    {/* 3 */}
    <div className="grid-container">
      <div className="grid-item">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img style={{ width: "6em", margin: "12px" }} src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1706935786/Captura_de_pantalla_927_dsby2d.png" alt="Imagen 1" />
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
          <img style={{ width: "6em", margin: "12px" }} src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1706937428/Captura_de_pantalla_928_jjqthw.png" alt="Imagen 1" />
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
          <img style={{ width: "6em", margin: "12px" }} src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1706937601/Captura_de_pantalla_930_cr27q6.png" alt="Imagen 1" />
          <div className='container'>
            <span style={{ fontSize: "30px", color: "#4d065b", fontWeight: "420" }}>Clases de Hablidades para</span><br />
            <span style={{ fontSize: "30px", color: "#4d065b", fontWeight: "420" }}> la emppleabilidad </span><br />
            <span style={{ color: "#700877", fontWeight: "600" }}>Jueves 4:00 pm a 5:00 pm</span>
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
            <span style={{ color: "#700877", fontWeight: "600" }}></span>Inicio<br />
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