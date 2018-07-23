import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('HEADER TESTS', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });
});