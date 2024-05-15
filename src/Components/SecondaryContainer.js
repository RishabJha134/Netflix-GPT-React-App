import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="bg-black pt-52 md:pt-0">

        <div className="-mt-56 pl-4 md:pl-12 relative z-20">
          <MoviesList
            title={"Now Playing"}
            movies={movies.nowPlayingMovies}
          ></MoviesList>
          <MoviesList
            title={"Popular"}
            movies={movies.popularMovies}
          ></MoviesList>
          <MoviesList
            title={"Top Rated Movies"}
            movies={movies.topRatedMovies}
          ></MoviesList>
          <MoviesList
            title={"Upcoming Movies"}
            movies={movies.upcomingMovies}
          ></MoviesList>

        </div>

        {/* 
      MovieList - Popular
          MovieCard*n
      MovieList - NowPlaying
      MovieList - Trending 
      MovieList - Horror
       */}
      </div>
    )
  );
}

export default SecondaryContainer;
