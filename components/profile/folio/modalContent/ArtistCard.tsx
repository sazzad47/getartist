import Link from 'next/link'
import React from 'react'

const ArtistCard = () => {
  return (
    <div className='flex-1'>
                <div className="w-full h-full p-4 flex flex-col justify-between rounded border hover:shadow-lg">
                 <div>
                    <div className="flex justify-center items-center flex-col ">
                        <div className='w-[5rem] h-[5rem] rounded-full overflow-hidden'>
                            <img src="/user-1.png" alt="avatar" className='w-full h-full' />
                        </div>
                        <div className="flex justify-center items-center flex-col mt-3">
                            <p className="text-[1.5em] font-medium leading-none text-gray-800">Anita Jane</p>
                            <p className="text-[1.2em] font-medium leading-none text-gray-500 mt-2">Sydney, Australia</p>
                        </div>
                    </div>
                   
                   </div>
                   <div className='w-full mt-5'>
                        <div className="w-full">
                            <Link href="/request-quote/Anita Jan">
                                <button role="button" aria-label="message" className="mx-auto text-center w-[15rem] rounded-md block btn-primary">
                                    Request a Quote
                                </button>
                            </Link>
                        </div>
                   </div>
                </div>
    </div>
  )
}

export default ArtistCard