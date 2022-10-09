import * as Types from "../types";

const reducerMoviesinitialState = {
  FilmOriginals: null,
};

const reducerMovies = (state = reducerMoviesinitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.GET_FILM_ORIGINALS:
      console.log(payload);
      return { ...state, FilmOriginals: payload };
    default:
      return state;
  }
};

export default reducerMovies;

 