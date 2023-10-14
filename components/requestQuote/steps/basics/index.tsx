import React from "react";
import Categories from "./Categories";
import Location from "./Location";

const Basics = () => {

  return (
    <div className="mt-[3rem]">
      <h2 className="text-4xl font-bold text-gray-900 text-center">
        Make a quote request
      </h2>
      <div className="mt-[3rem]">
        <label className="text-2xl font-bold text-gray-900" id="password">
          Create a title for your project *
        </label>
        <input
          type="name"
          className="input mt-5"
          aria-labelledby="password"
          placeholder="e.g I need a professional artist"
        />
       <Categories/>
       <Location />
      </div>
    </div>
  );
};

export default Basics;
