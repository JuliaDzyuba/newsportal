// import React from 'react';
import { useState, useEffect } from 'react';


const useFetch = (reqUrl) => {
  const [data, setData] = useState([]);
  
  useEffect ( () => {
    (async () => {
      await fetch(reqUrl)
        .then( response => response.json())
        .then( respData => setData(respData))
    })();
  }, [reqUrl]);
  
  return data;
};

export { useFetch };