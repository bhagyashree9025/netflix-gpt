import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movie.trailerVideo);
  useTrailerVideo({ movieId });
  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" + trailerVideo?.key
          // +          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
{
  /* <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/QT5j0Uf-rdM?si=SLMBuAOx7Ko9bT-B"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>; */
}
