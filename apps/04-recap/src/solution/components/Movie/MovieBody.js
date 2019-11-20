import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartReducer";

const shorten = (text, limit = 140) =>
  text
    .split("")
    .slice(0, limit)
    .join("") + "...";

const isInCart = (id, products) =>
  products.reduce((result, nextId) => (result ? result : nextId === id), false);

export const MovieBody = ({ showBody, data }) => {
  const products = useSelector(state => state.cartReducer.products);

  const dispatch = useDispatch();

  const addMovieToCart = id => dispatch(addToCart(id));
  const removeMovieFromCart = id => dispatch(removeFromCart(id));

  return (
    <div className={`movie-body ${showBody ? "show-movie-body" : ""}`}>
      <h1>{data.title}</h1>
      <p>{shorten(data.overview)}</p>
      {isInCart(data.id, products) ? (
        <button
          onClick={() => removeMovieFromCart(data.id)}
          className="btn btn-danger"
        >
          Remove from cart
        </button>
      ) : (
        <button onClick={() => addMovieToCart(data.id)} className="btn add">
          Add to cart
        </button>
      )}
    </div>
  );
};
