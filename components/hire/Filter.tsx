import React, {useState} from 'react'
import {BsFilter} from "react-icons/bs";
import Modal from '../ui/Modal';
import { AnimatePresence } from 'framer-motion';
import {Slider} from "@mui/material";
import Rating from '../ui/Rating';

const Filter = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [sliderValue, setSliderValue] = useState<number>(0);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  
  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  return (
    <div className='w-full flex justify-end items-center gap-3 p-[5rem] pb-0'>
        <p className='text-[2em] font-bold'> Filter by </p>
        <div onClick={openModal} className="w-[3rem] h-[3rem] p-2 rounded-full bg-white flex items-center justify-center transition duration-500 ease-in-out cursor-pointer hover:bg-[#e9f5f5] hover:scale-110">
            <BsFilter className='text-[#333] w-full h-full'/>
        </div>
        <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <Modal
            handleClose={closeModal}
            className="m-auto w-[90%] sm:w-[90%] md:w-[80%] h-[90%] overflow-y-auto bg-white"
          >
            <div className="w-full h-full flex flex-col p-[3rem]">
              <div className='w-full flex justify-between'>

            <h2 className="mb-[2rem] text-3xl font-bold text-gray-900">
               Filter
             </h2>
             <div className="flex gap-5">
                <button
                  className="rounded-md text-[#333] font-[roboto] text-[1.25rem] bg-[#E9E9E9] py-3 px-10"
                >
                  Clear all
                </button>
                <button
                  onClick={closeModal}
                  className="rounded-md text-[#FFF] font-[roboto] text-[1.25rem] bg-[#333] py-3 px-10"
                >
                  Continue
                </button>
              </div>
              </div>
              <div className="grid grid-cols-3 gap-5 mt-[3rem]">
                <div className='w-full flex flex-col gap-3'>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Pricing starts at
                  </h2>
                  <Slider min={1} max={100} defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                </div>
                <div className='w-full flex flex-col gap-3'>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Digital Design requirements
                  </h2>
                   <div>
                      <div className="flex items-center mb-4">
                          <input id="digital-design-req" type="radio" value="" name="digital-design-req" className="w-6 h-6 accent-pink-500"/>
                          <label htmlFor="digital-design-req" className="ml-2 text-lg font-medium text-gray-900">Any</label>
                      </div>
                      <div className="flex items-center mb-4">
                          <input id="digital-design-req" type="radio" value="" name="digital-design-req" className="w-6 h-6 accent-pink-500"/>
                          <label htmlFor="digital-design-req" className="ml-2 text-lg font-medium text-gray-900">Do not mind replicating an existing design</label>
                      </div>
                      <div className="flex items-center mb-4">
                          <input id="digital-design-req" type="radio" value="" name="digital-design-req" className="w-6 h-6 accent-pink-500"/>
                          <label htmlFor="digital-design-req" className="ml-2 text-lg font-medium text-gray-900">Can replicate designs if it suits their style</label>
                      </div>
                      <div className="flex items-center mb-4">
                          <input id="digital-design-req" type="radio" value="" name="digital-design-req" className="w-6 h-6 accent-pink-500"/>
                          <label htmlFor="digital-design-req" className="ml-2 text-lg font-medium text-gray-900">Creating designs after working with the clients</label>
                      </div>
                     
                   </div>
                </div>
                <div className='w-full flex flex-col gap-3'>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Surfaces to paint on
                  </h2>
                   <div className='grid grid-cols-2'>
                      <div className="flex items-center mb-4">
                          <input id="surfaces" type="radio" value="" name="surfaces" className="w-6 h-6 accent-pink-500"/>
                          <label htmlFor="surfaces" className="ml-2 text-lg font-medium text-gray-900">Any</label>
                      </div>
                      <div className="flex items-center mb-4">
                          <input id="surfaces" type="radio" value="" name="surfaces" className="w-6 h-6 accent-pink-500"/>
                          <label htmlFor="surfaces" className="ml-2 text-lg font-medium text-gray-900">Furniture</label>
                      </div>
                      <div className="flex items-center mb-4">
                          <input id="surfaces" type="radio" value="" name="surfaces" className="w-6 h-6 accent-pink-500"/>
                          <label htmlFor="surfaces" className="ml-2 text-lg font-medium text-gray-900">Un-rendered walls</label>
                      </div>
                      <div className="flex items-center mb-4">
                          <input id="surfaces" type="radio" value="" name="surfaces" className="w-6 h-6 accent-pink-500"/>
                          <label htmlFor="surfaces" className="ml-2 text-lg font-medium text-gray-900">Small Canvas</label>
                      </div>
                      <div className="flex items-center mb-4">
                          <input id="surfaces" type="radio" value="" name="surfaces" className="w-6 h-6 accent-pink-500"/>
                          <label htmlFor="surfaces" className="ml-2 text-lg font-medium text-gray-900">Rendered walls</label>
                      </div>
                      <div className="flex items-center mb-4">
                          <input id="surfaces" type="radio" value="" name="surfaces" className="w-6 h-6 accent-pink-500"/>
                          <label htmlFor="surfaces" className="ml-2 text-lg font-medium text-gray-900">Big Canvas</label>
                      </div>
                      <div className="flex items-center mb-4">
                          <input id="surfaces" type="radio" value="" name="surfaces" className="w-6 h-6 accent-pink-500"/>
                          <label htmlFor="surfaces" className="ml-2 text-lg font-medium text-gray-900">Iron corrugated sheets</label>
                      </div>
                      <div className="flex items-center mb-4">
                          <input id="surfaces" type="radio" value="" name="surfaces" className="w-6 h-6 accent-pink-500"/>
                          <label htmlFor="surfaces" className="ml-2 text-lg font-medium text-gray-900"> Wooden panels </label>
                      </div>
                     
                   </div>
                </div>
                <div className='w-full flex flex-col gap-3'>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Paint Tools
                  </h2>
                   <div>
                      <div className="flex items-center mb-4">
                          <input id="paint-tools" type="radio" value="" name="paint-tools" className="w-6 h-6 accent-pink-500"/>
                          <label htmlFor="paint-tools" className="ml-2 text-lg font-medium text-gray-900">Any</label>
                      </div>
                      <div className="flex items-center mb-4">
                          <input id="paint-tools" type="radio" value="" name="paint-tools" className="w-6 h-6 accent-pink-500"/>
                          <label htmlFor="paint-tools" className="ml-2 text-lg font-medium text-gray-900">Paint Brush</label>
                      </div>
                      <div className="flex items-center mb-4">
                          <input id="paint-tools" type="radio" value="" name="paint-tools" className="w-6 h-6 accent-pink-500"/>
                          <label htmlFor="paint-tools" className="ml-2 text-lg font-medium text-gray-900">Aerosol</label>
                      </div>
                    
                   </div>
                </div>
                <div className='w-full flex flex-col gap-3'>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Ratings
                  </h2>
                   <div>
                      <div className="flex items-center mb-4">
                          <input id="rating" type="radio" value="" name="rating" className="w-6 h-6 accent-pink-500"/>
                          <label htmlFor="rating" className="ml-2 text-lg font-medium text-gray-900"> Any </label>
                      </div>
                      <div className="flex items-center mb-4">
                          <input id="rating" type="radio" value="" name="rating" className="w-6 h-6 accent-pink-500"/>
                          <label htmlFor="rating" className="ml-2 text-lg font-medium text-gray-900"><Rating rating={5} /> </label>
                      </div>
                      <div className="flex items-center mb-4">
                          <input id="rating" type="radio" value="" name="rating" className="w-6 h-6 accent-pink-500"/>
                          <label htmlFor="rating" className="ml-2 text-lg font-medium text-gray-900"><Rating rating={4} /> </label>
                      </div>
                      <div className="flex items-center mb-4">
                          <input id="rating" type="radio" value="" name="rating" className="w-6 h-6 accent-pink-500"/>
                          <label htmlFor="rating" className="ml-2 text-lg font-medium text-gray-900"><Rating rating={3} /> </label>
                      </div>
                      <div className="flex items-center mb-4">
                          <input id="rating" type="radio" value="" name="rating" className="w-6 h-6 accent-pink-500"/>
                          <label htmlFor="rating" className="ml-2 text-lg font-medium text-gray-900"><Rating rating={2} /> </label>
                      </div>
                      <div className="flex items-center mb-4">
                          <input id="rating" type="radio" value="" name="rating" className="w-6 h-6 accent-pink-500"/>
                          <label htmlFor="rating" className="ml-2 text-lg font-medium text-gray-900"><Rating rating={1} /> </label>
                      </div>
                     
                     
                   </div>
                </div>
                
              </div>
              
            </div>
          </Modal>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Filter