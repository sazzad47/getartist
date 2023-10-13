import React from "react";

const Description = () => {
  return (
    <div className="mt-[3rem]">
      <h2 className="text-4xl font-bold text-gray-900 text-center">
        Description
      </h2>
      <div className="mt-[3rem]">
        <label className="text-2xl font-bold text-gray-900" id="description">
          Description *
        </label>
        <textarea
          className="input min-h-[15rem] mt-5"
          aria-labelledby="description"
        />
      </div>
      <div className="mt-5">
        <label className="text-2xl font-bold text-gray-900" id="keywords">
          Keywords *
        </label>
        <input
          type="text"
          className="input mt-5"
          aria-labelledby="keywords"
        />
        <p className="text-gray-600"> Separate each keyword with a comma. </p>
      </div>
    </div>
  );
};

export default Description;
