import React from "react";
import './MiniNews.scss';
import { Link } from "react-router-dom";

const MiniNews = ({ news, num }) => {
  // console.log(news);
  // cutting title and intro
  const cutString = (str, simb) => {
    return str.length > simb ? str.slice(0, simb-3) + '...' : str;
  };
  // transform date
  const transformDate = (publicDate) => {
    let date = new Date(publicDate).getDate();
    let month = new Date(publicDate).getMonth() +1;
    return ` ${date}.${month < 10 ? '0'+month : month } `;
  }
  return (
    news.filter( (item, index) => index < num ).map( news => {
      return (
        <li key={news.id}>
          <Link to={`/${news.category}/${news.id}`} className="mini__item" >
            <img src={news.urlToImage} alt="img" className="mini__img"/>
            <div className="mini__item_descr">
              <h3 className={ num < 4 ? "mini__item_title footer__item_title" : "mini__item_title"}>{cutString(news.title, 40)}</h3>
              <div className="mini__item_details"><span>Дата : </span>{transformDate(news.date)} / {news.category}</div>
            </div>
          </Link>
        </li>
      )
    })
    
 )
};

export default MiniNews;