import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = () => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/558449/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    console.log(json.results[44]); //Trailer for movie
    const FilterData = json.results.filter((video) => video.type === "Trailer");
    const Trailer = FilterData.length ? FilterData[2] : json.results[0];
    console.log(Trailer);
    dispatch(addTrailerVideos(Trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;