import React from "react";

export const THUMBNAIL_URL = `https://image.tmdb.org/t/p/w92`;

export const CartBody = ({ closeCart, products, removeMovieFromCart }) => {
  return (
    <div className="cart-body">
      <button className="btn-close btn" onClick={closeCart}>
        X
      </button>
      <ul className="cart-product-list">
        {products.map(({ poster_path, id, title }, index) => (
          <li key={id}>
            <div className="cart-product">
              <img
                alt="Cover of the movie"
                className="img-thumbnail thumb-cart"
                src={`${THUMBNAIL_URL}${poster_path}`}
              />
              <div>
                <span className="cart-product-title">{title}</span>
                <button
                  onClick={() => removeMovieFromCart(id)}
                  className="btn btn-delete"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
