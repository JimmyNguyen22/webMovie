import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Contents from "../Content/Contents";
import Intro from "../Intro/Intro";
import MovieDetails from "../MovieDetail/MovieDetails";

export default function Home() {
  const { MovieDetail } = useSelector((state) => state.infoMovies);

  const [isShowMovieDetails, setIsShowMovieDetails] = useState(false);

  useEffect(() => {
    setIsShowMovieDetails(MovieDetail ? true : false);
  }, [MovieDetail]);

  return (
    <div>
      <Intro></Intro>
      <Contents></Contents>
      <MovieDetails
        movie={MovieDetail}
        showModal={isShowMovieDetails}
      ></MovieDetails>
    </div>
  );
}
