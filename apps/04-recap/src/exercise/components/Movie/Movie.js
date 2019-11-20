import React, {useState} from 'react';
import '../../styles/movie.css';
import {MovieBody} from './MovieBody';

const PICTURES_CDN_URL = `https://image.tmdb.org/t/p/w500`;

export const Movie = ({data}) => {
  // TODO: declare a state to show or hide the body of the movie
  const state = null;

  const hideBody = () => null;
  const showBody = () => null;

  // TODO: when the mouse hover over the first div, call the showBody function, when the mouse leaves call the hideBody function
  return (
    <div className="movie">
      <img
        alt={`${data.title}'s cover`}
        src={PICTURES_CDN_URL + data.poster_path}
      />
      <MovieBody data={data} showBody={state} />
    </div>
  );
};
