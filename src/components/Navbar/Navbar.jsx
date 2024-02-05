
import "bootstrap/dist/js/bootstrap.bundle"
import { Link } from "react-router-dom"
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ position: 'fixed', width: '100%', top: 0, zIndex: 1000, backgroundColor: "white" }}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        <img src="https://res.cloudinary.com/dxdsq6qcw/image/upload/v1706502276/ckajt5rbnzkpctrgbgmv.png" width="170" height="50" alt="Spotify Logo" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Bootcamps
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/FullStackJunior">Full Stack Jr</Link>
              <Link className="dropdown-item" to="/DataAnalystJunior">Data Analyst Jr</Link>
              <Link className="dropdown-item" to="/PythonDeveloper">Python developer</Link>
              <Link className="dropdown-item" to="/JavaDeveloper">Java developer</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login" style={{ color: '#333' }}>Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/inscripcion-Bootcamp" className="btn btn-warning ml-2 mt-1" role="button">
              Aplica
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
