import React from "react";
import { useSelector } from "react-redux";
import lang from "../Utils/languageConstants";


function GptSearchBar() {
  const langkey = useSelector(store=>store.config.lang)
  console.log(langkey)
  return (
    <div className="pt-[11%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button className="col-span-3 py-2 m-4 px-3 bg-red-700 text-white rounded-lg">
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
