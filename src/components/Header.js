import React from 'react'
import Typed from 'react-typed'

const Header = () => {
  return (
    <div id="Home" className="header-wrapper">
      <div className="main-info">
        <h1>Wettim Linton</h1>
        <Typed 
        className="typed-text"
        strings={["Full-Stack Developer", "UCI Bootcamp Graduate", "My React Portfolio", "Thanks for viewing!" ]}
        typeSpeed={40}
        backSpeed={50}
        loop
        />
        <a href="https://github.com/wlinton1" target="_blank" className="btn-main-offer">My Github</a>
        <a href="https://www.linkedin.com/in/wettim-linton-54b4421a6/" target="_blank" className="btn-main-offer">My LinkedIn</a>
      </div>
    </div>
  )
}

export default Header