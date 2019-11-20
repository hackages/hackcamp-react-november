import movies from '../mocks/movies.json';

export const getMovies = async () => {
  return new Promise(res => {
    setTimeout(() => {
      res(movies);
    }, 200);
  });
};
