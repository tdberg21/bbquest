import React from 'react';
import './Card.css';

const Card = (props) => {
  return(
    <div className="card">
      <h3>{props.name}</h3>
      <img src={props.image} alt="restaurant picture" height="200px"/>
    </div>
  );
};


export default Card;