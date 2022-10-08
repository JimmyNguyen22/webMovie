import React from "react";
import "./content.scss";

const movies = [
  "https://upload.wikimedia.org/wikipedia/vi/2/2d/Avengers_Endgame_bia_teaser.jpg",
  "https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNjA3NGExZDktNDlhZC00NjYyLTgwNmUtZWUzMDYwMTZjZWUyXkEyXkFqcGdeQXVyMTU1MDM3NDk0._V1_FMjpg_UX1000_.jpg",
  "https://vcdn1-ngoisao.vnecdn.net/2022/10/03/-8641-1664809108.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=BsBnoS6vvzV21XrO3FHD1g",
  "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
];

export default function Content(props) {
  return (
    <div className="content">
      <h1 className="heading">Film Originals</h1>
      <div className="movieSlider">
        {movies.map((movie, index) => (
          <div key={index} className="movieItem">
            <img src={movie} alt="poster" />
            <div className="movieName">Movie Name</div>
          </div>
        ))}
      </div>
    </div>
  );
}
