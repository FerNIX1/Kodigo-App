/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getCourseByUserEmail } from "../../utils/AccionesFirebase";
export const Welcome = () => {
  const location = useLocation();
  const { email } = location.state || {};
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const userCourse = await getCourseByUserEmail(email);
        setCourse(userCourse);
      } catch (error) {
        console.error('Error al obtener el curso:', error);
      }
    };

    if (email) {
      fetchCourse();
    }
  }, [email]);
  const courseNames = {
    1: "Full Stack Jr",
    2: "Data Analyst Jr",
    3: "Python Developer",
    4: "Java Developer",
  };
  const courseImages = {
    1: "https://res.cloudinary.com/dxdsq6qcw/image/upload/v1707155711/mdi9mw9r1dtgntb8jpfd.png",
    2: "https://res.cloudinary.com/dxdsq6qcw/image/upload/v1707155766/by4uvhxrphez3kuegjdp.webp",
    3: "https://res.cloudinary.com/dxdsq6qcw/image/upload/v1707155945/keguvkucnbjup8tcrjsd.jpg",
    4: "https://res.cloudinary.com/dxdsq6qcw/image/upload/v1707156435/lmvyayq0vmxgbrqztlan.jpg",
  };

  return (
    <section>
      <div className="container mt-5">
        <h1>Hola Bienvenido, {email}</h1>
        <h3>Vista General del Curso</h3>
        <hr />
        <section>
      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <hr />
            {course !== null ? (
              <>
                <img src={courseImages[course]} alt={courseNames[course]} className="card-img-top" />
                <h2 className="card-subtitle mb-2 text-muted">{courseNames[course]}</h2>
              </>
            ) : (
              <p className="card-text">No estás inscrito en ningún curso en este momento. Ve a nuestro Formulario de inscripción que está en nuestros cursos <a href="/inscripcion-Bootcamp">ir al formulario</a> <br></br>o entre en Aplica en la barra de navegacion</p>
            )}
          </div>
        </div>
      </div>
    </section>
      </div>
    </section>
  );
};
