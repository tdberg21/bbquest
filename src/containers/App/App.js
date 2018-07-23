import React, { Component } from 'react';
// import './App.css';
import { addRestaurants } from '../../actions';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import Header from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
import SearchForm from '../SearchForm/SearchForm';

class App extends Component {

  componentDidMount = async () => {
    
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route path='/login' component={LoginForm} />
        <Route path='/restaurants' component={CardContainer} />
        {/* <Route path='/' component={SearchForm} /> */}
        <Route path='/search' component={SearchForm} />
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
