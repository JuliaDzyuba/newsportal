import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

const Menu = ({ cat, type, onClick }) => {
  
  return(
    
    <ul className={`${type}__items`}>
      <li><NavLink exact to="/" activeClassName="menu__items_active" onClick={onClick}>Home</NavLink></li>
      {
        cat.map( (item, index) => {
          return (
            <li key={index}>
              <NavLink exact to={`/${item}`} 
                      activeClassName="menu__items_active" 
                      onClick={onClick}>
                {item}
              </NavLink>
            </li>
          )
        })
      }
      <li><NavLink exact to="/contacts" activeClassName="menu__items_active" onClick={onClick}>Contacts</NavLink></li>
    </ul>
  )
};

export default Menu;