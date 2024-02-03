import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Welcome = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const location = useLocation();
    const { email } = location.state || {}; // Obtener el correo del estado de la ruta
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      // Hacer algo con el correo
      console.log(`Correo del parámetro de la ruta: ${email}`);
    }, [email]);
  return (
    <section>
    <div className="container mt-5">
      <h1>Hola Bienvenido, {email}</h1>
      <hr />
    </div>
  </section>
  )
}
