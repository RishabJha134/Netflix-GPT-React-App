import { API_OPTIONS } from '../Utils/Constants'
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../Utils/moviesSlice';
import { useEffect } from 'react';

function useUpcomingMovies() {
  // fetch data from TMDB API and update store.
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
}

export default useUpcomingMovies;

// this hook work is to fetch data from api and update in the movie slice in the store.