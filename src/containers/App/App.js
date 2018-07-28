import React, { Component } from 'react';
import './App.css';
// import { fetchRestaurantData } from './helpers/apiCalls';
// import { apiKey } from './helpers/apiKey';
import { mockResponse } from '../../helpers/mockdata';
import { scrubRestaurants } from '../../helpers/dataCleaners';
import { addRestaurants } from '../../actions';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import Header from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
import SearchForm from '../SearchForm/SearchForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import RestaurantDetails from '../RestaurantDetails/RestaurantDetails';
import VisitedForm from '../VisitedForm/VisitedForm';

export class App extends Component {

  // componentDidMount = async () => {
  //   // const restaurants = await fetchRestaurantData(apiKey);
  //   const cleanRestaurants = scrubRestaurants(mockResponse);
  //   this.props.addRestaurants(cleanRestaurants);
  //   console.log(cleanRestaurants);
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Route path='/login' component={LoginForm} />
        <Route path='/search' component={SearchForm} />
        <Route exact path='/' component={SearchForm} />
        <Route exact path='/restaurants' component={CardContainer} />
        <Route path='/signup' component={SignUpForm} />
        <Route path='/restaurants/:name' render={({ match }) => {
          let restaurant = this.props.restaurants.find(restaurant => restaurant.name === match.params.name);
          return <RestaurantDetails {...restaurant} />;
        }} />
        <Route path='/restaurants/:name/review' component={VisitedForm}/>
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
