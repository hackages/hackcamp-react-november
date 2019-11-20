const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export const login = (payload: string) => ({
  type: LOGIN,
  payload
});

export const logout = () => ({
  type: LOGOUT
});

export const initialState = {
  loggedIn: false,
  token: ''
};

export type AuthState = {
  loggedIn: boolean;
  token: string;
};

const reducer: {[key: string]: (payload: string) => AuthState} = {
  [LOGIN]: (token: string) => ({
    loggedIn: true,
    token
  }),
  [LOGOUT]: () => initialState
};

type Action = {
  type: string;
  payload: string;
};

export const authReducer = (state = initialState, action: Action) => {
  const handler = reducer[action.type];
  return handler ? handler(action.payload) : state;
};
