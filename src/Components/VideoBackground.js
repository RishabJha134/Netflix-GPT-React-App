import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";


function VideoBackground({ id }) {
  const trailerVideo = useSelector((store)=>store.movies?.trailerVideo);
  
  useMovieTrailer(id);

  return (
    <>
      <div className="w-screen">
        <iframe
         className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/XeDbyVODQ5M?si=${trailerVideo?.key} ?&autoplay=1&mute=1`}
          title="YouTube video player"
          
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          
        ></iframe>
      </div>
    </>
  );
}

export default VideoBackground;