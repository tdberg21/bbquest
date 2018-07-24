import React, { Component } from 'react';
import connect from 'react-redux';

export default class SignUpForm extends Component {
  constructor () {
    super();

    this.state = {
      username: '',
      email: '',
      password: ''
    };
  }

  render () {
    return (
      <div className='signup-form-container'>
        SignUpForm
      </div>
    );
  }
}