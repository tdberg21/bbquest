import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurantData } from '../../helpers/apiCalls';
import { apiKey } from '../../helpers/apiKey';
import { scrubRestaurants } from '../../helpers/dataCleaners';
import { addRestaurants } from '../../actions';
import './SearchForm.css';
import { mockResponse } from '../../helpers/mockdata';



export class SearchForm extends Component {
  constructor() {
    super();

    this.state = {
      location: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push('/restaurants');
    const cleanRestaurants = scrubRestaurants(mockResponse);
    this.addRestaurantsToStore(cleanRestaurants);
    const restaurants = await fetchRestaurantData(apiKey, this.state.location);
  }

  addRestaurantsToStore = (restaurants) => {
    this.props.addRestaurants(restaurants);
  }

  render() {
    return (
      <div className='search-form-container'>
        <form
          className='search-form'
          onSubmit={this.handleSubmit}
        >
          <input
            className='location-field'
            aria-label='Enter Your Location'
            placeholder='Enter a city and state to find BBQ!'
            type='text'
            name='location'
            value={this.state.location}
            onChange={this.handleChange}
          />
          <button
            className='submit-location-button'
            aria-label='Submit location'
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  restaurants: state.restaurants
});

export const mapDispatchToProps = (dispatch) => ({
  addRestaurants: (restaurants) => dispatch(addRestaurants(restaurants))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);