import Image from "next/image";
import React from "react";

const imageUrls = [
  { id: 1, url: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp' },
  { id: 2, url: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp' },
  { id: 3, url: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp' },
  { id: 4, url: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp' },
  { id: 5, url: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp' },
  { id: 6, url: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp' }
];

const GetArtist: React.FC = () => {
  return (
    <section className="px-[1rem] sm:px-[2rem] md:px-[5rem]">
       <h1 className="text-2xl md:text-4xl font-bold mb-5 text-center px-0 md:px-[10rem]">
        Browse by categories
      </h1>

      <div className="flex flex-wrap h-full mt-[3rem]">
        <div className="flex w-1/2 flex-wrap ">
            {imageUrls.slice(0, 3).map((image, index)=> {
                return (
                    <div key={index} className={`relative group cursor-pointer ${index === 2 ? 'w-full' : 'w-1/2'}`}>
                        <img
                            alt={`gallery-${index}`}
                            className="block h-full w-full object-cover object-center"
                            src={image.url}/>
                           
                           <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500 ease-in z-100 rounded-10">
                              <div className="p-5 rounded-full text-white text-2xl font-bold group-hover:scale-[1.1] flex items-center justify-center m-10 transform translate-y-20 transition-all duration-500 ease-in cursor-pointer">
                                Pop Art
                              </div>
                            </div>
                    </div>
                )
            })}
        
            </div>

            <div className="flex w-1/2 flex-wrap">
                {imageUrls.slice(3, 7).map((image, index)=> {
                    return (
                        <div key={index} className={`relative group cursor-pointer ${index === 0 ? 'w-full' : 'w-1/2'}`}>
                           <img
                            alt={`gallery-${index}`}
                            className="block h-full w-full object-cover object-center"
                            src={image.url}/>
                           
                           <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500 ease-in z-100 rounded-10">
                              <div className="p-5 rounded-full text-white text-2xl font-bold group-hover:scale-[1.1] flex items-center justify-center m-10 transform translate-y-20 transition-all duration-500 ease-in cursor-pointer">
                                Pop Art
                              </div>
                            </div>


                        </div>
                    )
                })}
            </div>
        </div>
            
    </section>
  );
};

export default GetArtist;
