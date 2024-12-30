import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayMovies";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
