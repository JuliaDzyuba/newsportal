import React from "react";
import SingleNews from '../SingleNews/SingleNews.jsx';
import Sidebar from "../Sidebar/Sidebar.jsx";
import './Category.scss';

const Category = ({ cat, news }) => {
  const catNews = news.filter( item => item.category === cat);
  // console.log('catNews: ', catNews);

  return(
    <>
    <div className="category">
      <section className="section section__category">
        <h2 className="section__title">{cat}</h2>
        <SingleNews news={catNews}/>
      </section>
      <Sidebar news={news}/>
    </div>
    </>
  )
};

export default Category;