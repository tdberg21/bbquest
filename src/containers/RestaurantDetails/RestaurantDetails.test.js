/*eslint-disable no-undef*/

import React from 'react';
import { RestaurantDetails, mapStateToProps } from './RestaurantDetails';
import { shallow } from 'enzyme';

describe('RESTAURANT DETAILS TESTS', () => {
  
  it('should match the snapshot without reviews', () => {
    const wrapper = shallow(<RestaurantDetails/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot with reviews', () => {
    const mockResults = {reviews: ['review1', 'review2', 'review3']};
    const mockAddress = { address1: '1 Taco Street', city: 'tacotown', state: 'taco' };
    const wrapper = shallow(<RestaurantDetails address={mockAddress}/>);
    wrapper.setState({
      results: mockResults
    });
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

  it('when component is mounted, it should update state with results of fetchDetails call', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        reviews: [{ text: 'taco' }, { text: 'taco' }, { text: 'taco' }] 
      })
    }));
    const mockAddress = {address1: '123 way', city: 'tacoland', state: 'taco'};
    const wrapper = await shallow(<RestaurantDetails id='1' address={mockAddress} price='7' rating='5'/>);
    await wrapper.update();

    await expect(wrapper.state()).toEqual({results: { reviews: [{ text: '' }, { text: '' }, { text: '' }]}});
  });

  describe('mapStateToProps', () => {
    it('should return an object with the visited joints array', () => {
      const mockState = {
        visited: [{ name: 'PeeWees'}]
      };
      const expected = {
        visited: [{ name: 'PeeWees' }]
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
});