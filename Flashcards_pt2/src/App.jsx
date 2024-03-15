import React, { useState } from 'react';
import './App.css';
import Cards from "./component/Cards";

const App = () => {

  return (
    <div className="App">
      <h1>Anime Emoji Trivia</h1>
      <h2>How good is your Anime knowledge?</h2>
      <Cards/>
    </div>
  )
}


export default App;