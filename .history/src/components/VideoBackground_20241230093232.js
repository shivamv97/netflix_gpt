import React from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
   const getMovieVideos = async () => {
    const data= await fetch('https://api.themoviedb.org/3/movie/558449/videos?language=en-US', API_OPTIONS);
    const json=
   };
  return <div></div>;
};

export default VideoBackground;
