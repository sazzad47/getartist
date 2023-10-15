import Link from "next/link";
import React from "react";

const imageUrls = [
  { id: 1, url: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp' },
  { id: 2, url: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp' },
  { id: 3, url: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp' },
  { id: 4, url: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp' },
  { id: 5, url: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp' },
  { id: 6, url: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp' }
];

const BrowseCategories: React.FC = () => {
  return (
    <section className="px-[1rem] sm:px-[2rem] md:px-[5rem]">
      <h1 className="text-3xl sm:text-5xl font-bold mb-5 text-start"> 
        Search by Art Category
      </h1>

      <div className="flex flex-wrap gap-3 h-full mt-[3rem]">
      <div className="flex flex-1 flex-wrap ">
      <Link href="/discover" className={`relative group cursor-pointer`}>
                        <img
                            alt=""
                            className="block h-full w-full object-cover object-center"
                            src="/art-1.jpg"/>
                           
                           <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] flex items-end justify-start transition-all duration-500 ease-in z-100 rounded-10">
                              <div className="rounded-full text-white text-2xl font-bold flex items-center justify-center p-5 cursor-pointer">
                                Pop Art
                              </div>
                            </div>
                    </Link>
                    </div>
        <div className="grid grid-cols-2 gap-3 w-1/2">
            {imageUrls.slice(0, 4).map((image, index)=> {
                return (
                    <Link href="/discover" key={index} className={`relative group cursor-pointer w-full`}>
                        <img
                            alt={`gallery-${index}`}
                            className="block h-full w-full object-cover object-center"
                            src={`art-${index + 2}.jpg`}/>
                           
                           <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] flex items-end justify-start transition-all duration-500 ease-in z-100 rounded-10">
                              <div className="rounded-full text-white text-2xl font-bold flex items-center justify-center p-5 cursor-pointer">
                                Pop Art
                              </div>
                            </div>
                    </Link>
                )
            })}
        
            </div>

        </div>
            <div className="grid grid-cols-3 gap-3 mt-3">
                {imageUrls.slice(3, 7).map((image, index)=> {
                    return (
                      <Link href="/discover" key={index} className={`relative group cursor-pointer w-full`}>
                           <img
                            alt={`gallery-${index}`}
                            className="block h-full w-full object-cover object-center"
                            src={`art-${index + 6}.jpg`}/>
                           
                           <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] flex items-end justify-start transition-all duration-500 ease-in z-100 rounded-10">
                              <div className="p-5 rounded-full text-white text-2xl font-bold flex items-center justify-center cursor-pointer">
                                Pop Art
                              </div>
                            </div>


                        </Link>
                    )
                })}
            </div>
            
    </section>
  );
};

export default BrowseCategories;
