import React from "react";
import MovieCard from "./MovieCard";

function MoviesList({ title, movies }) {
  console.log(movies);
  return (
    <div className="px-5">
      <h1 className="text-xl md:text-3xl font-bold py-3 text-zinc-200">{title}</h1>


<div className="flex overflow-x-scroll ">

<div className="flex ">
        {movies && movies.map((movies,index)=>{
          return (
            <>
            <MovieCard key={movies.id} poster_path={movies.poster_path && movies.poster_path}></MovieCard>
            </>
          )
        })}
        
      </div>
</div>

      




    </div>
  );
}

export default MoviesList;
