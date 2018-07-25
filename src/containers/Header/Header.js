import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Header.css';
import logo from './images/pig64.png';


export default class Header extends Component {
  constructor () {
    super();

  }

  render() {
    return (
      <header className='header'>
        <div className='logo-container'>
          <img src={logo} className='logo' alt='BBQuest Logo' />
          <h2 className='title'>BBQ Tour of North America</h2>
        </div>
        <ul className='navigation-links'>
          <li>
            <NavLink className='home-link nav-links' to='/restaurants'>
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
      </header>
    );
  }
}