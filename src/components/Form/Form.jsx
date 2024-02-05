import { useForm } from 'react-hook-form'
import { EmailValidation, PhoneValidation } from '../../utils/Validation'
import {addInscripcion} from "../../utils/AccionesFirebase"

export const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = async (data) => {
    // Call the addUser function to add the form data to Firebase
    const result = await addInscripcion(data);

    if (result.success) {
      console.log('Register added successfully:', result.docRef);
      // You can perform additional actions after successful submission
    } else {
      console.error('Error adding Register:', result.error);
    }
  };
  return (
    <>
    <h3 className="h3 text-center m-5">¡No pierdas la oportunidad e inscríbete!</h3>
    
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-5 bg-white w-50 mx-auto m-4 rounded-3 shadow-sm"
    >
      <div className="mb-3">
        <label
          htmlFor=""
          className="form-label"
        >
          Nombre*
        </label>
        <input
          type="text"
          placeholder="Alexander"
          className='form-control-lg w-100'
          {...register("name", { required: true, maxLength: 80 })}
        />
        {
          errors.name?.type === 'required' &&
          <span className="text-danger form-text">
            El nombre es un campo obligatorio
          </span>
        }
      </div>

      <div className="mb-3">
        <label
          htmlFor=""
          className="form-label"
        >
          Apellido*
        </label>
        <input
          type="text"
          placeholder="Rivera"
          className='form-control-lg w-100'
          {...register("lastname", { required: true, maxLength: 100 })}
        />
        {
          errors.lastname?.type === 'required' &&
          <span className="text-danger form-text">
            El apellido es un campo obligatorio
          </span>
        }
      </div>

      <div className="mb-3">
        <label
          htmlFor=""
          className="form-label"
        >
          Email*
        </label>
        <input
          type="email"
          placeholder="johndoe@mail.com"
          className='form-control-lg w-100'
          {...register("email", { required: true, pattern: EmailValidation })}
        />
        {
          errors.email?.type === 'required' &&
          <span className="text-dange form-text">
            El email es un campo obligatorio
          </span>
        }
        {
          errors.email?.type === 'pattern' &&
          <span className="text-danger form-text">
            {errors.email.message}
          </span>
        }
      </div>

      <div className="mb-3">
        <label
          htmlFor=""
          className="form-label"
        >
          Número de teléfono
        </label>
        <input
          type="tel"
          placeholder="´503-5677 -9877"
          className='form-control-lg w-100'
          {...register("phone", { pattern: PhoneValidation })}
        />
        {
          errors.phone?.type &&
          <span className="text-danger form-text">
            { errors.phone.message }
          </span>
        }
      </div>

      <div className="mb-3">
        <label
          htmlFor=""
          className="form-label"
        >
          País
        </label>
        <select
          {...register("country")}
          className="form-select-lg w-100"
        >
          <option value="SV">El Salvador</option>
          <option value="GT">Guatemala</option>
          <option value="HN">Honduras</option>
          <option value="CL">Colombia</option>
          <option value="MX">México</option>
        </select>
      </div>

      <div className="mb-3">
        <label
          htmlFor=""
          className="form-label"
        >
          Experiencia Técnica de Programación
        </label>
        <select
          {...register("exp")}
          className="form-select-lg w-100"
        >
          <option value="Ninguna">Ninguna</option>
          <option value="Basica">Básica</option>
          <option value="Intermedia">Intermedia</option>
          <option value="Avanzada">Avanzada</option>
        </select>
      </div>

      <div className="mb-3">
        <label
          htmlFor=""
          className="form-label"
        >
          Fecha de nacimiento
        </label>
        <input
          type="date"
          className='form-control-lg form-control-lg w-100'
          {...register("date")}
        />
      </div>
      <div className="mb-3">
          <label
            htmlFor=""
            className="form-label"
          >
            Curso de interés
          </label>
          <select
            {...register("course", { required: true })}
            className="form-select-lg w-100"
          >
            <option value="1">Full Stack Jr</option>
            <option value="2">Data Analyst Jr</option>
            <option value="3">Python Developer</option>
            <option value="4">Java developer</option>
          </select>
          {
            errors.course?.type === 'required' &&
            <span className="text-danger form-text">
              Seleccione un curso
            </span>
          }
        </div>
      <input
        type="submit"
        value="Enviar"
        className="btn btn-primary btn-lg" />
      {
        errors && errors.message &&
        <span className='text-danger form-text'>
          {errors.message}
        </span>
      }
    </form>
    </>
  )
}