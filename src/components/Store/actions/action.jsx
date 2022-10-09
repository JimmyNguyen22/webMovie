import React from "react";
import axios from "axios";
import * as Types from "../type";

const API_KEY = "58dc0cf9a2f1d8a13986f2f318fb028a";
const BASE_URL = "https://api.themoviedb.org/3";

export const getFilmOriginals = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
    );
    dispatch({ type: Types.GET_FILM_ORIGINALS, payload: result.data.results });
  } catch (error) {
    console.log("get origin api error", error);
  }
};

export const getTrending = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-us`
    );
    dispatch({ type: Types.GET_TRENDING, payload: result.data.results });
  } catch (error) {
    console.log("get trending api error", error);
  }
};

export const getTopRated = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-us`
    );
    dispatch({ type: Types.GET_TOP_RATED, payload: result.data.results });
  } catch (error) {
    console.log("get top rated api error", error);
  }
};

export const getAction = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
    );
    dispatch({ type: Types.GET_ACTION, payload: result.data.results });
  } catch (error) {
    console.log("get action api error", error);
  }
};

export const getComedy = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
    );
    dispatch({ type: Types.GET_COMEDY, payload: result.data.results });
  } catch (error) {
    console.log("get comedy api error", error);
  }
};

export const getHorror = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
    );
    dispatch({ type: Types.GET_HORROR, payload: result.data.results });
  } catch (error) {
    console.log("get horror api error", error);
  }
};

export const getRomance = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
    );
    dispatch({ type: Types.GET_ROMANCE, payload: result.data.results });
  } catch (error) {
    console.log("get romance api error", error);
  }
};

export const getDocumentaries = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`
    );
    dispatch({ type: Types.GET_DOCUMENTARIES, payload: result.data.results });
  } catch (error) {
    console.log("get Documentaries api error", error);
  }
};

export const setMovieDetail = (movie) => (dispatch) => {
  dispatch({ type: Types.SET_MOVIE_DETAIL, payload: movie });
};
