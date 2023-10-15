import React from 'react'
import Link from 'next/link';
import {BsArrowRight} from "react-icons/bs";

const artistTypes = [
    'Mural Artist',
    'Installation Artist',
    'Photographer',
    'Plant Stylist',
    'Digital Artist',
    'Signwriter',
    'Woodworker',
    'Printmaker',
    'Calligrapher',
    'Glass Artist',
    'Stained Glass Artist',
    'Textile Artist (Tapestry Art)',
    'Ceramic Artist',
    'Sculptor',
    'Potter',
    'Workshop Instructor',
  ];

const BrowseArtist = () => {

  return (
    <div className="px-[1rem] sm:px-[2rem] md:px-[5rem]">
        <div className='w-full flex justify-center flex-wrap gap-4 mt-[3rem]'>
                {artistTypes.slice(0,7).map((item, index)=> {
                    return (
                        <Link href="/hire" key={index} className='btn-primary rounded-full'>
                            {item}
                        </Link>
                    )
                })}
                 <Link href="/hire" className='flex gap-2 items-center text-[1.3em]'>
                  All artists <BsArrowRight/>
                 </Link>
            </div>
    </div>
  )
}

export default BrowseArtist