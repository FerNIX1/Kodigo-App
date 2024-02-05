import { useForm } from 'react-hook-form';
import { EmailValidation, MinPassword, MaxPassword } from '../../utils/Validation';
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import { app } from '../../utils/FirebaseConfig';
import {useNavigate} from "react-router-dom";
import { useState } from 'react';
import {Link} from "react-router-dom";
import "../Registro/Registro.css"
export const Registro = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [error,seterror]=useState();
  const submitForm = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth,data.email,data.password);
     navigate("/login");
 } catch (error) {
     seterror(error.message.replace('FireBase','E-Comerce error'));
 }
  }

  return (
    <div className="bg-login">
  <section className="d-flex justify-content-center align-items-center p-3 p-md-5">
    <form
      className="bg-white p-4 p-md-5"
      onSubmit={handleSubmit(submitForm)}
      style={{ borderRadius: "15px", textAlign: "left" }}
    >
      <div className="text-center mb-4">
        <img src="https://res.cloudinary.com/dxdsq6qcw/image/upload/v1706502276/ckajt5rbnzkpctrgbgmv.png" className="img-fluid" alt="" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Ingresar nuevo correo de usuario</label>
        <input
          type="text"
          className={`form-control ${errors && errors.email ? 'is-invalid' : ''}`}
          name='email'
          {...register("email", { required: "Escribe un correo correcto", pattern: EmailValidation })}
          placeholder="Nombre Usuario"
        />
        {errors && errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
        <input
          type="password"
          className={`form-control ${errors && errors.password ? 'is-invalid' : ''}`}
          name='password'
          {...register("password", { required: "La contraseña es requerida", maxLength: MaxPassword, minLength: MinPassword })}
          placeholder='Crea una contraseña'
        />
        {errors && errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
      </div>
     
      <button type="submit" className="btn btn-primary">Registrarse</button>
      <div className="mt-2">
        <Link to={"/login"}>¿Ya tienes cuenta? Inicia sesión aquí</Link>
      </div>
    </form>
    
    {errors && errors.message && <div className='text-danger mt-3'>{errors.message}</div>}
    {error && <div className="text-danger mt-3">{error}</div>}
  </section>
</div>

  )
}
