import { userReducer } from '../userReducer';
import * as actions from '../../actions';

describe('user reducer tests', () => {
  it('should return the initial state', () => {
    const expected = {};
    const results = userReducer(undefined, {});

    expect(results).toEqual(expected);
  });

  it('should return a user object', () => {
    const expected = {username: 'nick', id: 9};
    const results = userReducer(undefined, actions.loginUser('nick', 9));

    expect(results).toEqual(expected);
  });
});