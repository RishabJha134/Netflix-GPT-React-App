import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../Utils/languageConstants";
import openAi from "../Utils/openAi";
import { API_OPTIONS } from "../Utils/Constants";
import { addGptMovieResults } from "../Utils/gptSlice";
import axios, { Axios } from "axios";

function GptSearchBar() {
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // step3:- search movie from chaptgpt results in the tmdb api.
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  // step1:-
  async function handleSearchButton() {
    alert("Confirm")
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a movie Recomendation system and suggest some mmovies for the query : " +
      searchText.current.value +
      "only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar,Sholay,Don,Golmaal,Koi Mill Gaya";

    const gptResults = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.REACT_APP_GEMINI_KEY}`,
      method: "post",
      data: { contents: [{ parts: [{ text: gptQuery }] }] },
    });

    // console.log(gptResults.data.candidates[0].content.parts[0].text);

    if (!gptResults.data) {
      console.log("error component");
    }

    // step2:-
    console.log(gptResults.data?.candidates[0]?.content?.parts[0]?.text);

    // console.log(gptResults.choices?.[0]?.message?.content);

    const gptMovies =
      gptResults.data?.candidates[0]?.content?.parts[0]?.text.split(",");
    console.log(gptMovies);

    // step3:-

    // we have in gptMovies = [Andaz apna apna,Sholay,Don2,Golmaal3,Krish]

    // for each movie we will search TMDB api:-

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  }

  console.log(langkey);
  return (
    <div className="pt-[30%] md:pt-[11%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 py-2 m-4 px-3 bg-red-700 text-white rounded-lg"
          onClick={() => {
            handleSearchButton();
          }}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
