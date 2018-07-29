import React, { Component } from 'react';
import { connect } from 'react-redux';
import './VisitedContainer.css';

export class VisitedContainer extends Component {

  displayVisited = () => {
    return this.props.visited.map((joint, index) => {
      return (
        <div 
          className='visited-card' 
          key={`${index}+ ${joint.restaurant_name}`}
        >
          <h3>{joint.restaurant_name}</h3>
          <p> rating: {joint.rating}</p>
          <p> date visited: {joint.date}</p>
          <p> meal: {joint.meal} </p>
          <p> notes: {joint.notes} </p>
        </div>
      );
    });
  }
  render () {
    return (
      <div className='visited-container'>
        {this.displayVisited()} 
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  visited: state.visited
});

export default connect(mapStateToProps, null)(VisitedContainer);