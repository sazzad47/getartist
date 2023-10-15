import Link from 'next/link'
import React from 'react'
import Rating from '../ui/Rating';

const ArtistCard = () => {
  return (
    <div className="w-full border border-pink-700 rounded-lg flex justify-between items-start shadow-lg bg-white p-5">
      <div className='w-full flex flex-col'>
        
        <div className='w-full flex items-center gap-4'>
          <div className='w-[3rem] h-[3rem] rounded-full overflow-hidden'>
            <img src='/user-2.jpg' alt='user' className='w-full h-full'/>
          </div>
          <h3 className='font-bold text-2xl'> Jessica,  Campsie (Australia) </h3>
          <div> <Rating rating={5} /> </div>
         
        </div>

        <div className='mt-5'>
          <p className='text-[1.5em] text-gray-700'> Jessica helped me very last minute with an online and in-person workshop where she was required to teach 100+ people to draw goats. After explaining why goats and why a drawing lesson, Jessica created various exercises that were absolutely perfect for our audience and culture (which is very unique). She incorporated everything we had hoped for plus some and made drawing a difficult live specimen super fun and enriching. Jess was super responsive, polite and professional. I wouldn’t hesitate booking Jess again. Thanks Jess! </p>
        </div>

        <div className='w-full flex justify-between items-center mt-5'>
          <div className=''>
            <div className="w-full">
                <Link href="/hire">
                    <button role="button" aria-label="message" className="mx-auto text-center w-[15rem] rounded-md block btn-primary">
                        Sketch Artist
                    </button>
                </Link>
            </div>
          </div>
        <p className='text-gray-900 text-xl'> Posted on 14-Oct-2023 </p>
          
      </div>

      </div>

      

    </div>
  )
}

export default ArtistCard