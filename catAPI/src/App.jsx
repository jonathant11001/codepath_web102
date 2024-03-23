import { useState } from 'react'
import './App.css'

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const [breeds, setBreeds] = useState({
    name:"",
    png:"",
    origin:"",
    life_span:"",
  });
  const [excludeBreeds,setExBreeds] = useState([]);


  function fetch_data(){
    const excludedBreeds = excludeBreeds.join(',');
    fetch(`https://api.thecatapi.com/v1/images/search?has_breeds=true&api_key=${ACCESS_KEY}&exclude_breeds=${excludedBreeds}`).then(res=>{
      if(res.ok){
        return res.json();
      }
      throw new Error('Request Failed');
    }, networkError=> console.log(networkError.message)
    ).then(jsonRes=>{
      setBreeds({
        name:jsonRes[0].breeds[0].name,
        png:jsonRes[0].url,
        origin:jsonRes[0].breeds[0].origin,
        life_span:jsonRes[0].breeds[0].life_span,
      })
      console.log(breeds)
    })
  }

  const excludeBreedName = () => {
    setExBreeds([...excludeBreeds, breeds.name]);
  };

  const excludeBreedOrigin = () => {
    setExBreeds([...excludeBreeds, breeds.origin]);
  };

  const excludeBreedLifeSpan = () => {
    setExBreeds([...excludeBreeds, breeds.life_span]);
  };

  const renderExcludeBreedsList = () => {
    return (
      <div className="exclude-breeds-list">
        <h2>Excluded Breeds:</h2>
        {excludeBreeds.map((breed, index) => (
          <h5 key={index}>{breed}</h5>
        ))}
      </div>
    );
  };

  return (
    <div className="cat_main">
      <div className="cat_container">
        <h1>CATS</h1>
        <h2>{breeds.name}</h2>
        <img src={breeds.png} className="cat_img"/>
        <br/>
        <button className="cat_button" onClick={fetch_data}>Generate</button>
        <div>
          <button onClick={excludeBreedOrigin} className="cat_buttons">{breeds.origin}</button>
          <button onClick={excludeBreedLifeSpan} className="cat_buttons">{breeds.life_span}</button>
        </div>
      </div>
      <div className="exclude_breeds_list">{renderExcludeBreedsList()}</div>
    </div>
  );
}

export default App;