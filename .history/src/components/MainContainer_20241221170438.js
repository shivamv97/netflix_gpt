import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return; //early return or(!movies)

  const mainMovie = movies[0];
  console.log(mainMovie);

  const {original_title , overview} = mainMovie;
  return (
    <div>
      <VideoTitle title={} />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
