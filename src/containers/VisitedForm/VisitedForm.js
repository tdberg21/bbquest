import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


export class VisitedForm extends Component {
  constructor () {
    super();

    this.state = {
      meal: '',
      rating: '',
      notes: '',
      date: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurantToDatabase(this.state.rating, this.state.notes, this.state.date, this.state.meal)
    this.props.history.goBack();
  }

  render() {
    return (
      <div className='visited-form-container'>
        <form className='visited-form'>
          <div className='inputs'>
            <input
              className='meal-field input-fields'
              aria-label='Please Enter What You Ate'
              placeholder='What did you eat?'
              type='text'
              name='meal'
              value={this.state.meal}
              onChange={this.handleChange}
            />
            <input
              className='rating-field input-fields'
              aria-label='Please Enter a rating out of 10'
              placeholder='Enter your rating!'
              type='number'
              name='rating'
              value={this.state.rating}
              onChange={this.handleChange}
            />
            <input
              className='notes-field input-fields'
              aria-label='Please Enter Notes About Your Visit'
              placeholder='Notes'
              type='text'
              name='notes'
              value={this.state.notes}
              onChange={this.handleChange}
            />
            <input
              className='date-field input-fields'
              aria-label='Please Enter Your Password'
              placeholder='date of visit'
              type='date'
              name='date'
              value={this.state.date}
              onChange={this.handleChange}
            />
            <button
              className='visit-button'
              aria-label='Submit review'
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(VisitedForm);