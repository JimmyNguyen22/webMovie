import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useViewport } from "../hooks/useViewport";
import { getSearchMovies, setMovieDetail } from "../Store/actions/action";
import "./searchmovie.scss";

const useQuery = () => new URLSearchParams(useLocation().search);

export default function SearchMovie(props) {
  const [windowWidth] = useViewport();

  const dispatch = useDispatch();
  const { SearchMovies } = useSelector((state) => state.infoMovies);
  const keywords = useQuery().get("keywords");

  useEffect(() => {
    if (keywords) dispatch(getSearchMovies(keywords));
  }, [keywords, dispatch]);

  return (
    <div className="searchMovie">
      {SearchMovies && SearchMovies.length > 0 ? (
        <div
          className="searchContent"
          style={{
            gridTemplateColumns: `repeat(${
              windowWidth > 1200
                ? 5
                : windowWidth > 992
                ? 4
                : windowWidth > 768
                ? 3
                : windowWidth > 600
                ? 2
                : 1
            },auto)`,
          }}
        >
          {SearchMovies.map((movie, index) => {
            if (movie.backdrop_path !== null && movie.media_type !== "person") {
              const imgURL = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
              return (
                <div
                  className="movieItem"
                  key={index}
                  onClick={() => {
                    dispatch(setMovieDetail(movie));
                  }}
                >
                  <img src={imgURL} alt="..." />
                  <span>{movie.name || movie.title}</span>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <div className="searchError">
          <h1>Your search for "{keywords}" did not have any matches.</h1>
        </div>
      )}
    </div>
  );
}
