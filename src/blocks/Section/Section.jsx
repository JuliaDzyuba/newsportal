import React from 'react';
import './Section.scss';
import SingleNews from '../SingleNews/SingleNews.jsx';
import NewsGallery from '../NewsGallery/NewsGallery.jsx';


const Section = ({ category, news}) => {
  // console.log(category);
  let sortNews = news.filter( (art, index) => art.category===category);
  // console.log('sortNews: ', sortNews);
  
  
  let renderNews;
  switch (category) {
    case "Last News":
      renderNews = news.filter( (art, index) => index < 6);
      break;
    default:
      renderNews = sortNews.filter( (item, index) => index < 3);
      // console.log(renderNews);
      break;
  }


  return(
    <section className="section">
      <h2 className="section__title">{category}</h2>
        {
          category==="Last News" ? <NewsGallery news={news} /> : <SingleNews news={renderNews}/>
        }
        
      
    </section>
  )
};

export default Section;