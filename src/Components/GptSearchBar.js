import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

export const GptSearchBar = () => {
  const languageSelected = useSelector((store) => store.language.lang);
  console.log("Bhagya", languageSelected);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[languageSelected].getSearchPlaceHolder}
        ></input>
        <button className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg">
          {lang[languageSelected].search}
        </button>
      </form>
    </div>
  );
};
