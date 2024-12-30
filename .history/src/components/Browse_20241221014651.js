import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addnowPlayingMovies } from "../utils/moviesSlice";

const Browse = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
