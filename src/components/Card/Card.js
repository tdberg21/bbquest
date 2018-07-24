import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';


const Card = (props) => {
  return(
    <div className="card">
      <Link to={`/restaurants/${props.name}`} >
        <h3>{props.name}</h3>
        <img src={props.image} alt="restaurant picture" height="200px"/>
      </Link>
    </div>
  );
};


export default Card;