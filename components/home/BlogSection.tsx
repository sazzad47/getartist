import Image from "next/image";
import React from "react";

const BlogSection: React.FC = () => {
  return (
    <section className="px-[1rem] sm:px-[2rem] md:px-[5rem]">
      <div className="w-full">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Explore Our Creative Insights
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          <article className="w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex">
              <div className="p-6 flex flex-1 flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-5 text-gray-500">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      <svg
                        className="mr-1 w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                      </svg>
                      Tutorial
                    </span>
                    <span className="text-sm">14 days ago</span>
                  </div>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Unlocking Your Creative Potential</a>
                  </h2>
                  <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                    Discover how to unlock your inner creativity and unleash
                    your artistic talents. We&apos;ll share tips and techniques
                    to help you tap into your creative potential and express
                    your unique artistic vision.
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-7 h-7 rounded-full relative">
                      <Image
                        className="w-7 h-7 rounded-full"
                        src="/user-1.png"
                        alt="Jese Leos avatar"
                        fill
                      />
                    </div>
                    <span className="font-medium dark:text-white">
                      Jese Leos
                    </span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  >
                    Read more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="w-1/3 h-[15rem] object-fill relative">
                <Image src="/blog-1.jpg" alt="" fill />
              </div>
            </div>
          </article>
          <article className="w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="w-full flex">
              <div className="p-6 flex flex-1 flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-5 text-gray-500">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      <svg
                        className="mr-1 w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                      </svg>
                      Tutorial
                    </span>
                    <span className="text-sm">14 days ago</span>
                  </div>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">
                      Navigating the Art Industry: Tips for Emerging Artists
                    </a>
                  </h2>
                  <p className="mb-5 font-light text-gray-500 dark:text-gray-400 line-clamp-2">
                    Are you an emerging artist looking to break into the
                    competitive art industry? Learn valuable insights and
                    strategies for navigating the art world, building your
                    portfolio, and connecting with potential clients and
                    galleries.&quot; Feel free to use these titles and text as a
                    starting point for your artist hiring website&apos;s blog
                    cards. You can expand upon these topics or tailor them to
                    better suit your website&apos;s audience and goals
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-7 h-7 rounded-full relative">
                      <Image
                        className="w-7 h-7 rounded-full"
                        src="/user-1.png"
                        alt="Jese Leos avatar"
                        fill
                      />
                    </div>
                    <span className="font-medium dark:text-white">
                      Jese Leos
                    </span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  >
                    Read more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="w-1/3 h-[15rem] object-fill relative">
                <Image src="/blog-2.jpg" alt="" fill />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
