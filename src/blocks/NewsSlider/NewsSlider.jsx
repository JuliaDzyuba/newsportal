import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
import { Link } from 'react-router-dom';

export default class extends React.Component {

  
  render() {
    console.log(this.props.news);
    const last= this.props.news.filter( (item, index) => index< 4);
    console.log(last);
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
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          {last.map( (item,index) => {
            console.log(item);
            return(
              <Slide index={index}>
                
                <Link to={`/${item.category}/${item.id}`} className="mini__item" >
                  <img src={item.urlToImage} alt="img" className="mini__img"/>
                  <div className="mini__item_descr">
                    <h3 className={ item < 4 ? "mini__item_title footer__item_title" : "mini__item_title"}>{cutString(item.title, 40)}</h3>
                    <div className="mini__item_details"><span>Дата : </span>{transformDate(item.date)} / {item.category}</div>
                  </div>
                </Link>
              </Slide>
            )
          })}
          {/* <Slide index={0}>I am the first Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide> */}
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        <DotGroup />
      </CarouselProvider>
    );
  }
}