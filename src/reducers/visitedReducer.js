export const visitedReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_VISITED':
      return [...action.visited];
    default:
      return state;
  }
};