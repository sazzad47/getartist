import React from 'react'
import Search from './Search'
import Filter from './Filter'
import ArtistCard from './ArtCard';

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

        <div className='text-3xl font-bold text-center'>Explore the world of creativity and diverse artworks</div>
        
            <div className="flex items-center gap-5 mt-[3rem] w-[50%] mx-auto">   
               <Search/>
               <Filter/>
            </div>

            <div className='w-full flex justify-center flex-wrap gap-4 mt-[3rem]'>
                {artworkTypes.slice(0,7).map((item, index)=> {
                    return (
                        <button key={index} className='btn-primary rounded-full'>
                            {item}
                        </button>
                    )
                })}
            </div>

            <div className='w-full grid grid-cols-3 gap-5 mt-[3rem]'> 
                {Array.from({length: 9}).map((_, index)=> {
                  return (
                    <div key={index}>
                      <ArtistCard/>
                    </div>
                  )
                })}
             </div>

    </div>
  )
}

export default Discover