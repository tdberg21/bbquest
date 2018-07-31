import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser, addVisited } from '../../actions';
import { fetchUser, fetchVisitedRestaurants } from '../../helpers/apiCalls';
import './LoginForm.css';
import SearchForm from '../SearchForm/SearchForm';
import PropTypes from 'prop-types';

export class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      email: '',
      password: ''
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
    const { username, email, password } = this.state;
    const results = await fetchUser(username, email, password);
    const visited = await fetchVisitedRestaurants(results.id);
    this.props.loginUser(results.username, results.id);
    this.props.addVisited(visited);
    this.props.history.push('/search');
  }

  resetState = () => {
    this.setState({
      username: '',
      email: '',
      password: ''
    });
  }

  render() {
    if (!this.props.username) {
      return (
        <div className='login-form-container'>
          <form 
            className='login-form login-form-test'
            onSubmit={this.handleSubmit}
          >
            <div className='inputs'>
              <label htmlFor="username">Username:</label>
              <input
                id='username'
                className='username-field input-fields'
                aria-label='Please Enter Your Username'
                type='text'
                name='username'
                value={this.state.username}
                onChange={this.handleChange}
              />
              <label htmlFor="email">Email:</label>
              <input
                id='email'
                className='email-field input-fields'
                aria-label='Please Enter Your Email'
                type='text'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
              />
              <label htmlFor="password">Password:</label>
              <input
                className='password-field input-fields'
                aria-label='Please Enter Your Password'
                type='password'
                name='password'
                value={this.state.password}
                onChange={this.handleChange}
              />
              <button
                className='login-button'
                aria-label='Sign in to your account'
              >
                Login
              </button>
            </div>
            <Link to='/signup'>
              Don't have an account?
            </Link>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <SearchForm />
        </div>
      );
    }
  }
}

export const mapStateToProps = (state) => ({
  username: state.user.username
});

export const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (username, id) => dispatch(loginUser(username, id)),
    addVisited: (visited) => dispatch(addVisited(visited))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

LoginForm.propTypes = {
  username: PropTypes.string,
  addVisited: PropTypes.func,
  loginUser: PropTypes.func,
  history: PropTypes.object
};