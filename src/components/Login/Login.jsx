import { useForm } from 'react-hook-form';
import { EmailValidation, MinPassword, MaxPassword } from '../../utils/Validation';
import "./Login.css"
export const Login = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const submitForm = (data) => {
    console.log(data);
  }
  return (
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
          placeholder='Introduce tu contraseña'
        />
        {errors && errors.password && <span className="invalid-feedback">{errors.password.message}</span>}
      </div>
      <button type="submit" className="btn btn-primary">Entrar</button>
    </form>
    {errors && errors.message && <span className='text-danger'>{errors.message}</span>}
  </section>
  )
}
