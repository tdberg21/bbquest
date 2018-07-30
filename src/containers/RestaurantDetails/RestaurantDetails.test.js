import React from 'react';
import { RestaurantDetails } from './RestaurantDetails';
import { shallow } from 'enzyme';

describe('RESTAURANT DETAILS TESTS', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<RestaurantDetails/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state with results as a key and a value of an array with 3 reviews with empty strings', () => {
    const wrapper = shallow(<RestaurantDetails />);
    const expected = { results: {reviews: [{ text: '' }, { text: '' }, { text: '' }]}};
    const result = wrapper.state();

    expect(result).toEqual(expected);
  });

  it('should call handleVisited on click of visited button', () => {
    const wrapper = shallow(<RestaurantDetails />);
    wrapper.setState({results: {reviews: [{text: 'taco'}]}});
    wrapper.instance().find('.visited-button').simulate('click');

    expect(wrapper.instance().handleVisited()).toHaveBeenCalled();
  })
});