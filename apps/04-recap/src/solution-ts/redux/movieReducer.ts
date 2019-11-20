import {MovieType} from '../movieType';

const SAVE_ALL_MOVIES = 'SAVE_ALL_MOVIES';

export const saveAllMovies = (payload: MovieType[]) => ({
  type: SAVE_ALL_MOVIES,
  payload
});

export type MovieState = {
  movies: MovieType[];
};

type Reducer = {
  [key: string]: (state: MovieState, payload: MovieType[]) => MovieState;
};

const handlerReducer: Reducer = {
  [SAVE_ALL_MOVIES]: (state, payload) => ({
    ...state,
    movies: payload
  })
};

const defaultState: MovieState = {
  movies: []
};

type Action = {
  type: string;
  payload: MovieType[];
};

export const movieReducer = (state = defaultState, {type, payload}: Action) => {
  const handler = handlerReducer[type];
  return handler ? handler(state, payload) : state;
};
