import React from "react";

const Games = (props) => {
  return (
    <div className="Game">
      <h1>{props.games}</h1>
      <img src={props.img}></img>
      <br/>
      <a className="button" href={props.link}>
        Link
      </a>
    </div>
  );
};

export default Games;
