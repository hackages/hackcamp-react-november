const SAVE_ALL_MOVIES = "SAVE_ALL_MOVIES";

export const saveAllMovies = payload => ({
  type: SAVE_ALL_MOVIES,
  payload
});

const handlerReducer = {
  [SAVE_ALL_MOVIES]: (state, payload) => ({
    ...state,
    movies: payload
  })
};

const defaultState = {
  movies: []
};

export const movieReducer = (state = defaultState, { type, payload }) => {
  const handler = handlerReducer[type];
  return handler ? handler(state, payload) : state;
};
