import React, { useEffect } from 'react';
import Section from '../Section/Section.jsx';
import {Switch, Route, useLocation} from 'react-router-dom';
import Category from '../Category/Category.jsx';
import NewsDetail from '../NewsDetail/NewsDetail.jsx';
import Contacts from '../Contacts/Contacts.jsx';
import './Body.scss';
// import NewsSlider from '../NewsSlider/NewsSlider.jsx';
// import NewsGallery from '../NewsGallery/NewsGallery.jsx';

const Body = ({ news }) => {
  
  const categories = ["Last News", ...new Set(news.map( item => item.category)) ] ;
  // console.log(categories);
  
  // get article Id from path and get this article info
  const location = useLocation();
  // console.log('location: ', location);
  const pathArr = location.pathname.split('/');
  const currArticleId = pathArr[pathArr.length-1];
  const chooseArticle = news.find( item => item.id === +currArticleId);

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  

  return(
    <main>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            {
              categories.map( cat => {
                return <Section category={cat} title={cat} news={news} key={cat}/>
              })
            }
          </Route>
          <Route exact path="/sport">
            <Category cat="sport" news={news}/>
          </Route>
          <Route exact path="/politics">
            <Category cat="politics" news={news}/>
          </Route>
          <Route exact path="/economic">
            <Category cat="economic" news={news}/>
          </Route>
          <Route exact path="/lifestyle">
            <Category cat="lifestyle" news={news}/>
          </Route>
          <Route exact path="/science">
            <Category cat="science" news={news}/>
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
          <Route path="/:category/:id">
            <NewsDetail {...chooseArticle} news={news}/>
          </Route>
        </Switch>
      </div>
    </main>
  )
};

export default Body;
