export const userReducer = (state={}, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return { username: action.username };
    default:
      return state;
  }
};