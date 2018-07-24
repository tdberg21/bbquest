import React, { Component } from 'react';
import { fetchDetails } from '../../helpers/apiCalls';

export class RestaurantDetails extends Component {
  constructor () {
    super();
    
    this.state = {
      results: {
        reviews: [{ text: '' }, { text: '' }, { text: '' }]
      }
    };
  }

  async componentDidMount() {
    if (this.props.id) {
      let results = await fetchDetails(this.props.id);
      this.setState({ results });
    }
  }
  
  render () {
    return (
      <div className='restaurant-details-container'>
        <h2>{this.props.name}</h2>
        <img src={this.props.image} alt="restaurant" height="200px" />
        <p>Price Range: {this.props.price} </p>
        <p>Rating: {this.props.rating}</p>
        <button>Mark As Visited</button>
        <p> {this.state.results.reviews[0].text} </p>
        <p> {this.state.results.reviews[1].text} </p>
        <p> {this.state.results.reviews[2].text} </p>
        <a href={this.props.url}>Visit on Yelp!</a>
      </div>
    );
  }
}

export default RestaurantDetails;