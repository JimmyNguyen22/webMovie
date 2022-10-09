import React, { useState } from "react";
import "./content.scss";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useRef } from "react";
import { SmoothHorizontalScrolling } from "../../utils/scrollSmooth";
import { useEffect } from "react";

const movies = [
  "https://upload.wikimedia.org/wikipedia/vi/2/2d/Avengers_Endgame_bia_teaser.jpg",
  "https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNjA3NGExZDktNDlhZC00NjYyLTgwNmUtZWUzMDYwMTZjZWUyXkEyXkFqcGdeQXVyMTU1MDM3NDk0._V1_FMjpg_UX1000_.jpg",
  "https://vcdn1-ngoisao.vnecdn.net/2022/10/03/-8641-1664809108.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=BsBnoS6vvzV21XrO3FHD1g",
  "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
  "https://upload.wikimedia.org/wikipedia/vi/2/2d/Avengers_Endgame_bia_teaser.jpg",
];

export default function Content(props) {
  const sliderRef = useRef();
  const movieRef = useRef();
  const [dragDown, setDragDown] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [isDrag, setIsDrag] = useState(false);

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
    <div className="content" draggable={false}>
      <h1 className="heading">Film Originals</h1>
      <div
        ref={sliderRef}
        draggable={true}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
        className="movieSlider"
        style={{ gridTemplateColumns: `repeat(${movies.length},218px)` }}
      >
        {movies.map((movie, index) => (
          <div
            key={index}
            className="movieItem"
            ref={movieRef}
            draggable={false}
          >
            <img src={movie} alt="poster" draggable={false} />
            <div className="nameVi movieName">
              {" "}
              Movie NameMovie NameMovie NameMovie NameMovie Name
            </div>
            <div className="nameEng movieName">
              Movie NameMovie NameMovie NameMovie Eng
            </div>
          </div>
        ))}
        <div className="btnLeft" onClick={handleScrollLeft}>
          <FiChevronLeft></FiChevronLeft>
        </div>
        <div className="btnRight" onClick={handleScrollRight}>
          <FiChevronRight></FiChevronRight>
        </div>
      </div>
    </div>
  );
}
