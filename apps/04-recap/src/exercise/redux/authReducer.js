const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

/* 
  The authReducer should only handle the auth state
  the state is described by the initialState variable
  It should have 2 action creators: login and logout
*/

export const initialState = {
  loggedIn: false,
  token: null
};

export const authReducer = (state, action) => {
  return null;
};
