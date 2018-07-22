import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import './CardContainer.css';

export class CardContainer extends Component {

  restaurantsToDisplay = restaurants => restaurants.map((restaurant, index) => {
    return <Card {...restaurant} key={`${index} + ${restaurant.name}`} />;
  })

  render() {
    return (
      <div className="card-container">
        {this.restaurantsToDisplay(this.props.restaurants)}
      </div>
    );
  }
}


export const mapStateToProps = state => ({
  restaurants: state.restaurants
});

export default connect(mapStateToProps, null)(CardContainer);