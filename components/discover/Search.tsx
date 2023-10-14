import React from 'react'
import {AiOutlineSearch} from "react-icons/ai";

const Search = () => {
  return (
    <div className="relative w-full">
        <input type="text" id="voice-search" className="bg-gray-50 py-4 border border-gray-300 focus:outline-none text-gray-900 text-sm rounded-full block w-full p-2.5" placeholder="Search Mural/Graffiti , Canvas Art..." required />
        <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
            <AiOutlineSearch className='text-[2em]'/>
        </button>
    </div>
  )
}

export default Search