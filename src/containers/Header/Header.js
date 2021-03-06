import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from './images/pig64.png';
import PropTypes from 'prop-types';


export default class Header extends Component {

  render() {
    return (
      <header className='header'>
        <div className='logo-container'>
          <img src={logo} className='logo' alt='BBQuest Logo' />
          <h2 className='title'>BBQuest</h2>
        </div>
        <h5 className='user-name'>{this.props.user.username ? `Welcome ${this.props.user.username}!` : ''}</h5>
        <ul className='navigation-links'>
          <li>
            <NavLink className='visited-link nav-links' to='/visited'>
              {this.props.visited.length ? 'Visited' : ''}
            </NavLink>
          </li>
          <li>
            <NavLink className='home-link nav-links' to='/'>
              Search
            </NavLink>
          </li>
          <li>
            <NavLink className='login-link nav-links' to='/login'>
              {this.props.user.username ? <a className='log-out' onClick={this.props.logOutUser}>Logout</a> : 'Login'}
            </NavLink>
          </li>
          
        </ul>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object,
  visited: PropTypes.array,
  logOutUser: PropTypes.func
};