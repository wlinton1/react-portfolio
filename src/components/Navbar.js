import React from 'react'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-dark fixed-top">
      <div className="container">

        <p className="navbar-brand" href="#">React Portfolio</p>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="Home" offset={-70} className="nav-link white" href="#">Home</Link>
            </li>
            <li className="nav-item active">
              <Link smooth={true} to="AboutMe" offset={-70} className="nav-link white" href="#">About Me</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="Portfolio" offset={-70} className="nav-link" href="#">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="ContactMe" offset={-70} className="nav-link" href="#">Contact</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar