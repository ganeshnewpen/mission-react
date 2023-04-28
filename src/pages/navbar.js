import React from 'react';

const myLogo = {
    name: 'Ganesh Neupane',
    imageUrl: 'https://ganeshneupane.com.np/u_f/ganesh-neupane-Software Developer Nepal.jpg'
    }
const Navbar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <a className="navbar-brand d-flex align-items-center" href="#">
            <div className="logo-container">
            <img
          className="avatar"
          src={myLogo.imageUrl}
          alt={'Photo of ' + myLogo.name}
        />
            </div>
            <h4 className='ms-3 text-white'>{myLogo.name}</h4>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
