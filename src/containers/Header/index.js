import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';


export default class Header extends Component {
  constructor () {
    super();

  }

  render() {
    return (
      <div className='header'>
        <ul className='navigation-links'>
          <li>
            <NavLink className='home-link' to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className='login-link' to='/login'>
               Login
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}