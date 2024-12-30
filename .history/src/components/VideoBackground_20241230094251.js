import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/558449/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    console.log(json.results[44]); //Trailer for movie
    const Trailer = json.results.filter((video) => video.type === "Trailer");
    console.log(Trailer);
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
  return <div></div>;
};

export default VideoBackground;
