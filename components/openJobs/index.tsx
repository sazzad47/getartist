import React from 'react'
import JobCard from './JobCard';

const artworkTypes = [
    "Painting",
    "Sculpture",
    "Drawing",
    "Photography",
    "Printmaking",
    "Mixed Media",
    "Digital Art",
    "Illustration",
    "Graffiti Art",
    "Land Art",
    "Street Art",
    "Abstract Art",
  ];

const Discover = () => {
  return (
    <div className='px-[5rem] pt-[4rem]'>

        <div className='text-3xl font-bold text-center'>Open Jobs</div>
        
        
            <div className='w-full grid grid-cols-2 gap-5 mt-[3rem]'> 
                {Array.from({length: 9}).map((_, index)=> {
                  return (
                    <div key={index}>
                      <JobCard/>
                    </div>
                  )
                })}
             </div>

    </div>
  )
}

export default Discover