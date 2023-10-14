import React from "react";
import Rating from "../ui/Rating";
import Folio from "./folio";
import Review from "./reviews";

const Profile = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full">
                {/* Card code block start */}
                <div className="bg-white shadow rounded w-[80%] mx-auto">
                    <div className="relative">
                        <img className="h-56 shadow rounded-t w-full object-cover object-center" src="https://mdbcdn.b-cdn.net/img/new/slides/146.webp" alt="" />
                        <div className="mx-auto left-0 right-0 w-24 h-24 absolute bottom-0 -mb-12 rounded border-2 shadow border-white">
                            <img className="w-full h-full overflow-hidden object-cover rounded" src="/user-1.png" alt="" />
                        </div>
                    </div>
                    <div className="px-5 xl:px-10 pb-10 mt-[3rem] flex flex-col">
                        <div className="flex justify-center w-full pt-16 xl:pt-5">
                            <div className="flex items-center">
                                <Rating rating={5} />
                            </div>
                        </div>
                        <div className="pt-3 flex flex-col items-center justify-between">
                            <div className="w-full">
                                <div className="text-center mb-3 flex flex-col items-center justify-between">
                                    <h2 className="mb-3 xl:mr-4 text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">Anita Jane</h2>
                                    <div className="text-sm bg-[#333] text-white px-5 py-1 font-normal rounded-full">Pro</div>
                                </div>
                                <p className="text-center mt-2 text-lg tracking-normal text-gray-600 dark:text-gray-400 leading-5">HI, as an artist, I possess a unique and creative perspective that breathes life into your work.</p>
                            </div>
                            <div className="w-full py-5 flex items-start justify-center">
                                <div className="mr-6">
                                    <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl leading-6 mb-2 text-center">82</h2>
                                    <p className="text-gray-800 dark:text-gray-100 text-sm leading-5">Reviews</p>
                                </div>
                                <div className="mr-6">
                                    <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl leading-6 mb-2 text-center">28</h2>
                                    <p className="text-gray-800 dark:text-gray-100 text-sm leading-5">Projects</p>
                                </div>
                                <div>
                                    <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl leading-6 mb-2 text-center">42</h2>
                                    <p className="text-gray-800 dark:text-gray-100 text-sm leading-5">Approved</p>
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row justify-center flex md:pl-6">
                                <div className="flex items-center justify-center mt-1 md:mt-0 mb-5 md:mb-0">
                                    <div className="rounded-full bg-gray-200 text-gray-600 dark:text-gray-400 text-sm px-6 py-2 flex justify-center items-center">Remote</div>
                                    <div className="ml-5 rounded-full bg-green-200 text-green-500 text-sm px-6 py-2 flex justify-center items-center">Available</div>
                                </div>
                                <button className="btn-primary text-sm ml-6">Message</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card code block end */}
                <h3 className="mt-[3rem] mb-[2rem] font-bold text-center text-[2em] text-gray-900"> Portfolio </h3>
                <div className="w-[80%] bg-white shadow rounded mx-auto">
                 <Folio/>
                </div>
                <h3 className="mt-[3rem] mb-[2rem] font-bold text-center text-[2em] text-gray-900"> Reviews </h3>
                <div className="w-[80%] p-[3rem] bg-white shadow rounded mx-auto mb-[5rem]">
                 <Review/>
                </div>
            </div>
        </>
    );
}
export default Profile;
