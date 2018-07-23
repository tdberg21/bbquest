import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm } from './LoginForm';

describe('LOGINFORM TESTS', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LoginForm />);
  });

  it('should match the snapshot', () => {    
    expect(wrapper).toMatchSnapshot();
  });

  it('should update the state when handleChange is invoked', () => {
    const mockEvent = { target: { value: 'abc', name: 'username' } };

    wrapper.instance().handleChange(mockEvent);
    const results = wrapper.state('username');

    expect(results).toEqual('abc');
  });

  it('should reset the state when resetState is invoked', () => {
    const expected = {username: '', email: '', password: ''};
    wrapper.instance().setState({
      username: 'Todd',
      email: 'todd@a.com',
      password: 'password'
    });
    wrapper.instance().resetState();
    const results = wrapper.state();
  
    expect(results).toEqual(expected);
  });
});