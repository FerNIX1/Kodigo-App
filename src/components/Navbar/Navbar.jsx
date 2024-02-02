
import "bootstrap/dist/js/bootstrap.bundle"
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg " style={{position: 'fixed',width: '100%',top: 0,zIndex: 1000,backgroundColor:"white"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src="https://res.cloudinary.com/dxdsq6qcw/image/upload/v1706502276/ckajt5rbnzkpctrgbgmv.png" width="170" height="50" alt="Spotify Logo" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Bootcamps
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="/FullStackJunior">Full Stack Jr</a>
            <a className="dropdown-item" href="/DataAnalystJunior">Data Analyst Jr</a>
            <a className="dropdown-item" href="#">Python developer</a>
            <a className="dropdown-item" href="#">Java developer</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login" style={{ color: '#333' }}>Login</a>
        </li>
        <li className="nav-item">
          <button className="btn btn-warning ml-2 mt-1">Aplica</button>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}
