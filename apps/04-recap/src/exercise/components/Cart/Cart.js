import React from 'react';
// import {toggleCart, removeFromCart} from '../../redux/cartReducer';
import {CartBody} from './CartBody';
import shopping_cart from '../../images/shopping-cart.svg';
import '../../styles/cart.css';

const getProducts = (ids = [285], movies) =>
  ids.map(id => movies.find(movie => movie.id === id));

export const Cart = () => {
  // TODO: Get those variable from the store
  const {isOpen, count, products, movies = []} = {};

  // TODO: This action will dispatch the 'toggleCart' action to the store
  const toggleCartUi = () => {};

  const productsWithData = getProducts(products, movies);

  // TODO: This function will dispatch the 'removeFromCart' action to the store
  const removeMovieFromCart = id => {};

  return (
    <div className={`cart-wrapper ${isOpen ? 'cart-open' : ''}`}>
      {!isOpen ? (
        <div onClick={toggleCartUi}>
          <img src={shopping_cart} alt="" />
          <span className="counter">{count}</span>
        </div>
      ) : (
        <>
          <CartBody
            products={productsWithData}
            closeCart={toggleCartUi}
            removeMovieFromCart={removeMovieFromCart}
          />
        </>
      )}
    </div>
  );
};
