import React from 'react';
import { shallow } from 'enzyme';
import { SignUpForm, mapDispatchToProps } from './SignUpForm';
import { loginUser } from '../../actions';
import { signUpUser } from '../../helpers/apiCalls';

describe('SIGN UP FORM TESTS', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<SignUpForm />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when handleChange is invoked', () => {
    const wrapper = shallow(<SignUpForm />);
    const mockEvent = { target: { name: 'username', value: 'Tory' } };

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state('username')).toEqual('Tory');

  });

  // it('should call signUpUser when handleSubmit is invoked', () => {
  //   window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
  //     ok: true,
  //     json: () => Promise.resolve({
  //       results: { id: 2 }
  //     })
  //   }));
  //   const mockHistory = { push: jest.fn() };
  //   const mockLoginUser = jest.fn();
  //   const wrapper = shallow(<SignUpForm loginUser={mockLoginUser} history={mockHistory} />);
  //   const spy = spyOn(wrapper.instance(), 'signUpUser');
  //   const mockEvent = { preventDefault: jest.fn() };

  //   wrapper.instance().handleSubmit(mockEvent);
  //   wrapper.instance().forceUpdate();


  //   expect(spy).toHaveBeenCalled();
  // });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with loginUser action', async () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = loginUser('Tory', 'td@g.com', 'password');
      const mappedProps = mapDispatchToProps(mockDispatch);
      
      mappedProps.loginUser('Tory', 'td@g.com', 'password');

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});