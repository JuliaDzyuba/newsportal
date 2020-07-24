import React from "react";
import './Footer.scss';
import MiniNews from "../MiniNews/MiniNews";

const Footer = ({ news }) => {
  
  return(
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__contacts">
            <p className="info__title footer__title">Administration</p>
            <a href="tel: +111111111" className="info__phone footer__phone">111-111-111</a>
            <a href="tel: +222222222" className="info__phone footer__phone">222-222-222</a>
            <a href="mailto: mail@mail.com" className="info__email footer__email">mail@mail.com</a>
            <div className="info__address footer__address">32 Alexandra Road, <br/> Swansea,<br/> SA1 5DT</div>
          </div>
          <div className="footer__lastnews">
            <p className="footer__title">LAST Posts</p>
            <ul className="footer__items">
              <MiniNews news={news} num={3}/>
            </ul>
          </div>
          <div className="footer__social">
            <p className="footer__title">We are in socials</p>
            <ul className="footer__socialLinks">
              <li className="facebook"><a href="https://facebook.com" >Facebook</a></li>
              <li className="google"><a href="https://support.google.com/plus/?hl=ru">Google+</a></li>
              <li className="twitter"><a href="https://twitter.com/?lang=ru">Twitter</a></li>
              <li className="dribbble"><a href="https://dribbble.com/">Dribbble</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__policy">© 2010–2020 TOPnews</div>
        <div className="footer__made"><a href="https://juliadzyuba.github.io/jdwebdev/" alt="JDWebDev" rel="noopener noreferrer" target="_blank">☼ Made by <b>JDWebDev </b> ​</a></div>
      </div>
    </footer>
    
  )
};

export default Footer;
