import React, { Component } from 'react';
import './App.css';
import { fetchRestaurantData } from './helpers/apiCalls';
import { apiKey } from './helpers/apiKey';
import { mockResponse } from './helpers/mockdata';
import { scrubRestaurants } from './helpers/dataCleaners';
import { addRestaurants } from './actions';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import LoginForm from './containers/LoginForm/LoginForm';
import Header from './containers/Header';

class App extends Component {

  componentDidMount = async () => {
    // const restaurants = await fetchRestaurantData(apiKey);
    const cleanRestaurants = scrubRestaurants(mockResponse);
    this.props.addRestaurants(cleanRestaurants);
    console.log(cleanRestaurants);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/login' component={LoginForm} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
