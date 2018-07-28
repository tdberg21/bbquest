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
import { addVisitedRestaurant } from '../../helpers/apiCalls.js';
import VisitedForm from '../VisitedForm/VisitedForm';

export class App extends Component {
  constructor () {
    super();

    this.state = {
      yelpId : ''
    }
  }

  // componentDidMount = async () => {
  //   // const restaurants = await fetchRestaurantData(apiKey);
  //   const cleanRestaurants = scrubRestaurants(mockResponse);
  //   this.props.addRestaurants(cleanRestaurants);
  //   console.log(cleanRestaurants);
  // }

  checkVisited = (yelpId) => {
    console.log(yelpId, this.props.user.id);
    const jointToSave = this.findRestaurant(yelpId);
    const duplicate = this.props.visited.find(visited => visited.yelpId === yelpId)
    if (duplicate) {
      console.log('DUPLICATE')
      this.props.history.push('/restaurants/');
    } else {
      this.setState({
        yelpId
      })
    }
  }

  addRestaurantToDatabase = async (rating, notes, date, meal) => {
    const jointToSave = await this.findRestaurant(this.state.yelpId);
    // console.log(rating, notes, date, this.props.user.id, jointToSave.name, meal, this.state.yelpId)
    const results = await addVisitedRestaurant(rating, notes, date, this.props.user.id, jointToSave.name, meal, this.state.yelpId)
    console.log(results);
  }

  findRestaurant = yelpId => {
    return this.props.restaurants.find(restaurant => restaurant.id === yelpId)
  }

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
          return <RestaurantDetails checkVisited={this.checkVisited} {...restaurant} />;
        }} />
        <Route path='/restaurants/:name/review' render={() => <VisitedForm addRestaurantToDatabase={this.addRestaurantToDatabase}/>}/>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
  user: state.user,
  visited: state.visited
});

export const mapDispatchToProps = (dispatch) => ({
  addRestaurants: (restaurants) => dispatch(addRestaurants(restaurants))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
