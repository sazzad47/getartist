import React from "react";
import Categories from "./Categories";
import Location from "./Location";

const Basics = () => {

  return (
    <div className="mt-[3rem]">
      <h2 className="text-4xl font-bold text-gray-900 text-center">
        Create a new job
      </h2>
      <div className="mt-5">
        <label className="text-2xl font-bold text-gray-900" id="password">
          Create a title for your ad *
        </label>
        <input
          type="name"
          className="w-full p-3 mt-3 bg-gray-100 border-2 rounded-lg border-gray-400 focus:outline-none focus:border-gray-600 font-medium text-2xl text-gray-900"
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
