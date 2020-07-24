import React from 'react';
import './Header.scss';
// import { NavLink } from 'react-router-dom';
import Menu from '../Menu/Menu.jsx';
import { useState } from 'react';

const Header = ({ news }) => {
  const categorys = [ ...new Set(news.map( item => item.category))];
  // console.log(categorys);

  const burgerRef = React.createRef();

  const [visibleMenu, setVisibleMenu] = useState(false);
  const toggleVisible = () => {
    setVisibleMenu(!visibleMenu);
  }


  return (
    <header className="header">
      <div className="container">
        <div className="header__info">
          <a href="/" className="logo"><span>TOP</span>NEWS</a>
          {/* <div className="search header__search">
            <form className="search__form">
              <input type="search" name="search" id="search"/>
            </form>
          </div> */}
          <div className="social">
            <ul className="social__links">
              <li><a href="https://facebook.com" className="social__links_facebook" alt="facebook">fb</a></li>
              <li><a href="https://www.instagram.com/?hl=ru" className="social__links_instagram">i</a></li>
              <li><a href="https://www.pinterest.com/" className="social__links_pinterest">Pin</a></li>
              <li><a href="https://vimeo.com/" className="social__links_vimeo">Vim</a></li>
            </ul>
          </div>
        </div>
        
      </div>
      <nav className="menu header__menu">
        <div className="container">
          <Menu cat={categorys} type="menu"/>
          {visibleMenu && <Menu cat={categorys} type="burger" onClick={toggleVisible}/>}
          
          <div ref={burgerRef} className="header__burger" onClick={toggleVisible}>
            <span onClick={toggleVisible}></span> Menu
          </div>
        </div>
      </nav>
      
      
    </header>
  )
};

export { Header };