import Image from "next/image";
import React from "react";

const GetArtist: React.FC = () => {
  return (
    <section className="px-[1rem] sm:px-[2rem] md:px-[5rem]">
      <div className="flex flex-wrap">
        <div className="mb-12 w-full relative shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
          <div className="absolute w-full h-full right-[-70px] py-[2rem]">
          <div className="w-full h-full relative bg-red-500 rounded-lg rounded-r-none shadow-lg dark:shadow-black/20 z-[10]">
            <Image src="/get-artist.jpg" alt="image" fill />
          </div>
          </div>
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
          <div className="flex h-full items-center rounded-lg rounded-l-none bg-fuchsia-900 p-6 text-center text-white lg:pl-12 lg:text-left">
            <div className="lg:pl-12">
              <h2 className="mb-6 text-3xl font-bold">Get An Artist</h2>
              <p className="mb-6 pb-2 lg:pb-0">
                We want to make original custom artwork accessible to all. Our
                platform creates opportunities to commission artwork that speaks
                to your creative spirit and defines originality. Our independent
                artists come from a range of creative disciplines. Each has
                their own unique style, approach, and voice. From murals to
                portraits, from living spaces to experiential events, creativity
                has no limits. Together, let's make more art.
              </p>
              <button
                type="button"
                className="rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                About us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetArtist;
