import React from 'react'
import ArtistCard from './ArtistCard'
import Gallery from './Gallery'

const ArtistSection = () => {
  return (
    <div className='pt-[3rem] w-full flex gap-5 px-[5rem]'>
          <ArtistCard/>
          <Gallery/>
    </div>
  )
}

export default ArtistSection