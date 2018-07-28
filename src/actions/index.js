export const addRestaurants = (restaurants) => ({
  type: 'ADD_RESTAURANTS',
  restaurants
});

export const loginUser = (username, id) => ({
  type: 'LOGIN_USER',
  username,
  id
});

export const logOutUser = () => ({
  type: 'LOGOUT_USER'
});

export const addVisited = (visited) => ({
  type: 'ADD_VISITED',
  visited
});

