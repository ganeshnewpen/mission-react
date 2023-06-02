import React from 'react';
import { Link } from 'react-router-dom';

const MyLogo = ({ name, imageUrl }) => {
  return (
    <div className="logo-container">
      <img className="avatar" src={imageUrl} alt={name} />
    </div>
  );
};

const Navbar = () => {
  const myLogo = {
    name: 'Ganesh Neupane',
    imageUrl: 'https://blog.ganeshneupane.com.np/assets/img/gitavatar.jpg'
  };

  return (
    <section className="sect-nav">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link to="/" className="navbar-brand d-flex align-items-center">
                <MyLogo name={myLogo.name} imageUrl={myLogo.imageUrl} />
                <h4 className="ms-3 text-white">Ganesh</h4>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link" activeClassName="active">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link" activeClassName="active">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link" activeClassName="active">
                      Contact
                    </Link>
                  </li>
                </ul>

                <ul className="mx-auto">
                <li className="nav-item">
                    <Link to="/login" className="btn btn-primary">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
