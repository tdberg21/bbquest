import React from 'react';
import { shallow } from 'enzyme';
import { VisitedForm } from './VisitedForm';

describe('VISITED FORM TESTS', () => {
  it('should match the snapshot', () => {
    const mockUser = {username: 'Tory'};
    const wrapper = shallow(<VisitedForm user={mockUser}/>);

    expect(wrapper).toMatchSnapshot();
  });
});