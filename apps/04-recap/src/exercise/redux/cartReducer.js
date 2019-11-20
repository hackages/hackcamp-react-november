const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
const TOGGLE_CART = 'TOGGLE_CART';

/* 
  The cartReducer should only handle the cart state
  the state is described by the initialState variable
    - products is an array of id
    - isOpen is a variable describing if the cart is open or not

  It should have 3 action creators: 
    - addToCart: should take one parameter (the id)
    - removeFromCart: should take one parameter (the id)
    - toggleCart: has no parameter
*/

export const initialState = {
  products: [],
  isOpen: false
};

export const cartReducer = (state, action) => {
  return null;
};
