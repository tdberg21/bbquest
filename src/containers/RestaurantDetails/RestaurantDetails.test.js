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
    const mockAddress = {address1:'1 Taco Street', city:'tacotown', state: 'taco'};
    const mockHistory = {push: jest.fn()};
    const wrapper = shallow(<RestaurantDetails address={mockAddress} checkVisited={jest.fn()} history={mockHistory}/>);
    const spy = jest.spyOn(wrapper.instance(), 'handleVisited');

    wrapper.setState({ results: { reviews: [{ text: 'taco' }, { text: 'taco' }, { text: 'taco' }]}});
    wrapper.find('.visited-button').simulate('click');

    expect(spy).toHaveBeenCalled();
  });

  // it('when component is mounted, fetchDetails is called with correct param', async () => {
  //   window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
  //     json: () => Promise.resolve({
  //       results: { reviews: [{ text: 'taco' }, { text: 'taco' }, { text: 'taco' }] }
  //     })
  //   }));
  //   const wrapper = shallow(<RestaurantDetails id='FJo2jznp56MU_IdDcX038A' />);
  //   await expect(fetchDetails).toHaveBeenCalled();
  // });
});