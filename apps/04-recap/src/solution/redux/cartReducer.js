const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
const TOGGLE_CART = "TOGGLE_CART";

export const addToCart = payload => ({
  type: ADD_ITEM_TO_CART,
  payload
});

export const removeFromCart = payload => ({
  type: REMOVE_ITEM_FROM_CART,
  payload
});

export const toggleCart = () => ({
  type: TOGGLE_CART
});

export const initialState = {
  products: [],
  isOpen: false
};

const isInCart = (products, id) =>
  products.reduce((result, nextId) => (result ? result : nextId === id), false);

const reducer = {
  [ADD_ITEM_TO_CART]: (state, payload) => {
    const products = isInCart(state.products, payload)
      ? state.products
      : [...state.products, payload];

    return {
      ...state,
      products
    };
  },
  [REMOVE_ITEM_FROM_CART]: (state, payload) => {
    const products = state.products.filter(
      nextElement => nextElement !== payload
    );

    return {
      ...state,
      products
    };
  },
  [TOGGLE_CART]: state => ({
    ...state,
    isOpen: !state.isOpen
  })
};

export const cartReducer = (state = initialState, action = {}) => {
  const handler = reducer[action.type];
  return handler ? handler(state, action.payload) : state;
};
