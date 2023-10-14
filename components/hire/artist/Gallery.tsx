import React from 'react';
import {AiOutlineHeart} from "react-icons/ai";

const imageUrls = [
  'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp',
  'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp',
  'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
  'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp',
  'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp',
  'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp',
];

const Gallery: React.FC = () => {
  return (
    <div className="w-[60%] min-full">
      <div className="flex flex-wrap h-full">
        <div className="flex w-1/2 flex-wrap ">
            {imageUrls.slice(0, 3).map((imageUrl, index)=> {
                return (
                    <div key={index} className={`relative group cursor-pointer ${index === 2 ? 'w-full' : 'w-1/2'}`}>
                        <img
                            alt={`gallery-${index}`}
                            className="block h-full w-full object-cover object-center"
                            src={imageUrl}/>
                            <div className="text-white opacity-0 group-hover:opacity-100 w-full h-full absolute top-0 left-0 bg-opacity-20 bg-black z-[3] p-5 flex items-start justify-end transition duration-500 ease-in-out rounded-lg">
                            <div className="w-[3rem] h-[3rem] p-2 rounded-full bg-white flex items-center justify-center transition duration-500 ease-in-out cursor-pointer hover:bg-[#e9f5f5] hover:scale-110">
                              <AiOutlineHeart className='text-[#333] w-full h-full'/>
                            </div>
                            </div>

                    </div>
                )
            })}
        
            </div>

            <div className="flex w-1/2 flex-wrap">
                {imageUrls.slice(3, 7).map((imageUrl, index)=> {
                    return (
                        <div key={index} className={`relative group cursor-pointer ${index === 0 ? 'w-full' : 'w-1/2'}`}>
                           <img
                            alt={`gallery-${index}`}
                            className="block h-full w-full object-cover object-center"
                            src={imageUrl}/>
                            <div className="text-white opacity-0 group-hover:opacity-100 w-full h-full absolute top-0 left-0 bg-opacity-20 bg-black z-[3] p-5 flex items-start justify-end transition duration-500 ease-in-out rounded-lg">
                            <div className="w-[3rem] h-[3rem] p-2 rounded-full bg-white flex items-center justify-center transition duration-500 ease-in-out cursor-pointer hover:bg-[#e9f5f5] hover:scale-110">
                              <AiOutlineHeart className='text-[#333] w-full h-full'/>
                            </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>

       
    </div>
  );
};

export default Gallery;
