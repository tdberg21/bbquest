export const userReducer = (state={}, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return { username: action.username, id: action.id };
    case 'LOGOUT_USER':
      return {};
    default:
      return state;
  }
};