import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Card = ({name, image}) => {
  return (
    <div className='card'>
      <Link className='details-link' to={`/restaurants/${name}`}>
        <h3 className='card-header'>{name}</h3>
        <img src={image} alt='restaurant' className='restaurant-images'/>
      </Link>
    </div>
  );
};


export default Card;

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.name
};