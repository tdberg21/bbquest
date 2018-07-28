import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from './images/pig64.png';


export default class Header extends Component {

  render() {
    return (
      <header className='header'>
        <div className='logo-container'>
          <img src={logo} className='logo' alt='BBQuest Logo' />
          <h2 className='title'>BBQuest</h2>
        </div>
        {/* <p className='user-name'>{this.props.users.name ? `Welcome ${this.props.users.name}!!` : ''}</p> */}
        <ul className='navigation-links'>
          <li>
            <NavLink className='home-link nav-links' to='/'>
              Search
            </NavLink>
          </li>
          <li>
            <NavLink className='login-link nav-links' to='/login'>
               Login
            </NavLink>
          </li>
        </ul>
      </header>
    );
  }
}