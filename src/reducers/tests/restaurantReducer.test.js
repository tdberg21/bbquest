import { restaurantReducer } from '../restaurantReducer.js';
import * as actions from '../../actions/index.js';

describe('Restaurant Reducer tests', () => {
  it('should return the initial state', () => {
    const expected = [];
    const results = restaurantReducer(undefined, {});

    expect(results).toEqual(expected);
  });

  it('should return an array of restaurants', () => {
    const restaurants = [
      { name: 'moes', rating: 4.5, price: "$$$" }, 
      { name: 'pee wees', rating: 8.5, price: "$$" }];
    const expected = restaurants;
    const results = restaurantReducer(undefined, actions.addRestaurants(restaurants));

    expect(results).toEqual(expected);
  });
});