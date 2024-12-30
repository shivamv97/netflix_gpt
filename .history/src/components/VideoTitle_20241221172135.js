import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-15">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p>{overview}</p>
      <div>
        <button>Play</button>
        <button>More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
