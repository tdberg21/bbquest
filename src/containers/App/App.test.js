/*eslint-disable no-undef*/

import React from 'react';
import { App, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
import { addRestaurants, logOutUser, addVisited } from '../../actions';

describe('APP TESTS', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should push you back to restaurants page if there is a duplicate', () => {
    const mockVisited = [{yelpId:1}];
    const mockPush = jest.fn();
    const mockHistory = {push: mockPush};
    const wrapper = shallow(<App visited={mockVisited} history={mockHistory}/>);
    
    wrapper.instance().checkVisited(1);
    
    expect(mockPush).toHaveBeenCalled();
  });

  it('should set state if there is no duplicate', () => {
    const mockVisited = [{ yelpId: 1 }];
    const mockPush = jest.fn();
    const mockHistory = { push: mockPush };
    const wrapper = shallow(<App visited={mockVisited} history={mockHistory} />);

    wrapper.instance().checkVisited(2);

    expect(wrapper.state('yelpId')).toEqual(2);
  });

  it('should call addVisited when addRestaurantToDB is invoked', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        results: ['PeeWees']
      })
    }));
    const mockUser = {id: 9};
    const mockAddVisited = jest.fn();
    const mockRestaurants = [{ id: 1, name: 'PeeWees' }, { id: 2, name: 'Moes' }];
    const wrapper = shallow(<App restaurants={mockRestaurants} user={mockUser} addVisited={mockAddVisited}/>);
    wrapper.setState({
      yelpId: 1
    });

    await wrapper.instance().addRestaurantToDatabase(2, 'taco', 'june', 'food');

    await expect(mockAddVisited).toHaveBeenCalled();
  });

  it('should find a restaurant', () => {
    const mockRestaurants = [{id: 1, name: 'PeeWees'}, {id: 2, name: 'Moes'}];
    const wrapper = shallow(<App restaurants={mockRestaurants}/>);
    const expected = {id: 1, name: 'PeeWees'};
    const results = wrapper.instance().findRestaurant(1);
    
    expect(results).toEqual(expected);
  });

  it('should call logOutUser when logOut is invoked', () => {
    const mockLogOut = jest.fn();
    const wrapper = shallow(<App logOut={mockLogOut} addVisited={jest.fn()}/>);

    wrapper.instance().logOut();
    expect(mockLogOut).toHaveBeenCalled();
  });

  it('should call addVisited when logOut is invoked', () => {
    const mockAddVisited = jest.fn();
    const wrapper = shallow(<App logOut={jest.fn()} addVisited={mockAddVisited} />);

    wrapper.instance().logOut();
    expect(mockAddVisited).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    
    it('calls dispatch with addRestaurants action', async () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addRestaurants(['PeeWees']);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.addRestaurants(['PeeWees']);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with logOutUser action', async () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = logOutUser();
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.logOut();

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
