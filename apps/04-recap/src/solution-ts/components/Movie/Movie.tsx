import React, {useState, FC} from 'react';
import '../../styles/movie.css';
import {MovieBody} from './MovieBody';
import {MovieType} from '../../movieType';

const PICTURES_CDN_URL = `https://image.tmdb.org/t/p/w500`;

type MovieProps = {
  data: MovieType;
};

export const Movie: FC<MovieProps> = ({data}) => {
  const [state, setState] = useState(false);

  const hideBody = () => setState(false);
  const showBody = () => setState(true);

  return (
    <div onMouseLeave={hideBody} onMouseEnter={showBody} className="movie">
      <img
        alt={`${data.title}'s cover`}
        src={PICTURES_CDN_URL + data.poster_path}
      />
      <MovieBody data={data} showBody={state} />
    </div>
  );
};
