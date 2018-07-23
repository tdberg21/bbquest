import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer } from './CardContainer';

describe('CARDCONTAINER TESTS', () => {
  it('should match the snapshot', () => {
    const mockRestaurants= [{name:'PeeWees'}];
    const wrapper = shallow(<CardContainer restaurants={mockRestaurants}/>);

    expect(wrapper).toMatchSnapshot();
  });
});