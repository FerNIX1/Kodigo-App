import { useForm } from 'react-hook-form';
import { EmailValidation, MinPassword, MaxPassword } from '../../utils/Validation';
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import { app } from '../../utils/FirebaseConfig';
import "./Login.css"
import {Link,useNavigate} from "react-router-dom";
import { addUser } from '../../utils/AccionesFirebase';
export const Login = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const auth = getAuth(app);
  const submitForm = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      const userAdded = await addUser(data.email, data.password);

      console.log("todo bien");

      if (userAdded) {
        navigate('/welcome', { state: { email: data.email } });
      } else {
        console.log("El usuario ya existe en la base de datos");
        // Puedes mostrar un mensaje o hacer algo si el usuario ya existe
      }
    } catch (error) {
      console.log(error.message.replace('FireBase', 'E-Commerce error'));
    }
  };
  return (
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
        placeholder='Introduce tu contraseña'
      />
      {errors && errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
    </div>
    
    <button type="submit" className="btn btn-primary">Entrar</button>
    <div className="mt-2">
      <Link to={"/Registro"}>No tienes cuenta, regístrate aquí</Link>
    </div>
  </form>
  {errors && errors.message && <div className='text-danger mt-3'>{errors.message}</div>}
</section>

  )
}
