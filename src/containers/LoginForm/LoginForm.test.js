import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm, mapDispatchToProps } from './LoginForm';
import { loginUser, addVisited } from '../../actions';

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


  describe('mapDispatchToProps', () => {
    it('calls dispatch with loginUser action', async () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = loginUser('Tory', 9);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.loginUser('Tory', 9);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with addVisited action', async () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addVisited('PeeWees');
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.addVisited('PeeWees');

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});