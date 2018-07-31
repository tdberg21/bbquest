import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer, mapStateToProps } from './CardContainer';

describe('CARDCONTAINER TESTS', () => {
  it('should match the snapshot with restaurants', () => {
    const mockRestaurants= [{name:'PeeWees'}];
    const wrapper = shallow(<CardContainer restaurants={mockRestaurants}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot without restaurants', () => {
    const mockRestaurants = [];
    const wrapper = shallow(<CardContainer restaurants={mockRestaurants} />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return an object with the restaurants array', () => {
      const mockState = {
        restaurants: ['PeeWees']
      };
      const expected = {
        restaurants: ['PeeWees']
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
});