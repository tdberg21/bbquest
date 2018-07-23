import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Header.css';


export default class Header extends Component {
  constructor () {
    super();

  }

  render() {
    return (
      <div className='header'>
        <ul className='navigation-links'>
          <li>
            <NavLink className='home-link nav-links' to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className='login-link nav-links' to='/login'>
               Login
            </NavLink>
          </li>
          <li>
            <NavLink className='search-link nav-links' to='/search'>
              Search
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}