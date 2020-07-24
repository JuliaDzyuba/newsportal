import React from "react";
import './Sidebar.scss';
import MiniNews from "../MiniNews/MiniNews.jsx";

const Sidebar = ( {news}) => {
  
  return (
    <>
      <aside className="sidebar">
        <h2 className="sidebar__title">LAST News</h2>
        <ul className="footer__items sidebar__items">
          <MiniNews news={news} num={15}/>
        </ul>
      </aside>
    </>
  )
};

export default Sidebar;