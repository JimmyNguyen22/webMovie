import React from "react";
import axios from "axios";
import * as Types from "../types";

const API_KEY = "58dc0cf9a2f1d8a13986f2f318fb028a";
const BASE_URL = "https://api.themoviedb.org/3";

export const getFilmOriginals = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
    );
    dispatch({ type: Types.GET_FILM_ORIGINALS, payload: result.data.results });
  } catch (error) {
    console.log("get api error", error);
  }
};
