import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {toggleCart, removeFromCart} from '../../redux/cartReducer';
import {CartBody} from './CartBody';
import shopping_cart from '../../images/shopping-cart.svg';
import '../../styles/cart.css';
import {MovieType} from '../../movieType';
import {AppState} from '../../redux/store';

type CartState = {
  isOpen: boolean;
  count: number;
  products: number[];
  movies: MovieType[];
};

export const Cart = () => {
  const {isOpen, count, products, movies} = useSelector<AppState, CartState>(
    ({cartReducer, movieReducer}) => ({
      isOpen: cartReducer.isOpen,
      count: cartReducer.products.length,
      products: cartReducer.products,
      movies: movieReducer.movies
    })
  );
  const dispatch = useDispatch();

  const toggleCartUi = () => dispatch(toggleCart());
  const productsWithData = products
    .map(id => movies.find(movie => movie.id === id))
    .filter(Boolean) as MovieType[];

  const removeMovieFromCart = (id: number) => dispatch(removeFromCart(id));
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
