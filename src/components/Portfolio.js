import React from 'react'
import { PopupboxManager, PopupboxContainer } from 'react-popupbox'
import 'react-popupbox/dist/react-popupbox.css'

const Portfolio = () => {

const openPopupboxProject1 = () => {
  const content = (
  <>
    <img className="portfolio-image-popupbox" src="https://i.gyazo.com/c52776d0ed502dc45a0b66b3b231563c.png" alt="project 1"/>
    <p>
        My group decided to create an application that tracks the spread of covid. The map
        displays markers based upon severity of cases within that country. Originally we had it as a travel
        information application that would allow you to see whether or not a country would be safe to travel to.
        You can click on a country on the left hand side of the app and it will take you to the country on the
        map. Below the country on the left it will show some information on the severity, if you want to see all
        the info use the search bar below the map and any country you want will have its covid information
        displayed. This project was done after only having coded for three weeks and my group was very pleased
        with the way it came out. We also have other resources linked at the top left to keep you informed.
    </p>
      <b>Application:</b> <a className="hyper-link pr-5" onClick={() => window.open("https://nicouva.github.io/Project1-COVID19-Map/")}>Live Deployment (ClickMe)</a>
      <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/nicouva/Project1-COVID19-Map")}>Covid Informa (ClickMe)</a>
  </>
  )
  PopupboxManager.open({ content })
}

  const popupboxConfigProject1 = {
    titleBar: {
      enable: true,
      text: "Covid Informa"
    },
    fadeIn: true,
    fadeInSpeed: 500

  }





  const openPopupboxProject2 = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src="https://i.gyazo.com/7cac12a50ea7c608019d7f49effec052.png" alt="project 2" />
        <p>
          Our project two's were meant to display our backend skills, creating tables within a
          database, populating the table, etc. My group decided to make an application called CodeBook, this app is
          essentially Facebook for programmers. We want you to share your accomplishments as a programmer as well as
          get any help you might need through our feed. The app lets you create an account, login, and then post to
          our feed. We have comments up and running and will continue developing the app. This work was done after 3
          weeks of backend coding and we are happy with what we were able to accomplish.
    </p>
        <b>Application:</b> <a className="hyper-link pr-5" onClick={() => window.open("https://radiant-headland-26253.herokuapp.com/index.html")}>Live Deployment (ClickMe)</a>
        <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Greg-Sam/Project2")}>CodeBook (ClickMe)</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigProject2 = {
    titleBar: {
      enable: true,
      text: "CodeBook"
    },
    fadeIn: true,
    fadeInSpeed: 500

  }





  const openPopupboxProject3 = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src="" alt="project 3 placeholder" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum praesentium laboriosam quidem? Earum quaerat officia aspernatur, tenetur unde beatae ea maxime quia quae blanditiis, nesciunt praesentium hic laborum voluptas eveniet!
    </p>
        <b>Application:</b> <a className="hyper-link pr-5" onClick={() => window.open("")}>Live Deployment (ClickMe) (to be added when complete)</a>
        <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Greg-Sam/project-3")}>OfferDown (ClickMe) (testname)</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigProject3 = {
    titleBar: {
      enable: true,
      text: "OfferDown"
    },
    fadeIn: true,
    fadeInSpeed: 500

  }

  return (
    <div id="Portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxProject1}>
            <img className="portfolio-image" src="https://i.gyazo.com/c52776d0ed502dc45a0b66b3b231563c.png" alt="project 1"/>
            {/* <div className="overflow"></div> */}
          </div>
        
          <div className="portfolio-image-box" onClick={openPopupboxProject2}>
          <img className="portfolio-image" src="https://i.gyazo.com/7cac12a50ea7c608019d7f49effec052.png" alt="project 2" />
            {/* <div className="overflow"></div> */}
          </div>

          <div className="portfolio-image-box" onClick={openPopupboxProject3}>
          <img className="portfolio-image" src="" alt="project 3 placeholder" />
            {/* <div className="overflow"></div> */}
          </div>
        </div>

      </div>
      <PopupboxContainer {...popupboxConfigProject1} />
      <PopupboxContainer {...popupboxConfigProject2} />
      <PopupboxContainer {...popupboxConfigProject3} />
    </div>
  )
}

export default Portfolio
