import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

function MainContainer() {
  const movies = useSelector((store)=> store.movies?.nowPlayingMovies);
  // console.log(movies)
  if(movies == null){
    return;
  }

  const mainMovie = movies[0];
  console.log(mainMovie);
  const {original_title,overview,id} = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} ></VideoTitle>
      <VideoBackground id={id}></VideoBackground>
    </div>
  );

}

export default MainContainer;
