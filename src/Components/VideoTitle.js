import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div>
      <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl w-60 md:w-full md:text-6xl font-bold my-[-60px] py-4">{title}</h1>
        <p className="hidden md:inline-block pt-[47px] text-lg w-1/4">{overview}</p>
        <div className="my- md:my-0">
          <button className="bg-white rounded-sm text-black py-1 px-2 text-sm md:py-3 md:px-9 md:text-xl  md:rounded-lg hover:bg-opacity-80 ml-[-4px]">
           ▶️ Play
          </button>
          <button className="hidden md:inline-block mx-2  bg-gray-500 text-white py-3 px-9 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoTitle;
