import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/services"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link to="/service1" className="dropdown-item">Service 1</Link></li>
                <li><Link to="/service2" className="dropdown-item">Service 2</Link></li>
                <li><Link to="/service3" className="dropdown-item">Service 3</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link className='btn btn-primary mx-2' to="/login">Login</Link>
            <Link className='btn btn-primary mx-2' to="/signup">SignUp</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
