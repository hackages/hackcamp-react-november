import {createStore, combineReducers} from 'redux';
import {movieReducer} from './movieReducer';
import {authReducer} from './authReducer';
import {cartReducer} from './cartReducer';

// Create your root reducer by combining the 3 reducers imported
const rootReducer = () => {};

export const store = createStore(
  rootReducer,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
