import React from 'react';
import Hero from './Hero';
import ArtistSection from './artist';
import Filter from './Filter';

const Hire = () => {
  return (
    <>
      <Hero />
      <div className='mt-[5rem]'>
        <Filter/>
      </div>
      <div className='mt-[1rem]'>
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index}>
            <ArtistSection />
          </div>
        ))}
      </div>
    </>
  );
}

export default Hire;
