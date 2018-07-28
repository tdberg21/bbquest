import React, { Component } from 'react';
import { connect } from 'react-redux';

export class VisitedContainer extends Component {

  displayVisited = () => {
    return this.props.visited.map(joint => {
      return (
        <div className='visited-card'>
        <h3>{joint.restaurant_name}</h3>
        <p> rating: {joint.rating}</p>
        <p> date visited: {joint.date}</p>
        <p> meal: {joint.meal} </p>
        <p> notes: {joint.notes} </p>
        </div>
      )
    });
  }
  render () {
    console.log(this.props.visited);
    return (
      <div>
        {this.displayVisited()} 
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  visited: state.visited
});

export default connect(mapStateToProps, null)(VisitedContainer);