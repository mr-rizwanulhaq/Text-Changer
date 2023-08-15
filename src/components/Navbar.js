import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/text-changer">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home">{props.tabOne}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.tabTwo}</Link>
          </li>
          
        </ul>

        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}

        <button type="button" onClick={props.toggleMode} className={`btn btn-${props.btnmode}`}>{props.btntext}</button>

      </div>
    </div>
  </nav>
  )
}

Navbar.protoTypes ={title:PropTypes.string.isRequired,
    tabOne: PropTypes.string.isRequired,
    tabTwo: PropTypes.string,}

Navbar.defaultProps = {
                        title: "title here",
                        tabTwo: "About"
}
