import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import './VisitedForm.css';


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
    this.props.addRestaurantToDatabase(this.state.rating, this.state.notes, this.state.date, this.state.meal);
    this.props.history.goBack();
  }

  render() {
    if (this.props.user.username) {
      return (
        <div className='visited-form-container'>
          <form className='visited-form'>
            <div className='inputs'>
              <label htmlFor='meal'>What did you eat?</label>
              <input
                id='meal'
                className='meal-field visited-fields'
                aria-label='Please Enter What You Ate'
                placeholder='Pulled pork, brisket, ribs, etc..'
                type='text'
                name='meal'
                value={this.state.meal}
                onChange={this.handleChange}
              />
              <div className='rating-date-container'>
                <div className='rating-container'>
                  <label htmlFor='rating'>Rating:</label>
                  <input
                    id='rating'
                    className='rating-field visited-fields'
                    aria-label='Please Enter a rating out of 10'
                    placeholder='0 through 5'
                    min='0'
                    max='5'
                    type='number'
                    name='rating'
                    value={this.state.rating}
                    onChange={this.handleChange}
                  />
                </div>  
                <div className='date-container'>
                  <label htmlFor='date'>Date:</label>
                  <input
                    id='date'
                    className='date-field visited-fields'
                    aria-label='Please Enter Your Password'
                    placeholder='date of visit'
                    type='date'
                    name='date'
                    value={this.state.date}
                    onChange={this.handleChange}
                  />
                </div>
              </div>  
              <label htmlFor='notes'>Notes:</label>
              <input
                id='notes'
                className='notes-field visited-fields'
                aria-label='Please Enter Notes About Your Visit'
                type='text'
                name='notes'
                value={this.state.notes}
                onChange={this.handleChange}
              />
              <button
                className='submit-button'
                aria-label='Submit review'
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div> 
          <Link to={'/login/'}>Please Sign In!</Link>
        </div>
      );
    }

  }
}

export const mapStateToProps = (state) => ({
  user: state.user
});

export default withRouter(connect(mapStateToProps, null)(VisitedForm));