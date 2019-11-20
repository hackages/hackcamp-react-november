import { createStore, combineReducers } from "redux";
import { movieReducer } from "./movieReducer";
import { authReducer } from "./authReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
  movieReducer,
  authReducer,
  cartReducer
});

export const store = createStore(
  rootReducer,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
