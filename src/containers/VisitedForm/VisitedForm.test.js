/*eslint-disable no-undef*/

import React from 'react';
import { shallow } from 'enzyme';
import { VisitedForm, mapStateToProps } from './VisitedForm';

describe('VISITED FORM TESTS', () => {
  it('should match the snapshot with a user', () => {
    const mockUser = {username: 'Tory'};
    const wrapper = shallow(<VisitedForm user={mockUser}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot without a user', () => {
    const mockUser = { username: '' };
    const wrapper = shallow(<VisitedForm user={mockUser} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when handleChange is invoked', () => {
    const mockUser = { username: 'Tory' };
    const wrapper = shallow(<VisitedForm user={mockUser} />);
    const mockEvent = {target: {name: 'meal', value: 'pulled pork' }};

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state('meal')).toEqual('pulled pork');
    
  });

  it('should call addRestaurant to Database when handleSubmit is invoked', () => {
    const mockUser = { username: 'Tory' };
    const mockAddRestaurant = jest.fn();
    const mockHistory = {goBack: jest.fn()};
    const wrapper = shallow(<VisitedForm user={mockUser} addRestaurantToDatabase={mockAddRestaurant} history={mockHistory}/>);
    const mockEvent = {preventDefault: jest.fn()};
    
    wrapper.instance().handleSubmit(mockEvent);

    expect(mockAddRestaurant).toHaveBeenCalled();
  });

  describe('mapStateToProps', () => {
    it('should return an object with the user array', () => {
      const mockState = {
        user: [{ username: 'Arnold', id: 0 }]
      };
      const expected = {
        user: [{ username: 'Arnold', id: 0 }]
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
});