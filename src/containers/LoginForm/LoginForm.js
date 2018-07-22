import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { loginUser } from '../../actions';
import { fetchUser } from '../../helpers/apiCalls';

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

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password } = this.state;
    const results = fetchUser(username, email, password);
    this.props.loginUser(this.state.username);
    this.props.history.push('/');
  }

  render() {
    return (
      <form 
        className='login-form'
        onSubmit={this.handleSubmit}
      >
        <h3 className='form-header'>Log In</h3>
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
      </form>
    );
  }
}

export const mapStateToProps = (state) => ({
  username: state.user.username
});

export const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (username) => dispatch(loginUser(username))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);