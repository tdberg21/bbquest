/*eslint-disable no-undef*/

import React from 'react';
import { shallow } from 'enzyme';
import { SearchForm, mapStateToProps, mapDispatchToProps } from './SearchForm';
import { addRestaurants } from '../../actions';

describe('SEARCHFORM TESTS', () => {
  
  it('should match the snapshot', () => {
    const wrapper = shallow(<SearchForm />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should update the state when handleChange is invoked', () => {
    const wrapper = shallow(<SearchForm />);
    const mockEvent = { target: { value: 'abc', name: 'location' } };

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state('location')).toEqual('abc');
  });

  it('should push you to restaurants page when handleSubmit is called', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        businesses:  [{name: 'BBQ Restaurant', location: {address1: 'afsasf', city: 'tacoland', state: 'taco'}}]
      })
    }));
    const mockPush = jest.fn();
    const mockHistory = {push: mockPush};
    const wrapper = await shallow(<SearchForm history={mockHistory} addRestaurants={jest.fn()}/>);
    const mockEvent = {preventDefault: jest.fn()};
    await wrapper.instance().handleSubmit(mockEvent);

    expect(mockPush).toHaveBeenCalled();
  });

  describe('MATCH STATE TO PROPS', () => {
    it('should return an object with the restaurants array', () => {
      const mockState = {restaurants: [{name:'Restaurant1'}, {name:'Restaurant2'}]};
      const mappedProps = mapStateToProps(mockState);
      const expected = {restaurants: [{ name: "Restaurant1" }, { name: "Restaurant2" }]};

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('MAP DISPATCH TO PROPS', () => {
    it('calls dispatch with add restaurants action', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addRestaurants({name:'Taco'});

      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.addRestaurants({name:'Taco'});

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});