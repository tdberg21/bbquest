import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

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

  render() {
    return(
      <form>
        <h1 className='form-header'>Sign In</h1>
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
      </form>
    );
  }
}

export default LoginForm;