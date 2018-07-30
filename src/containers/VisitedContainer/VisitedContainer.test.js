import React from 'react';
import { shallow } from 'enzyme';
import { VisitedContainer } from './VisitedContainer';

describe('VISITED CONTAINER TESTS', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<VisitedContainer visited='[]'/>);

    expect(wrapper).toMatchSnapshot();
  });
});