import React from 'react'
import ReviewCard from './ReviewCard';
import Hero from './Hero';

const Discover = () => {
  return (
    <div className=''>

      <Hero/>
        
            <div className='w-full grid grid-cols-1 gap-5 mt-[3rem] px-[5rem]'> 
                {Array.from({length: 9}).map((_, index)=> {
                  return (
                    <div key={index}>
                      <ReviewCard/>
                    </div>
                  )
                })}
             </div>

    </div>
  )
}

export default Discover