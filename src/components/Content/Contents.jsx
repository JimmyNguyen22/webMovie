import React from "react";
import MoviesRow from "./MoviesRow";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as ACTIONS from "../Store/actions/action";
import { FaArrowAltCircleUp } from "react-icons/fa";
import "./content.scss";
import { animateScroll as scroll } from "react-scroll";
import { useScrollY } from "../hooks/useScrollY";

const ScrollToTop = () => {
  scroll.scrollToTop();
};

export default function Contents(props) {
  const dispatch = useDispatch();
  const [scrollY] = useScrollY();
  const {
    FilmOriginals,
    Trending,
    TopRated,
    Action,
    Comedy,
    Horror,
    Romance,
    Documentaries,
  } = useSelector((state) => state.infoMovies);

  useEffect(() => {
    dispatch(ACTIONS.getFilmOriginals());
    dispatch(ACTIONS.getTrending());
    dispatch(ACTIONS.getTopRated());
    dispatch(ACTIONS.getAction());
    dispatch(ACTIONS.getComedy());
    dispatch(ACTIONS.getHorror());
    dispatch(ACTIONS.getRomance());
    dispatch(ACTIONS.getDocumentaries());
  }, [dispatch]);

  return (
    <div>
      <MoviesRow
        movies={FilmOriginals}
        title="Originals"
        isOrigin={true}
      ></MoviesRow>
      <MoviesRow movies={Trending} title="Trending"></MoviesRow>
      <MoviesRow movies={TopRated} title="Top Rated"></MoviesRow>
      <MoviesRow movies={Action} title="Actions"></MoviesRow>
      <MoviesRow movies={Comedy} title="Comedy"></MoviesRow>
      <MoviesRow movies={Horror} title="Horror"></MoviesRow>
      <MoviesRow movies={Romance} title="Romance"></MoviesRow>
      <MoviesRow movies={Documentaries} title="Documentaries"></MoviesRow>
      <div
        className="goTop cursor-pointer"
        onClick={() => ScrollToTop()}
        style={{
          visibility: `${scrollY > 600 ? "visible" : "hidden"}`,
        }}
      >
        <FaArrowAltCircleUp></FaArrowAltCircleUp>
      </div>
    </div>
  );
}
