import React from 'react';
import { shallow, mount } from 'enzyme';
import { SearchForm } from './SearchForm';

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
});