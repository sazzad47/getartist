import Link from 'next/link'
import React from 'react'
import {AiOutlineHeart} from "react-icons/ai";
import Rating from '../ui/Rating';

const ArtistCard = () => {
  return (
    <div className='flex-1'>
                <div className="w-full h-full flex flex-col justify-between rounded border hover:shadow-lg">
                 <div>
                   
                 <div className="relative group w-full">
                        <img
                            alt="art"
                            className="block h-full w-full object-cover object-center"
                            src= "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png"/>
                           
                            <div className="w-[3rem] h-[3rem] absolute top-2 right-3 opacity-0 group-hover:opacity-100 p-2 rounded-full bg-white flex items-center justify-center transition duration-500 ease-in-out cursor-pointer hover:bg-[#e9f5f5] hover:scale-110">
                              <AiOutlineHeart className='text-[#333] w-full h-full'/>
                            </div>
                         
                    </div>
                   
                    <p className='p-4 pb-0 text-3xl font-bold text-gray-900 line-clamp-1'>
                      My Art practice involves a lot of large scale mural painting, some illustration work and some exhibition work for galleries. It has evolved from doing posters in the street to taking on large
                    </p>
                    <p className='p-4 pb-0 text-xl font-bold text-gray-900 line-clamp-1'> By Anita Jane </p>
                    <p className='px-4 pb-0 text-lg font-bold text-gray-600 line-clamp-1'> Sydney, Australia </p>
                   
                    <div className='w-full flex justify-between px-4'>
                      <div className='flex items-center gap-2'>

                        <Rating rating={5} />
                        (5)
                      </div>
                      <div className='rounded-full text-white bg-green-700 px-3 py-2'> Mural & Graffiti Artists </div>
                    </div>
                    
                   </div>
                   <div className='w-full p-4'>
                        <div className="w-full">
                            <Link href="/request-quote/Anita Jan">
                                <button role="button" aria-label="message" className="mx-auto text-center w-full rounded-md block btn-primary">
                                    Request Quote
                                </button>
                            </Link>
                        </div>
                       
                   </div>
                </div>
    </div>
  )
}

export default ArtistCard