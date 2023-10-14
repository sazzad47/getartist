import React from 'react'
import ArtistCard from './ArtistCard'
import Gallery from './Gallery'

const ModalContent = () => {
  return (
    <div className='flex flex-col gap-5 w-full h-full'>
        <div className='w-full flex gap-5'>
            <ArtistCard/>
            <Gallery/>
        </div>
        <div>
            <h3 className='text-[1.3em] font-bold'> Description </h3>
            <p className='text-gray-900 text-[1em]'>
            Mural art has been utilized throughout history as a means of storytelling, cultural representation, and social commentary. These monumental artworks have the power to convey powerful messages, capture the essence of a community, or simply add a touch of beauty to an urban environment.
            </p>
        </div>
    </div>
  )
}

export default ModalContent