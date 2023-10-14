import React from 'react'
import ArtistCard from './ArtistCard'
import Gallery from './Gallery'

const ArtistSection = () => {
  return (
    <div className='mt-5 flex'>
          <ArtistCard/>
          <Gallery/>
    </div>
  )
}

export default ArtistSection