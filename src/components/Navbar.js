import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-dark">
      <div className="container">

        <p className="navbar-brand" href="#">React Portfolio</p>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link white" href="#">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar