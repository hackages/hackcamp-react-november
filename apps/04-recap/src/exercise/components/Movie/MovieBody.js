import React from 'react';
// import { addToCart, removeFromCart } from "../../redux/cartReducer";

const shorten = (text, limit = 140) =>
  text
    .split('')
    .slice(0, limit)
    .join('') + '...';

const isInCart = (id, products) =>
  products.reduce((result, nextId) => (result ? result : nextId === id), false);

export const MovieBody = ({showBody, data}) => {
  // TODO: take the products from the store
  const products = [];

  // TODO: dispatch the right actions
  const addMovieToCart = id => null;
  const removeMovieFromCart = id => null;

  return (
    <div className={`movie-body ${showBody ? 'show-movie-body' : ''}`}>
      <h1>{data.title}</h1>
      <p>{shorten(data.overview)}</p>
      {isInCart(data.id, products) ? (
        <button className="btn btn-danger">Remove from cart</button>
      ) : (
        <button className="btn add">Add to cart</button>
      )}
    </div>
  );
};
