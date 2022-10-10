import React from "react";
import { useSelector } from "react-redux";
import MovieDetails from "../MovieDetail/MovieDetails";
import SearchMovie from "../SearchMovie/SearchMovie";

export default function Search(props) {
  const { MovieDetail } = useSelector((state) => state.infoMovies);

  return (
    <div>
      <SearchMovie></SearchMovie>
      <MovieDetails
        showModal={MovieDetail ? true : false}
        movie={MovieDetail}
      ></MovieDetails>
    </div>
  );
}
