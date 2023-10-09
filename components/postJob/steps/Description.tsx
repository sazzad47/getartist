import React from "react";

const Description = () => {
  return (
    <div className="mt-[3rem]">
      <h2 className="text-4xl font-bold text-gray-900 text-center">
        Description
      </h2>
      <div className="mt-5">
        <label className="text-2xl font-bold text-gray-900" id="password">
          Description *
        </label>
        <textarea
          className="w-full min-h-[15rem] p-3 mt-3 bg-gray-100 border-2 rounded-lg border-gray-400 focus:outline-none focus:border-gray-600 font-medium text-2xl text-gray-900"
          aria-labelledby="password"
        />
      </div>
      <div className="mt-5">
        <label className="text-2xl font-bold text-gray-900" id="password">
          Keywords *
        </label>
        <input
          type="text"
          className="w-full p-3 mt-3 bg-gray-100 border-2 rounded-lg border-gray-400 focus:outline-none focus:border-gray-600 font-medium text-2xl text-gray-900"
          aria-labelledby="password"
        />
        <p className="text-gray-600"> Separate each keyword with a comma. </p>
      </div>
    </div>
  );
};

export default Description;
