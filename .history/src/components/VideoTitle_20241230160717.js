import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-36  absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-50 selection:">
          ▷ Play
        </button>
        <button className="bg-gray-600 text-white p-4 mx-2 px-12 text-xl bg-opacity-45 rounded-lg">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
