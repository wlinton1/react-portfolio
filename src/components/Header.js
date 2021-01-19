import React from 'react'
import Typed from 'react-typed'

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Wettim Linton</h1>
        <Typed 
        className="typed-text"
        strings={["Full-Stack Developer", "UCI Bootcamp Graduate", "My React Portfolio", "Thanks for viewing!" ]}
        typeSpeed={40}
        backSpeed={50}
        loop
        />
        <a href="#" className="btn-main-offer">Contact Me</a>
      </div>
    </div>
  )
}

export default Header