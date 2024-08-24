import { Link } from "react-router-dom"

import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-spartan-red">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">SCPA Photo Station</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to='/' className="nav-link">Scan</Link>
          <Link to='/settings' className="nav-link">Settings</Link>
        </div>
      </div>
    </div>
  </nav>
  )
}