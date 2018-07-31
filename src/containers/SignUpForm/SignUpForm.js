import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUpUser } from '../../helpers/apiCalls';
import './SignUpForm.css';
import { loginUser } from '../../actions';
import PropTypes from 'prop-types';


export class SignUpForm extends Component {
  constructor () {
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
    const results = await signUpUser(username, email, password);
    this.props.loginUser(username, results.id);
    this.props.history.push('/search');
  }

  render () {
    return (
      <div className='login-form-container'>
        <form
          className='login-form'
          onSubmit={this.handleSubmit}
        >
          <div className='inputs'>
            <label htmlFor='username'>Username:</label>
            <input
              id='username'
              className='username-field input-fields'
              aria-label='Please Enter Your Username'
              type='text'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
            />
            <label htmlFor='email'>Email:</label>
            <input
              id='email'
              className='email-field input-fields'
              aria-label='Please Enter Your Email'
              type='text'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label htmlFor='password'>Password:</label>
            <input
              id='password'
              className='password-field input-fields'
              aria-label='Please Enter Your Password'
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button
              className='login-button'
              aria-label='Sign up your account'
            >
              Signup
            </button>
          </div>
          <Link to='/login'>
            Already have an account?
          </Link>
        </form>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  loginUser: (username, id) => dispatch(loginUser(username, id))
});

export default connect(null, mapDispatchToProps)(SignUpForm);

SignUpForm.propTypes = {
  loginUser: PropTypes.func,
  history: PropTypes.object
};