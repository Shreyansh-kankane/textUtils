import React from 'react'
import PropTypes from 'prop-types'
import Alert from './Alert';
import { Link } from 'react-router-dom';

function Navbar(props){
    return(
      <>
        <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">{props.about}</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action1</Link></li>
                  <li><Link className="dropdown-item" to="/">Action2</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="/">Something else</Link></li>
                </ul>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-primary" type="submit">Search</button>
            </form> */}
            <div class="gcse-search" ></div>
            <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
              <input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
      <Alert alert={props.alert}/>
      </>
    );
};
export default Navbar

Navbar.prototype = {
    title:PropTypes.string.isRequired,
    about:PropTypes.string.isRequired
}

Navbar.defaultProps={
    title:"Your-Title",
    about:"About",
    mode:'dark'
}
