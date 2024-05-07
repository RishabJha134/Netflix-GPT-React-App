import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

function Browse() {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  // calling my useNowPlayingMovies hook.
  useNowPlayingMovies();

  //  calling my usePopularMovies hook.
  usePopularMovies();

  // calling my useTopRatedMovies hook.
  useTopRatedMovies();

  // calling my useUpcomingMovies hook.
  useUpcomingMovies();

  return (
    <>
      <Header></Header>

      {showGptSearch ? (
        <GptSearch></GptSearch>
      ) : (
        <>
          <MainContainer></MainContainer>
          <SecondaryContainer></SecondaryContainer>
        </>
      )}
    </>
  );
}

export default Browse;
