import { Link } from 'react-router-dom';

export const Footer = () => {
  return(
    <div className="container-fluid bg-dark-subtle border border-light">
      <footer className="d-flex flex-wrap justify-content-evenly align-items-center py-3 my-4 border-top fs-5">
        <p className="col-md-4 mb-0 text-body-secondary text-break">
          Derechos Reservados © 2023 | 👩🏻 Mirna 👨🏻‍🦱 Alexander y 👨🏽 Fernando para Kodigo.
        </p>
        <a href="#top" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto">
          <img src="https://kodigo.org/wp-content/uploads/2023/02/Asset-18.png" alt="Kodigo logo" />
        </a>
        <u className="nav col-md-4 justify-content-end align-items-center fw-medium text-uppercase">
          <li className="nav col-md-4 justify-content-end"><Link to={"/faqs"} className="nav-link px-2 text-body-secondary">FAQs</Link></li>
          <li className="nav col-md-4 justify-content-end"><Link to={"/cpd"} className="nav-link px-2 text-body-secondary">CDP</Link></li>
          <li className="nav col-md-4 justify-content-end"><Link to={"/coaches"} className="nav-link px-2 text-body-secondary">Coaches</Link></li>
        </u>
      </footer>
    </div>
  )
}