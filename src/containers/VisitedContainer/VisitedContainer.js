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
          <h3 className='visited-header'>{joint.restaurant_name}</h3>
          <div className='text-holder'>
            <p> Rating: </p>
            <p>{joint.rating}</p>
          </div>
          <div className='text-holder'>
            <p> Date Visited:</p> 
            <p>{joint.date}</p>
          </div>
          <div className='text-holder'>
            <p> Meal: </p>
            <p>{joint.meal} </p>
          </div>
          <div className='text-holder'>
            <p> Notes: </p> 
            <p>{joint.notes} </p>
          </div>
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