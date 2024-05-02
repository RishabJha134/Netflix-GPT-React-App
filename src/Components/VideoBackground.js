import React, { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../Utils/moviesSlice";

function VideoBackground({ id }) {
  const trailerVideo = useSelector((store)=>store.movies?.trailerVideo);
  const dispatch = useDispatch();
  

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((item) => {
      return item.type === "Trailer";
    });

    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <>
      <div>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/XeDbyVODQ5M?si=${trailerVideo?.key}`}
          title="YouTube video player"
          
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          
        ></iframe>
      </div>
    </>
  );
}

export default VideoBackground;
