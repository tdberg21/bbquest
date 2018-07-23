import { visitedReducer } from '../visitedReducer';
import * as actions from '../../actions';

describe('visitedReducer tests', () => {

  it('should return the default state', () => {
    const expected = [];
    const results = visitedReducer(undefined, {});

    expect(results).toEqual(expected);
  });

  it('should return an array of visited restaurants', () => {
    const mockVisited = [{rating:6, notes:'good pork!', date:'July 21', user_id:'9'}];
    const results = visitedReducer(undefined, actions.addVisited(mockVisited));

    expect(results).toEqual(mockVisited);
  });
});