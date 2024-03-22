import React from 'react';
import { useState } from 'react'
import './App.css';

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const [url,setUrl] = useState('');

  function fetch_data(){
    fetch(`https://api.thecatapi.com/v1/images/search`).then(res=>{
      if(res.ok){
        return res.json();
      }
      throw new Error('Request Failed');
    }, networkError=> console.log(networkError.message)
    ).then(jsonRes=>{
      setUrl(jsonRes[0].url)
    })
  }

  return (
    <div className="cat_main">
      <img src={url} className="cat_img"/>
      <button className="cat_button" onClick={fetch_data}>Generate</button>
    </div>
  )
}

export default App
