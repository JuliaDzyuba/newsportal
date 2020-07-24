import React from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";
import '../Category/Category.scss';
import './NewsDetail.scss';

const NewsDetail = ( { abstract, category, date,id, hostName,title,  url, urlToImage,  news} ) =>{
  

  // transform date
  const transformDate = (publicDate) => {
    let date = new Date(publicDate).getDate();
    let month = new Date(publicDate).getMonth() +1;
    return ` ${date}.${month < 10 ? '0'+month : month } `;
  }
//
  return(
    <>
      <div className="category">
        <section className="section section__category">
          
          <h2 className="section__title">{category}</h2>
          <div className="article" key={id}>
            <h1 className="article__title">{title}</h1>
            <div className="item__wrap">
              <img src={urlToImage} alt="foto" className="item__img"/>
            </div>
            
            <div className="item__details"><span>Дата : </span>{transformDate(date)} / {category} / {hostName}</div> 
            <p>{abstract}</p>
          </div>
        
        </section>
        <Sidebar news={news}/>
      </div>
    </>
  )
};

export default NewsDetail;