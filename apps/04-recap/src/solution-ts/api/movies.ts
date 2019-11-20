import movies from '../mocks/movies.json';
import {MovieType} from '../movieType';

type GetMovies = () => Promise<MovieType[]>;

export const getMovies: GetMovies = async () => {
  return new Promise(res => {
    setTimeout(() => {
      res(movies);
    }, 200);
  });
};
