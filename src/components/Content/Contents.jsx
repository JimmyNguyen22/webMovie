import React from "react";
import MoviesRow from "./MoviesRow";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFilmOriginals } from "../Store/action";

const movies = [
  "https://upload.wikimedia.org/wikipedia/vi/2/2d/Avengers_Endgame_bia_teaser.jpg",
  "https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNjA3NGExZDktNDlhZC00NjYyLTgwNmUtZWUzMDYwMTZjZWUyXkEyXkFqcGdeQXVyMTU1MDM3NDk0._V1_FMjpg_UX1000_.jpg",
  "https://vcdn1-ngoisao.vnecdn.net/2022/10/03/-8641-1664809108.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=BsBnoS6vvzV21XrO3FHD1g",
  "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
  "https://upload.wikimedia.org/wikipedia/vi/2/2d/Avengers_Endgame_bia_teaser.jpg",
  "https://upload.wikimedia.org/wikipedia/vi/2/2d/Avengers_Endgame_bia_teaser.jpg",
  "https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNjA3NGExZDktNDlhZC00NjYyLTgwNmUtZWUzMDYwMTZjZWUyXkEyXkFqcGdeQXVyMTU1MDM3NDk0._V1_FMjpg_UX1000_.jpg",
  "https://vcdn1-ngoisao.vnecdn.net/2022/10/03/-8641-1664809108.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=BsBnoS6vvzV21XrO3FHD1g",
  "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
  "https://upload.wikimedia.org/wikipedia/vi/2/2d/Avengers_Endgame_bia_teaser.jpg",
];

export default function Contents(props) {
  const dispatch = useDispatch();
  const { FilmOriginals } = useSelector((state) => state.infoMovies);

  useEffect(() => {
    dispatch(getFilmOriginals());
  }, [dispatch]);

  return (
    <div>
      <MoviesRow
        movies={FilmOriginals}
        title="Originals"
        isOrigin={true}
      ></MoviesRow>
      <MoviesRow movies={movies} title="Trending"></MoviesRow>
      <MoviesRow movies={movies} title="Top Rated"></MoviesRow>
      <MoviesRow movies={movies} title="Actions"></MoviesRow>
      <MoviesRow movies={movies} title="Comedy"></MoviesRow>
      <MoviesRow movies={movies} title="Horror"></MoviesRow>
      <MoviesRow movies={movies} title="Romance"></MoviesRow>
      <MoviesRow movies={movies} title="Documentaries"></MoviesRow>
    </div>
  );
}
