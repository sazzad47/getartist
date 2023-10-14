import Link from 'next/link'
import React from 'react'

const Rating = ()=> {
    return (
        <div className="flex items-center">
            <svg className="w-10 h-10 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-10 h-10 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-10 h-10 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-10 h-10 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-10 h-10 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <p className="ml-2 text-lg font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
        </div>
    )
}

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
                            <div className='mt-5'>
                              <Rating/>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-8">
                        <div className=''>
                            <h1 className="text-[1.8em] font-semibold leading-normal text-gray-800">190</h1>
                            <p className="text-lg leading-none text-gray-600">Projects done</p>
                        </div>
                        <div className="text-[1.5em]">
                            <span> Starting at</span><span className='font-bold'> $50 </span>
                        </div>
                    </div>
                    <p className='my-5 text-[1.2em] text-gray-900 line-clamp-3'>
                      My Art practice involves a lot of large scale mural painting, some illustration work and some exhibition work for galleries. It has evolved from doing posters in the street to taking on large
                    </p>
                    
                   </div>
                   <div className='w-full'>
                        <div className="w-full">
                            <Link href="/request-quote/Anita Jan">
                                <button role="button" aria-label="message" className="mx-auto text-center w-[15rem] rounded-md block btn-primary">
                                    Request a Quote
                                </button>
                            </Link>
                        </div>
                        <div className="w-full mt-5">
                            <Link href="/profile">
                            <button role="button" aria-label="message" className="mx-auto text-center w-[15rem] rounded-md block btn-secondary">
                                View Artist
                            </button>
                            </Link>
                        </div>
                   </div>
                </div>
    </div>
  )
}

export default ArtistCard