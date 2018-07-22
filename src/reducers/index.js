import { combineReducers } from 'redux';
import { restaurantReducer } from './restaurantReducer';
import { userReducer } from './userReducer';
import { visitedReducer } from './visitedReducer';

const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  user: userReducer,
  visited: visitedReducer
});

export default rootReducer;