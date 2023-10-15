import React from "react";
import { FcApproval } from "react-icons/fc";
import { RiGlobalLine } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const WhyArtist: React.FC = () => {
  return (
    <div className="w-full h-auto px-[1rem] sm:px-[2rem] md:px-[5rem] pt-10">
      <div className="w-full flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div className="flex-1">

            <img src="art-left.png" alt="" className="w-full h-[20rem] object-contain" />
          </div>
          <div className="flex-1">
            <img src="art-right.png" alt="" className="w-full h-[20rem] object-contain" />
           </div>
        </div>
        <div className="mt-[3rem] grid grid-cols-1 sm:grid-cols-3 gap-5 bg-gray-200 py-5">
          <div className="w-full auto p-5 flex flex-col gap-5 items-center">
            <FcApproval className="text-green-700 text-6xl" />
            <div>

            <p className="text-3xl text-center font-bold">Free Cancellation</p>
            <p className="text-center text-2xl">
              Until the last minute
            </p>
            </div>
          </div>
          
          <div className="w-full auto p-5 flex flex-col gap-5 items-center">
            <VscWorkspaceTrusted className="text-yellow-600 text-6xl" />
            <div>
            <p className="text-3xl text-center font-bold">Upto 75% off</p>
            <p className="text-center text-2xl">
              Compared to other platforms
            </p>
            </div>
          </div>
          <div className="w-full auto p-5 flex flex-col gap-5 items-center">
            <RiGlobalLine className="text-yellow-600 text-6xl" />
            <div>

            <p className="text-3xl font-bold">Worldwide leader</p>
            <p className="text-center text-2xl">
              of art and design
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyArtist;
