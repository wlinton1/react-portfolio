import React from 'react'
import {Link} from 'react-scroll'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon
} from 'react-share'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Santa Ysabel California 25 Epie Hill Road P.O. Box 382</p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-555">+1(760)803-4874</a>
            </div>
            <div className="d-flex">
              <p>wettimlinton123@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link smooth={true} to="Home" className="footer-nav">Home</Link>
                <br/>
                <Link smooth={true} to="AboutMe" offset={-70} className="footer-nav">About Me</Link>
                <br/>
                <Link smooth={true} to="Portfolio" offset={-70} className="footer-nav">Portfolio</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
              url={""}
              quote={"FullStack Developer"}
              hashtag="#ReactPortfolio"
              >
                <FacebookIcon className="mx-3" size={36}/>
              </FacebookShareButton>
              <LinkedinShareButton
                url={"https://www.linkedin.com/in/wettim-linton-54b4421a6/"}
                quote={"FullStack Developer"}
                hashtag="#ReactPortfolio"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 test-center">My Github: <a href="https://github.com/wlinton1" target="_blank">wlinton1 (CLICK ME)</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
