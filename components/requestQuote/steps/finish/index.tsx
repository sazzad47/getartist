import React from "react";

const Finish: React.FC = () => {
 
  return (
    <div className="mt-[3rem]">
      <h2 className="text-4xl font-bold text-gray-900 text-center">Finish</h2>
     
      <div className="inline-flex items-center justify-center w-full relative mt-[3rem]">
          <hr className="w-full h-[2px] my-8 bg-gray-300 border-0 dark:bg-gray-700"/>
          <span className="absolute left-0 top-1 pr-3 font-medium text-gray-900 bg-gray-100 text-[2em]">New Account</span>
      </div>

        <div className="w-full flex gap-5 mt-6">
            <div className="flex flex-1 flex-col gap-5 relative">
              <label className="text-2xl font-bold text-gray-900" id="first_name">
                First Name
              </label>
              <div className="relative flex flex-wrap items-stretch">
                <input
                  type="text"
                  className="input"
                  aria-labelledby="first_name"
                 
                  />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 relative">
              <label className="text-2xl font-bold text-gray-900" id="last_name">
                Last Name
              </label>
              <div className="relative flex flex-wrap items-stretch">
                <input
                  type="text"
                  className="input"
                  aria-labelledby="last_name"
                 
                  />
              </div>
            </div>
       </div>
   
            <div className="flex flex-col gap-5 mt-6">
              <label className="text-2xl font-bold text-gray-900" id="email">
                Email
              </label>
              <div className="relative flex flex-wrap items-stretch">
                <input
                  type="email"
                  className="input"
                  aria-labelledby="email"
                 
                  />
              </div>
          </div>

          <div className="w-full flex gap-5 mt-6">
            <div className="flex flex-1 flex-col gap-5 relative">
              <label className="text-2xl font-bold text-gray-900" id="password">
                Password
              </label>
              <div className="relative flex flex-wrap items-stretch">
                <input
                  type="password"
                  className="input"
                  aria-labelledby="password"
                 
                  />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 relative">
              <label className="text-2xl font-bold text-gray-900" id="confirm_password">
                Confirm Password
              </label>
              <div className="relative flex flex-wrap items-stretch">
                <input
                  type="password"
                  className="input"
                  aria-labelledby="confirm_password"
                 
                  />
              </div>
            </div>
       </div>
    </div>
  );
};

export default Finish;
