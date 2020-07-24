import React from 'react';
import Carousel from 'react-elastic-carousel';
import './NewsGallery.scss';
import { Link } from 'react-router-dom';

class NewsGallery extends React.Component {
  constructor(props) {
    super(props)
    this.breakPoints = [
      { width: 1, itemsToShow: 1 }, // width = slider-width, not viewport width
      { width: 575, itemsToShow: 2 , itemsToScroll: 1 },
      { width: 767, itemsToShow: 2 , itemsToScroll: 1 }, //slider-width > 767px (768 - 991px)
      { width: 991, itemsToShow: 2 , itemsToScroll: 1 }, //slider-width > 991px (start 992px)
      // { width: 1140, itemsToShow: 3, itemsToScroll: 1 },
      // { width: 1450, itemsToShow: 3 },
      // { width: 1750, itemsToShow: 3 },
    ]
  }
 
  render () {
    const last = this.props.news.filter( (item, index) => index < 6);
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
    // const { items } = this.state;
    return (
      <Carousel 
          enableAutoPlay 
          autoPlaySpeed={5000} 
          showArrows={false} 
          itemPadding={[5, 5, 5,5]}
          breakPoints={this.breakPoints}>
        {last.map(item => {
          return (
            <Link key={item.id} to={`/${item.category}/${item.id}`} className={last.length > 4 ? "item__link item__category_link" : "item__link"}>
              <div className="item__wrap" >
                <img src={item.urlToImage} alt="img" className={last.length === 4 ? `item__img item__img_lastnews` : `item__img`}/>
              </div>
              <div className={last.length > 4 ? "item__category_info" : "item__section_info"} >
                <h3 className="item__title">{cutString(item.title, 40)}</h3>
                <div className="item__details"><span>Дата : </span>{transformDate(item.date)} / {item.category}</div>
                <p className="item__descr">{cutString(item.abstract, 80)}</p>
                <div className="item__more">
                  <button className="btn btn__more">Подробнее</button>
                  <button className="btn btn__comments">Комментарии</button>
                </div>
              </div>
            </Link>
          )
        })}
        {/* <SingleNews news={last} /> */}
      </Carousel>
    )
  }
}

export default NewsGallery;