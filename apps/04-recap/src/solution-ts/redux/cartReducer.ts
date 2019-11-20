const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
const TOGGLE_CART = 'TOGGLE_CART';

export const addToCart = (payload: number) => ({
  type: ADD_ITEM_TO_CART,
  payload
});

export const removeFromCart = (payload: number) => ({
  type: REMOVE_ITEM_FROM_CART,
  payload
});

export const toggleCart = () => ({
  type: TOGGLE_CART
});

export const initialState: CartState = {
  products: [],
  isOpen: false
};

export type CartState = {
  products: number[];
  isOpen: boolean;
};

const isInCart = (products: number[], id: number) =>
  products.reduce((result, nextId) => (result ? result : nextId === id), false);

type Reducer = {
  [key: string]: (state: CartState, payload?: number) => CartState;
};

const reducer: Reducer = {
  [ADD_ITEM_TO_CART]: (state, payload = 0) => {
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

type Action = {
  type: string;
  payload?: number;
};

export const cartReducer = (state = initialState, action: Action) => {
  const handler = reducer[action.type];
  return handler ? handler(state, action.payload) : state;
};
