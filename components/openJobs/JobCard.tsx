import Link from 'next/link'
import React from 'react'
import {AiOutlineFieldTime} from "react-icons/ai";
import {GiResize} from "react-icons/gi";
import {BiSolidUserCircle} from "react-icons/bi";

const ArtistCard = () => {
  return (
    <div className="w-full border border-pink-700 rounded-lg flex justify-between items-start shadow-lg bg-white p-5">
      <div className='w-full flex flex-col'>
        
        <div className='w-full flex items-center gap-4'>
          <div className='w-[3rem] h-[3rem] rounded-full overflow-hidden'>
            <img src='/user-2.jpg' alt='user' className='w-full h-full'/>
          </div>
          <h3 className='font-bold text-2xl'> Mural/Graffiti </h3>
          <div className="text-sm bg-[#333] text-white px-5 py-1 font-normal rounded-full">Open</div>
          <h3 className='block text-gray-800 font-bold text-2xl ml-auto'> $2000 </h3>
        </div>

        <div className='mt-5'>
          <h3 className='text-[1.5em] text-gray-700'> Beach scene with palm trees and sunset. </h3>
          <div className='flex flex-col gap-3 pl-3 mt-2 text-pink-500'>
            <div className='flex gap-2 items-center'>
              <GiResize className='text-[2em]'/>
              <p className='text-[1.2em]'> 12 x 3.5 </p>
            </div>
            <div className='flex gap-2 items-center'>
              <AiOutlineFieldTime className='text-[2em]'/>
              <p className='text-[1.2em]'> Flexible </p>
            </div>
            <div className='flex gap-2 items-center'>
              <BiSolidUserCircle className='text-[2em]'/>
              <p className='text-[1.2em]'> Drpw , Individual </p>
            </div>
          </div>
          
        </div>

        <div className='w-full flex justify-between items-center'>
        <p className='text-gray-900 text-xl'> Published on 14-Oct-2023 </p>
          <div className=''>
            <div className="w-full">
                <Link href="/request-quote/Anita Jan">
                    <button role="button" aria-label="message" className="mx-auto text-center w-[15rem] rounded-md block btn-primary">
                        Make an offer
                    </button>
                </Link>
            </div>
          </div>
          
      </div>

      </div>

      

    </div>
  )
}

export default ArtistCard