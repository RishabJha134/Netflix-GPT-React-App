import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div>
      <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div>
          <button className="bg-white text-black py-3 px-9 text-xl  rounded-lg hover:bg-opacity-80">
           ▶️ Play
          </button>
          <button className="mx-2 bg-gray-500 text-white py-3 px-9 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoTitle;
