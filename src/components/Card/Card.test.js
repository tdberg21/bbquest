import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('CARD TESTS', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper).toMatchSnapshot();
  });
});

