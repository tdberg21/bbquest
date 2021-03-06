import React, { Component } from 'react';
import { connect } from 'react-redux';
import './VisitedContainer.css';
import PropTypes from 'prop-types';

export class VisitedContainer extends Component {


  displayVisited = () => {
    return this.props.visited.map((joint, index) => {
      return (
        <div 
          className='visited-card' 
          key={`${index}+ ${joint.restaurant_name}`}
        >
          <h3 className='visited-header'>{joint.restaurant_name}</h3>
          <img className='joint-image' src={joint.imageUrl}/>
          <div className='text-holder'>
            <p> <b> Rating: </b> </p>
            <p>{joint.rating}</p>
          </div>
          <div className='text-holder'>
            <p><b> Date Visited:</b></p> 
            <p>{joint.date}</p>
          </div>
          <div className='text-holder'>
            <p><b> Meal: </b></p>
            <p>{joint.meal} </p>
          </div>
          <div className='text-holder'>
            <p> <b>Notes: </b></p> 
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

VisitedContainer.propTypes = {
  visited: PropTypes.array
};