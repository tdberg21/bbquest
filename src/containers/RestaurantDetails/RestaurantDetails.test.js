import React from 'react';
import { RestaurantDetails } from './RestaurantDetails';
import { shallow } from 'enzyme';
import { fetchDetails } from '../../helpers/apiCalls';

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
  });

  // it('when component is mounted, fetchDetails is called with correct param', async () => {
  //   window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
  //     json: () => Promise.resolve({
  //       results: { reviews: [{ text: '' }, { text: '' }, { text: '' }] }
  //     })
  //   }));
  //   const wrapper = shallow(<RestaurantDetails id='FJo2jznp56MU_IdDcX038A' />);
  //   await expect(fetchDetails).toHaveBeenCalled();
  // });
});