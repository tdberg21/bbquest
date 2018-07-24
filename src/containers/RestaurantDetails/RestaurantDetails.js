import React, { Component } from 'react';

export class RestaurantDetails extends Component {
  constructor () {
    super();
    
  }
  getRestaurantDetails = () => {
    console.log(this.props);
  }
  
  render () {
    return (
      <div className='restaurant-details-container'>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default RestaurantDetails;