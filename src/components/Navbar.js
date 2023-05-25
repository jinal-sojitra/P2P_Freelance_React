import React from 'react'
// import logo from './logo.png';
import { Link } from 'react-router-dom';
import './createProject.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">P2P Freelance</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/createProject">Create Project</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects">Projects</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled">Disabled</Link>
        </li> */}
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
