import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart, removeFromCart } from "../../redux/cartReducer";
import { CartBody } from "./CartBody";
import shopping_cart from "../../images/shopping-cart.svg";
import "../../styles/cart.css";

const getProducts = (ids = [285], movies) =>
  ids.map(id => movies.find(movie => movie.id === id));

export const Cart = () => {
  const { isOpen, count, products, movies } = useSelector(
    ({ cartReducer, movieReducer }) => ({
      isOpen: cartReducer.isOpen,
      count: cartReducer.products.length,
      products: cartReducer.products,
      movies: movieReducer.movies
    })
  );
  const dispatch = useDispatch();

  const toggleCartUi = () => dispatch(toggleCart());
  const productsWithData = getProducts(products, movies);
  const removeMovieFromCart = id => dispatch(removeFromCart(id));
  return (
    <div className={`cart-wrapper ${isOpen ? "cart-open" : ""}`}>
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
