

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
  <a className="navbar-brand text-white" href="#">
    <img src="https://res.cloudinary.com/dxdsq6qcw/image/upload/v1706502276/ckajt5rbnzkpctrgbgmv.png" width="170" height="50" alt="Spotify Logo" />
    Spotify
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Bootcamps
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">SignIn</a>
      </li>
      <li className="nav-item">
      <button className="btn" style={{ backgroundColor: "rgba(255, 81, 0, 1)" , marginLeft: "auto"}}>Aplica</button>
      </li>
    </ul>
  </div>
</nav>

  )
}
