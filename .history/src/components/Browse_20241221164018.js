import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayMovies";
import MainContainer from "./MainContainer";
import SecContainer from "./SecContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecContainer />
    </div>
  );
};

export default Browse;
