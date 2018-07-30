import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm, mapDispatchToProps } from './LoginForm';
import { loginUser, addVisited } from '../../actions';
import { fetchUser } from '../../helpers/apiCalls';

describe('LOGINFORM TESTS', () => {
  let wrapper;
  let mockHistory = {push: jest.fn()};

  beforeEach(() => {
    wrapper = shallow(<LoginForm loginUser={jest.fn()} addVisited={jest.fn()} history={mockHistory}/>);
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

  it('should invoke fetchUser when handleSubmit is called', async () => {
    const mockEvent = { preventDefault: jest.fn() };
    await wrapper.instance().handleSubmit(mockEvent);

    expect(fetchUser).toHaveBeenCalled();
  });

  it('should invoke fetchVisitedRestaurants when handleSubmit is called', async () => {
    const mockEvent = { preventDefault: jest.fn() };
    await wrapper.instance().handleSubmit(mockEvent);

    expect(fetchVisitedRestaurants).toHaveBeenCalled();
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