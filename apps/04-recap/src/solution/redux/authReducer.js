const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

export const login = payload => ({
  type: LOGIN,
  payload
});

export const logout = () => ({
  type: LOGOUT
});

export const initialState = {
  loggedIn: false,
  token: null
};

const reducer = {
  [LOGIN]: token => ({
    loggedIn: true,
    token
  }),
  [LOGOUT]: () => initialState
};

export const authReducer = (state = initialState, action) => {
  const handler = reducer[action.type];
  return handler ? handler(action.payload) : state;
};
