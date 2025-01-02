import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl">{title}</h1>
      <h1 className="text-xl py-6 w-1/4">{overview}</h1>
      <div>
        <button className="text-lg p-4 px-12 text-black bg-white rounded-lg hover:bg-opacity-70">
          ▶ Play
        </button>
        <button className="text-lg p-4 px-12 text-white bg-gray-500 bg-opacity-50 rounded-lg mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
