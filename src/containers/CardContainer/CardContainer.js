import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import './CardContainer.css';
import pig from '../../pig.gif';

export class CardContainer extends Component {

  restaurantsToDisplay = restaurants => restaurants.map((restaurant, index) => {
    return <Card {...restaurant} key={`${index} + ${restaurant.name}`} />;
  })

  render() {
    if (this.props.restaurants.length > 0) {
      return (
        <div className='card-container'>
          {this.restaurantsToDisplay(this.props.restaurants)}
        </div>
      );
    } else {
      return (
        <div className='card-container'>
          <img src={pig} alt='pig loading gif' className='pig-gif'/>
        </div>
      );
    }
    
  } 
}

export const mapStateToProps = state => ({
  restaurants: state.restaurants
});

export default connect(mapStateToProps, null)(CardContainer);