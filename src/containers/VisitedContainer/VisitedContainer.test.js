/*eslint-disable camelcase*/

import React from 'react';
import { shallow } from 'enzyme';
import { VisitedContainer, mapStateToProps } from './VisitedContainer';

describe('VISITED CONTAINER TESTS', () => {
  let mockVisited = [{ restaurant_name: 'PeeWees' }];
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<VisitedContainer visited={mockVisited} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should return an array of divs to display', () => {
    const results = wrapper.instance().displayVisited();
    expect(results.length).toEqual(1);
  });

  describe('mapStateToProps', () => {
    it('should return an object with the visited restaurants array', () => {
      const mockState = {
        visited: [{ name: 'PeeWees' }]
      };
      const expected = {
        visited: [{ name: 'PeeWees' }]
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
});