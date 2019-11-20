import React, {FC} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart, removeFromCart} from '../../redux/cartReducer';
import {MovieType} from '../../movieType';
import {AppState} from '../../redux/store';

const shorten = (text: string, limit = 140) =>
  text
    .split('')
    .slice(0, limit)
    .join('') + '...';

const isInCart = (id: number, products: number[]): boolean =>
  products.reduce(
    (result: boolean, nextId) => (result ? result : nextId === id),
    false
  );

type MovieBodyProps = {
  showBody: boolean;
  data: MovieType;
};

export const MovieBody: FC<MovieBodyProps> = ({showBody, data}) => {
  const products = useSelector<AppState, number[]>(
    state => state.cartReducer.products
  );

  const dispatch = useDispatch();

  const addMovieToCart = (id: number) => dispatch(addToCart(id));
  const removeMovieFromCart = (id: number) => dispatch(removeFromCart(id));

  return (
    <div className={`movie-body ${showBody ? 'show-movie-body' : ''}`}>
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
