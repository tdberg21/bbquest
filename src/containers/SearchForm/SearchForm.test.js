import React from 'react';
import { shallow, mount } from 'enzyme';
import { SearchForm, mapStateToProps, mapDispatchToProps } from './SearchForm';
import { addRestaurants } from '../../actions';

describe('SEARCHFORM TESTS', () => {
  
  it('should match the snapshot', () => {
    const wrapper = shallow(<SearchForm />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call handle change when the searchform field changes', () => {
    const mockEvent = { target: { value: 'abc', name: 'location'} };
    const wrapper = mount(<SearchForm />);
    const spy = spyOn(wrapper.instance(), 'handleChange');
    wrapper.instance().update;

    wrapper.find('.location-field').simulate('change', mockEvent);
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalled();
  });

  it('should update the state when handleChange is invoked', () => {
    const wrapper = shallow(<SearchForm />);
    const mockEvent = { target: { value: 'abc', name: 'location' } };

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state('location')).toEqual('abc');
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