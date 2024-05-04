import { API_OPTIONS } from '../Utils/Constants'
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../Utils/moviesSlice';
import { useEffect } from 'react';

function useTopRatedMovies() {
  // fetch data from TMDB API and update store.
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
}

export default useTopRatedMovies;

// this hook work is to fetch data from api and update in the movie slice in the store.