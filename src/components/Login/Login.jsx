import "./Login.css"
export const Login = () => {
  return (
    <section className="d-flex justify-content-end align-items-center p-5 m-5">
  <form className="bg-white p-5" style={{ width: "600px", borderRadius: "30px", textAlign: "left" }}>
    <img src="https://res.cloudinary.com/dxdsq6qcw/image/upload/v1706502276/ckajt5rbnzkpctrgbgmv.png" style={{ width: '300px' }} alt="" />
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Usuario</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre de Usuario" />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="contraseña"/>
    </div>
    <button type="submit" className="btn btn-primary">Acceder</button>
  </form>
</section>
  )
}
