import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="Home-Page">
            <h1>Welcome to Crewmate Creator</h1>
            <img src="https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png" className="Home-Img"></img>
        </div>
    );
}

export default Home;