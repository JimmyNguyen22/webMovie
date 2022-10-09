import reducerMovies from "./reducerMovies";
// import { combineReducers } from "./reducerMovies";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  infoMovies: reducerMovies,
});

export default rootReducer;
