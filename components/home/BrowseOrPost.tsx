import React from "react";

const BrowseOrPost: React.FC = () => {
  return (
    <div className="bg-white overflow-y-hidden px-[1rem] sm:px-[2rem] md:px-[5rem]">
      <div className="mx-auto container py-12">
        <div className="flex flex-col gap-5">
          <div className="w-full flex flex-col sm:flex-row gap-5 justify-center">
            <div className="w-full bg-gradient-to-r from-indigo-500 to-indigo-700 md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16">
              <div>
                <div className="flex flex-col items-center">
                  <div className="w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                    <div>
                      <h1
                        role="heading"
                        className="text-xl md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-white font-black leading-6 lg:leading-10 md:text-left text-center"
                      >
                        Browse artists
                      </h1>
                      <p className="text-white mt-5 text-3xl font-bold mb-0 md:mb-[5rem]">
                        Explore artists near you and send a message to get your
                        project started.
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-between items-end">
                    <div>
                      <button
                        role="button"
                        aria-label="Post a job"
                        className="whitespace-nowrap mt-5 lg:mt-8 py-3 lg:py-4 px-4 lg:px-8 bg-white font-bold text-indigo-700 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
                      >
                        Browse artists
                      </button>
                    </div>
                    <div>
                      <img src="/browse-artist.png" alt="post" className="w-" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full bg-gradient-to-r from-indigo-500 to-indigo-700 md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16">
              <div>
                <div className="flex flex-col items-center">
                  <div className="w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                    <div>
                      <h1
                        role="heading"
                        className="text-xl md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-white font-black leading-6 lg:leading-10 md:text-left text-center"
                      >
                        Post a job
                      </h1>
                      <p className="text-white mt-5 text-3xl font-bold">
                        Need inspiration? Post a brief and interested artists
                        will be in touch to discuss your project.
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-between items-end">
                    <div>
                      <button
                        role="button"
                        aria-label="Post a job"
                        className="whitespace-nowrap mt-5 lg:mt-8 py-3 lg:py-4 px-4 lg:px-8 bg-white font-bold text-indigo-700 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
                      >
                        Post a job
                      </button>
                    </div>
                    <div>
                      <img src="/post-a-job.png" alt="post" className="w-" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-gradient-to-r from-indigo-500 to-indigo-700 md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16">
            <div>
              <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                  <div>
                    <h1
                      role="heading"
                      className="text-xl md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-white font-black leading-6 lg:leading-10 md:text-left text-center"
                    >
                      Are you an artist?
                    </h1>
                    <p className="text-white mt-5 text-3xl font-bold">
                      Start commissioning projects without hassle
                    </p>
                  </div>
                  <button
                    role="button"
                    aria-label="Join the community"
                    className="mt-5 lg:mt-8 py-3 lg:py-4 px-4 lg:px-8 bg-white font-bold text-indigo-700 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
                  >
                    Join the community
                  </button>
                </div>
                <div className="md:w-1/3 w-2/3">
                  <img src="/you-artist.png" alt="cartoon avatars" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseOrPost;
