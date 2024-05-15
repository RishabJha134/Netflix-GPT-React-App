import React, { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../Utils/moviesSlice";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((state) => state.movies.trailerVideo);

  // fetch trailer video and updating the store with trailer video data

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
    if (!trailerVideo) {
      getMovieVideos();
    }
  }, []);
};

export default useMovieTrailer;
