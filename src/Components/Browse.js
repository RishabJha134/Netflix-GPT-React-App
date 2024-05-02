import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';


function Browse() {


  // calling my useNowPlayingMovies hook.
 useNowPlayingMovies();


  return (
    <>
    <Header></Header>
    <MainContainer></MainContainer>
    <SecondaryContainer></SecondaryContainer>

    </>
  )
}

export default Browse