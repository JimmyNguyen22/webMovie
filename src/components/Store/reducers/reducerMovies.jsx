import * as Types from "../type";

const reducerMoviesinitialState = {
  FilmOriginals: null,
  Trending: null,
  TopRated: null,
  Action: null,
  Comedy: null,
  Horror: null,
  Romance: null,
  Documentaries: null,
  MovieDetail: null,
};

const reducerMovies = (state = reducerMoviesinitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.GET_FILM_ORIGINALS:
      return { ...state, FilmOriginals: payload };
    case Types.GET_TRENDING:
      return { ...state, Trending: payload };
    case Types.GET_TOP_RATED:
      return { ...state, TopRated: payload };
    case Types.GET_ACTION:
      return { ...state, Action: payload };
    case Types.GET_COMEDY:
      return { ...state, Comedy: payload };
    case Types.GET_HORROR:
      return { ...state, Horror: payload };
    case Types.GET_ROMANCE:
      return { ...state, Romance: payload };
    case Types.GET_DOCUMENTARIES:
      return { ...state, Documentaries: payload };

    case Types.SET_MOVIE_DETAIL:
      return { ...state, MovieDetail: payload };

    default:
      return state;
  }
};

export default reducerMovies;
