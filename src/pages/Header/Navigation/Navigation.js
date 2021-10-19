import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <div>
          <nav className="navbar    navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <div className="navbar-brand" >
      <img src="https://www.pngitem.com/pimgs/m/117-1170427_hospital-logo-red-cross-hd-png-download.png" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
      Medical & Hospital
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active navlink" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active navlink" aria-current="page" to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active navlink" aria-current="page" to="/medication">Medication</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active navlink" aria-current="page" to="/lab">Lab & Diagnosis</NavLink>
        </li>
       
       
      </ul>
      <form className="d-flex ">
      
      <Link  to='/signup' type="button" className="btn btn-danger">Sign Up</Link>
      <Link  to='/login' type="button" className="btn btn-danger ms-2">Log In</Link>
      </form>
    </div>
  </div>
</nav>  
        </div>
    );
};

export default Navigation;