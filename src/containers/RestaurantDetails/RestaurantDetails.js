import React, { Component } from 'react';
import { fetchDetails } from '../../helpers/apiCalls';
import { withRouter, Link } from 'react-router-dom';
import './RestaurantDetails.css';
import { connect } from 'react-redux';

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

  checkVisited = (id) => {
    this.props.history.push('/review')
  }
  
  render () {
    
    return (
      <div className='restaurant-details-container'>
        <h2>{this.props.name}</h2>
        <img src={this.props.image} alt="restaurant" height="200px" />
        <br/>
        <a className='yelp-link' href={this.props.url} target='_blank'>Visit on Yelp!</a>
        <p>Phone: {this.props.phone} </p>
        <p>Address: {this.props.address.address1},<br/> {this.props.address.city}, {this.props.address.state}</p>
        <p>Price Range: {this.props.price} </p>
        <p>Rating: {this.props.rating} /5</p>
        <button 
          className='visited-button'
          onClick={() => this.checkVisited(this.props.id)}
          >Mark As Visited</button>
        <p className='reviews'> {this.state.results.reviews[0].text} </p>
        <p className='reviews'> {this.state.results.reviews[1].text} </p>
        <p className='reviews'> {this.state.results.reviews[2].text} </p>
        <Link to={'/restaurants/'}>Back</Link>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  visited: state.visited
})

export default withRouter(connect(mapStateToProps)(RestaurantDetails));