import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';



function Browse() {


  // calling my useNowPlayingMovies hook.
 useNowPlayingMovies();

//  calling my usePopularMovies hook.
usePopularMovies()

// calling my useTopRatedMovies hook.
useTopRatedMovies()

// calling my useUpcomingMovies hook.
useUpcomingMovies()


  return (
    <>
    <Header></Header>
    <MainContainer></MainContainer>
    <SecondaryContainer></SecondaryContainer>

    </>
  )
}

export default Browse