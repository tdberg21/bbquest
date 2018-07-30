import React from 'react';
import { shallow } from 'enzyme';
import { VisitedContainer } from './VisitedContainer';

describe('VISITED CONTAINER TESTS', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<VisitedContainer visited='[]'/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should return an array of divs to display', () => {
    const mockVisited = [{restaurant_name: 'PeeWees'}];
    const wrapper = shallow(<VisitedContainer visited={mockVisited} />);
    const results = wrapper.instance().displayVisited();
    expect(results.length).toEqual(1);
  });
});