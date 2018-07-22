import React, { Component } from 'react';
import './App.css';
import { fetchRestaurantData } from '../../helpers/apiCalls';
import { apiKey } from '../../helpers/apiKey';
import { scrubRestaurants } from '../../helpers/dataCleaners';
import { addRestaurants } from '../../actions';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import Header from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {

  componentDidMount = async () => {
    const restaurants = await fetchRestaurantData(apiKey);
    console.log(restaurants);
    const cleanRestaurants = scrubRestaurants(restaurants);
    this.props.addRestaurants(cleanRestaurants);
    console.log(cleanRestaurants);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route path='/login' component={LoginForm} />
        <Route path='/' component={CardContainer} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
