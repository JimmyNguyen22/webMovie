import React from "react";
import { useDispatch } from "react-redux";
import { setMovieDetail } from "../Store/actions/action";
import "./moviedetail.scss";
import moment from "moment";

export default function MovieDetails(props) {
  const { movie, showModal } = props;
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(setMovieDetail(null));
  };

  return (
    <div className="movieDetail">
      <div
        className={`backdrop ${showModal ? "showBackdrop" : "hideBackdrop"}`}
        onClick={handleCloseModal}
      ></div>
      <div
        className={`modal ${showModal ? "showModal" : "hideModal"}`}
        style={
          movie
            ? {
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                  movie.backdrop_path || movie.poster_path
                })`,
                backgroundSize: "cover",
              }
            : {}
        }
      >
        <div className="box">
          <div className="movieInfo">
            <h1 className="movieTitle">
              {movie && (movie.title || movie.name)}
            </h1>
            <p className="statistical">
              <span className="rating">
                Rating: {movie && movie.vote_average * 10}%
              </span>
              <span className="popular">
                Popular: {movie && movie.popularity}
              </span>
            </p>
            <p className="releaseDate">
              Release Date:
              {movie &&
                (moment(movie.release_date).format("DD/MM/YYYY") ||
                  moment(movie.first_air_date).format("DD/MM/YYYY"))}
            </p>
            <p className="overview">{movie && movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
