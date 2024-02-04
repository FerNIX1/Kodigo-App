import './descriptionPython.css'

export const DescriptionPython = () => {
    return (
        <>
           <div class="container descriptionPython">
        <span> Python es un lenguaje de programación muy popular en la industria del software ya que es un lenguaje de código abierto, fácil de aprender y capaz de 
            llevar a cabo cualquier tipo de proyecto. En este bootcamp de 4 meses aprenderás las habilidades esenciales de programación en Python, incluyendo conceptos 
            como diseño de bases de datos, refactoring, debuging y testing de código. Los conocimientos de este bootcamp te permitirán aspirar a los puestos laborales de 
            Junior Python Developer y Analista/Programador Python. </span>
          </div>
    <div className='container' style={{ display: 'flex', alignItems: 'center' }}>
    <img style={{ width: "9em", backgroundColor: "purple"}} src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1706933701/Captura_de_pantalla_926_eaolj8.png" alt="" />
    <div style={{ marginLeft: '1em' }}>
        <span style={{fontSize: "23px", color:"#700899"}}>Perfil del egresado</span><br />
        <span style={{fontSize: "36px", color: "#4d065b", fontWeight:"420"}}>Python Developer Jr</span>
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
            <span style={{ color: "#700877", fontWeight: "600" }}>Lunes | Miércoles | Viernes 7:00 pm a 9:00 pm</span>
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
            <span style={{ color: "#700877", fontWeight: "600" }}>Martes 7:00 pm a 9:00 pm</span>
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
            <span style={{ color: "#700877", fontWeight: "600" }}>Jueves 7:00 pm a 8:00 pm</span>
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