import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Contents from "../Content/Contents";
import Intro from "../Intro/Intro";
import MovieDetail from "../MovieDetail/MovieDetail";

export default function Home() {
  const { MovieDetails } = useSelector((state) => state.infoMovies);

  const [isShowMovieDetails, setIsShowMovieDetails] = useState(false);

  useEffect(() => {
    setIsShowMovieDetails(MovieDetails ? true : false);
  }, [MovieDetails]);

  return (
    <div>
      <Intro></Intro>
      <Contents></Contents>
      <MovieDetail
        movie={MovieDetails}
        showModal={isShowMovieDetails}
      ></MovieDetail>
    </div>
  );
}
