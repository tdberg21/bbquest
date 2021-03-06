import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurantData } from '../../helpers/apiCalls';
import { apiKey } from '../../helpers/apiKey';
import { scrubRestaurants } from '../../helpers/dataCleaners';
import { addRestaurants } from '../../actions';
import './SearchForm.css';
import PropTypes from 'prop-types';


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
    const restaurants = await fetchRestaurantData(apiKey, this.state.location);
    const cleanRestaurants = scrubRestaurants(restaurants);
    this.addRestaurantsToStore(cleanRestaurants);
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
          <label 
            htmlFor='location'
            className='search-label'>
            Enter a city and state or zip code to find BBQ!
          </label>
          <input
            id='location'
            className='location-field'
            aria-label='Enter Your Location'
            placeholder='City and State or Zip Code'
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

SearchForm.propTypes = {
  addRestaurants: PropTypes.func,
  history: PropTypes.object
};