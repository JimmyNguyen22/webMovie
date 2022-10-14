import React, { useState } from "react";
import "./moviesrow.scss";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useRef } from "react";
import { SmoothHorizontalScrolling } from "../../utils/scrollSmooth";
import { useEffect } from "react";
import { useViewport } from "../hooks/useViewport";
import { useDispatch } from "react-redux";
import { setMovieDetail } from "../Store/actions/action";

export default function MoviesRow(props) {
  const { movies, title, isOrigin } = props;
  const sliderRef = useRef();
  const movieRef = useRef();
  const [dragDown, setDragDown] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const [windowWidth] = useViewport();
   
  const dispatch = useDispatch(); 

  const handleSetMovie = (movie) => {
    dispatch(setMovieDetail(movie));
  };

  const handleScrollRight = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (sliderRef.current.scrollLeft < maxScrollLeft) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };

  const handleScrollLeft = () => {
    if (sliderRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        -movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };

  useEffect(() => {
    if (isDrag) {
      if (dragMove < dragDown) handleScrollRight();
      if (dragMove > dragDown) handleScrollLeft();
    }
  }, [dragDown, dragMove, isDrag]);

  const onDragStart = (e) => {
    setIsDrag(true);
    setDragDown(e.screenX);
  };
  const onDragEnd = (e) => {
    setIsDrag(false);
  };
  const onDragEnter = (e) => {
    setDragMove(e.screenX);
  };

  return (
    <div className="content" draggable="false">
      <h1 className="heading">{title}</h1>
      <div
        ref={sliderRef}
        draggable="true"
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
        className="movieSlider"
        style={
          movies && movies.length > 0
            ? {
                gridTemplateColumns: `repeat(${movies.length},
                ${
                  windowWidth > 1200
                    ? "218px"
                    : windowWidth > 800
                    ? "188px"
                    : windowWidth > 768
                    ? "155px"
                    : "133px"
                })`,
              }
            : {}
        }
      >
        {movies &&
          movies.length > 0 &&
          movies.map((movie, index) => {
            if (movie.poster_path && movie.backdrop_path !== null) {
              let imgURL = isOrigin
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
              return (
                <div
                  key={index}
                  className="movieItem cursor-pointer"
                  ref={movieRef}
                  draggable="false"
                  onClick={() => handleSetMovie(movie)}
                >
                  <img src={imgURL} alt="poster" draggable="false" />
                  <div className="nameVi movieName">
                    {movie.title || movie.name}
                  </div>
                  {/* <div className="nameEng movieName">
                    {movie.title || movie.name}
                  </div> */}
                </div>
              );
            }
          })}
      </div>
      <div
        className={`btnLeft ${isOrigin && "isOrigin"}`}
        onClick={handleScrollLeft}
      >
        <FiChevronLeft></FiChevronLeft>
      </div>
      <div
        className={`btnRight ${isOrigin && "isOrigin"}`}
        onClick={handleScrollRight}
      >
        <FiChevronRight></FiChevronRight>
      </div>
    </div>
  );
}
