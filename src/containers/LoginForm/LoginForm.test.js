/*eslint-disable no-undef*/

import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm, mapStateToProps, mapDispatchToProps } from './LoginForm';
import { loginUser, addVisited } from '../../actions';


describe('LOGINFORM TESTS', () => {
  let wrapper;
  let mockHistory = {push: jest.fn()};
  let mockAddVisited = jest.fn();
  let mockLoginUser = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<LoginForm loginUser={mockLoginUser} addVisited={mockAddVisited} history={mockHistory}/>);
  });

  it('should match the snapshot without a user', () => {  
    wrapper = shallow(<LoginForm username='Tory'/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot with a user', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update the state when handleChange is invoked', () => {
    const mockEvent = { target: { value: 'abc', name: 'username' } };

    wrapper.instance().handleChange(mockEvent);
    const results = wrapper.state('username');

    expect(results).toEqual('abc');
  });


  it('should invoke handleSubmit when the form is submitted', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        results: { username: 'Tory', id: 9 }
      })
    }));
    wrapper.setState({
      username: 'Tory',
      email: 'rfd123@aol.com',
      password: 'taco'
    });
    const spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
    wrapper.setState({
      username: 'nick',
      email: 'nick@msn.com',
      password: 'unleashthecage'
    });
    const mockEvent = { preventDefault: jest.fn() };
    const submitButton = wrapper.find('.login-form-test');
    
    submitButton.simulate('submit', mockEvent);

    expect(spy).toHaveBeenCalledWith(mockEvent);
  });

  it('should invoke loginUser when handleSubmit is called', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        results: { username: 'Tory', id: 9 }
      })
    }));
    wrapper.setState({
      username: 'Tory',
      email: 'rfd123@aol.com',
      password: 'taco'
    });
    const mockEvent = { preventDefault: jest.fn() };
    await wrapper.instance().handleSubmit(mockEvent);

    expect(mockLoginUser).toHaveBeenCalled();
  });

  it('should invoke addVisited Restaurants when handleSubmit is called', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        results: { username: 'Tory', id: 9 }
      })
    }));
    wrapper.setState({
      username: 'Tory',
      email: 'rfd123@aol.com',
      password: 'taco'
    });
    const mockEvent = { preventDefault: jest.fn() };
    await wrapper.instance().handleSubmit(mockEvent);

    expect(mockAddVisited).toHaveBeenCalled();
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

  describe('mapStateToProps', () => {
    it('should return an object with the username', () => {
      const mockState = {user : {
        username: 'Tory'
      }};
      const expected = {
        username: 'Tory'
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
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