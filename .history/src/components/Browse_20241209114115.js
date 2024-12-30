import React from "react";
import Header from "./Header";
import { options } from "../utils/constants";

const Browse = () => {
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );
  };
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
