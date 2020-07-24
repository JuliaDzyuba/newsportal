import React from 'react';
import './SingleNews.scss';
import { Link } from 'react-router-dom';

const SingleNews = ( {news} ) => {
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
    <>
      <ul className="section__items">
        {
          news.map( item => {
            return(
              <li className={news.length < 4 ? `item section__item` 
              :  news.length > 4 ? `item item__category` : `item section__item section__item_lastnews`} key={item.id}>
                <Link  to={`/${item.category}/${item.id}`} className={news.length > 4 ? "item__link item__category_link" : "item__link"}>
                  <div className="item__wrap">
                    <img src={item.urlToImage} alt="img" className={news.length === 4 ? `item__img item__img_lastnews` : `item__img`}/>
                  </div>
                  <div className={news.length > 4 ? "item__category_info" : "item__section_info"} >
                    <h3 className="item__title">{cutString(item.title, 55)}</h3>
                    <div className="item__details"><span>Дата : </span>{transformDate(item.date)} / {item.category}</div>
                    <p className="item__descr">{cutString(item.abstract, 135)}</p>
                    <div className="item__more">
                      <button className="btn btn__more">Подробнее</button>
                      <button className="btn btn__comments">5 комментариев</button>
                    </div>
                  </div>
                </Link>
                {/* <div className="item__more">
                  <button className="btn btn__more">Подробнее</button>
                  <button className="btn btn__comments">Комментарии</button>
                </div> */}
                
              </li>
            )
          })
        }
      </ul>
    </>
  )
};

export default SingleNews;

