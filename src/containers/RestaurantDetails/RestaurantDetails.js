import React, { Component } from 'react';
import { fetchDetails } from '../../helpers/apiCalls';
import { withRouter, Link } from 'react-router-dom';
import './RestaurantDetails.css';
import { connect } from 'react-redux';
import pig from '../../pig.gif';
import PropTypes from 'prop-types';

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

  handleVisited = (yelpId) => {
    this.props.checkVisited(yelpId);
    this.props.history.push(`/restaurants/${this.props.name}/review`);
  }
  
  render () {
    if (this.state.results.reviews[0].text !== '') {
      return (
        <div className='restaurant-details-container'>
          <section className='details-section'>
            <div className='header-image-section'>
              <h2>{this.props.name}</h2>
              <img src={this.props.image} alt="restaurant" height="200px" />
              <br/>
            </div>
            <div className='details-lower-section'>
              <a 
                className='yelp-link' 
                href={this.props.url} target='_blank'>
                Visit on Yelp!
              </a>
              <p>
                <b>Phone: </b>
                {this.props.phone} 
              </p>
              <p>
                <b>Address: </b> 
                {this.props.address.address1},
                <br/> 
                {this.props.address.city}, 
                {this.props.address.state}
              </p>
              <p>
                <b>Price Range: </b>
                {this.props.price} 
              </p>
              <p>
                <b>Rating: </b> 
                {this.props.rating} /5
              </p>
              <button 
                className='visited-button'
                onClick={() => this.handleVisited(this.props.id)}
              >
                Mark As Visited
              </button>
            </div>
          </section>
          <section className='reviews-section'>
            <h5>Reviews: </h5>
            <p className='reviews'> 
              {this.state.results.reviews[0] ? `${this.state.results.reviews[0].text}` : ''}
            </p>
            <p className='reviews'> 
              {this.state.results.reviews[1] ? `${this.state.results.reviews[1].text}` : ''} 
            </p>
            <p className='reviews'> 
              {this.state.results.reviews[2] ? `${this.state.results.reviews[2].text}` : ''} 
            </p>
            <Link to={'/restaurants/'}>Back</Link>
          </section>
        </div>
      );

    } else {
      return (
        <div className='restaurant-details-container'>
          <img src={pig} alt='loading gif' className='pig-gif'/>
        </div>

      );
    }
    
  }
}

export const mapStateToProps = state => ({
  visited: state.visited
});

export default withRouter(connect(mapStateToProps, null)(RestaurantDetails));

RestaurantDetails.propTypes = {
  address: PropTypes.object,
  id: PropTypes.string,
  checkVisited: PropTypes.func,
  phone: PropTypes.string,
  url: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  history: PropTypes.object
};