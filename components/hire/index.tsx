import React from 'react';
import Hero from './Hero';
import ArtistSection from './artist';

const Hire = () => {
  return (
    <>
      <Hero />
      <div className='mt-[5rem]'>
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
