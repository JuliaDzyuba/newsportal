import React from 'react';
import './App.scss';
import { Header } from './blocks/Header/Header';
import Body from './blocks/Body/Body';
import Footer from './blocks/Footer/Footer';
import { useFetch } from './data/GetData.js';

function App() {

  const newsData = useFetch('https://juliadzyuba.github.io/newsportal/news.json');
  
  return (
    <div className="App">
      <Header news={newsData}/>
      <Body news={newsData}/>
      <Footer news={newsData}/>
      
    </div>
  );
}

export default App;


// for( let i=0; i<30; i++){
//   console.log( Math.floor(Math.random()*1000000));
// }
