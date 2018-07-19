export const restaurantReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_RESTAURANTS':
      return [...action.restaurants];
    default: 
      return state;
  }
};