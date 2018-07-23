import React from 'react';
import { shallow } from 'enzyme';
import { SearchForm } from './SearchForm';

describe('SEARCHFORM TESTS', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<SearchForm />);

    expect(wrapper).toMatchSnapshot();
  });
});