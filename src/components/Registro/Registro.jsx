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
    <section className="d-flex justify-content-end align-items-center p-5 m-5">
      <form
        className="bg-white p-5"
        onSubmit={handleSubmit(submitForm)}
        style={{ width: "600px", borderRadius: "30px", textAlign: "left" }}
      >
        <img src="https://res.cloudinary.com/dxdsq6qcw/image/upload/v1706502276/ckajt5rbnzkpctrgbgmv.png" style={{ width: '300px' }} alt="" />
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Ingresar nuevo correo de usuario</label>
          <input
            type="text"
            className={`form-control ${errors && errors.email ? 'is-invalid' : ''}`}
            name='email'
            {...register("email", { required: "Escribe un correo correcto", pattern: EmailValidation })}
            placeholder="Nombre Usuario"
          />
          {errors && errors.email && <span className="invalid-feedback">{errors.email.message}</span>}
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
          {errors && errors.password && <span className="invalid-feedback">{errors.password.message}</span>}
        </div>
       
        <button type="submit" className="btn btn-primary">Registrarse</button><br></br>
        <Link to={"/login"}>si tengo cuenta</Link>
      </form>
      
      {errors && errors.message && <span className='text-danger'>{errors.message}</span>}
      {error && <span className="text-danger">{error}</span>}
    </section>
    </div>
  )
}
