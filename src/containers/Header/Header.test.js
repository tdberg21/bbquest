import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('HEADER TESTS', () => { 
  it('should match the snapshot without a user', () => {
    const mockUser = { };
    const mockVisited = [];
    const wrapper = shallow(<Header user={mockUser} visited={mockVisited} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot with a user', () => {
    const mockUser = {username:'tman'};
    const mockVisited = [];
    const wrapper = shallow(<Header user={mockUser} visited={mockVisited}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot with visited restaurants', () => {
    const mockUser = { username:'tman' };
    const mockVisited = ['peewees', 'moes'];
    const wrapper = shallow(<Header user={mockUser} visited={mockVisited}/>);

    expect(wrapper).toMatchSnapshot();
  });
});