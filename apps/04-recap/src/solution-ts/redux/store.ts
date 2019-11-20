import {createStore, combineReducers} from 'redux';
import {movieReducer, MovieState} from './movieReducer';
import {authReducer, AuthState} from './authReducer';
import {cartReducer, CartState} from './cartReducer';

export type AppState = {
  movieReducer: MovieState;
  authReducer: AuthState;
  cartReducer: CartState;
};

const rootReducer = combineReducers({
  movieReducer,
  authReducer,
  cartReducer
});

export const store = createStore(
  rootReducer,
  undefined,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
