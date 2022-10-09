import React from "react";
import { useViewport } from "../hooks/useViewport";
import "./searchmovie.scss";

export default function SearchMovie(props) {
  const [windowWidth] = useViewport();

  return (
    <div className="searchMovie">
      {/* {movieList && movieList.length > 0 ? (
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
          {movieList.map((movie, index) => (
            <div className="movieItem" key={index}>
              <img src="" alt="..." />
              <span>Movie name</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="searchError">
          <h1>Your search for "asdcsa" did not have any matches.</h1>
        </div>
      )} */}
    </div>
  );
}
