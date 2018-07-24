import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUpUser } from '../../helpers/apiCalls';
import './SignUpForm.css';
import { loginUser } from '../../actions';


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
    console.log(results);
    this.props.loginUser(username, results.id);
    this.props.history.push('/search');
  }

  render () {
    return (
      <div className='signup-form-container'>
        <form
          className='login-form'
          onSubmit={this.handleSubmit}
        >
          <h3 className='signup-form-header'>Please signup to search and track barbecue!</h3>
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
              className='signup-button'
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