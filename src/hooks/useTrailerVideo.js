import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useTrailerVideo = ({ movieId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getVideoData();
  }, []);
  const getVideoData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const json = await data.json();
    const filteredVideos = json?.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredVideos.length ? filteredVideos[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };
};

export default useTrailerVideo;
