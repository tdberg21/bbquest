import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { loginUser, addVisited } from '../../actions';
import { fetchUser, fetchVisitedRestaurants } from '../../helpers/apiCalls';
import './LoginForm.css';

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
    return (
      <div className='login-form-container'>
        <form 
          className='login-form'
          onSubmit={this.handleSubmit}
        >
          <h3 className='form-header'>Please login to search and track barbecue!</h3>
          <div className='inputs'>
            <input
              className='username-field'
              aria-label='Please Enter Your Username'
              placeholder='username'
              type='text'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
            />
            <input
              className='email-field'
              aria-label='Please Enter Your Email'
              placeholder='email'
              type='text'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input
              className='password-field'
              aria-label='Please Enter Your Password'
              placeholder='password'
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
        </form>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  username: state.user.username
});

export const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (username, password) => dispatch(loginUser(username, password)),
    addVisited: (visited) => dispatch(addVisited(visited))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);