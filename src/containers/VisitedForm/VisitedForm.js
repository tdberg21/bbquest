import React, { Component } from 'react';


export class VisitedForm extends Component {
  constructor () {
    super();

    this.state = {
      meal: '',
      notes: '',
      date: ''
    };
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
            >
              Submit
              </button>
          </div>
        </form>
      </div>
    );
  }
}

export default VisitedForm;