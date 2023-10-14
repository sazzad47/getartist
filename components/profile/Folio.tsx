import { AnimatePresence } from 'framer-motion';
import React, {useState} from 'react';
import {AiOutlineHeart} from "react-icons/ai";
import ModalContent from './modalContent';
import Modal from '../ui/Modal';

const imageUrls = [
  { id: 1, url: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp' },
  { id: 2, url: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp' },
  { id: 3, url: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp' },
  { id: 4, url: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp' },
  { id: 5, url: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp' },
  { id: 6, url: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp' }
];

const Folio: React.FC = () => {

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-full min-full">
      <div className="flex flex-wrap h-full">
        <div className="flex w-1/2 flex-wrap ">
            {imageUrls.slice(0, 3).map((image, index)=> {
                return (
                    <div key={index} className={`relative group cursor-pointer ${index === 2 ? 'w-full' : 'w-1/2'}`}>
                        <img
                           onClick={openModal}
                            alt={`gallery-${index}`}
                            className="block h-full w-full object-cover object-center"
                            src={image.url}/>
                           
                            <div className="w-[3rem] h-[3rem] absolute top-2 right-3 opacity-0 group-hover:opacity-100 p-2 rounded-full bg-white flex items-center justify-center transition duration-500 ease-in-out cursor-pointer hover:bg-[#e9f5f5] hover:scale-110">
                              <AiOutlineHeart className='text-[#333] w-full h-full'/>
                            </div>
                         
                    </div>
                )
            })}
        
            </div>

            <div className="flex w-1/2 flex-wrap">
                {imageUrls.slice(3, 7).map((image, index)=> {
                    return (
                        <div key={index} className={`relative group cursor-pointer ${index === 0 ? 'w-full' : 'w-1/2'}`}>
                           <img
                            onClick={openModal}
                            alt={`gallery-${index}`}
                            className="block h-full w-full object-cover object-center"
                            src={image.url}/>
                           
                            <div className="w-[3rem] h-[3rem] p-2 rounded-full absolute top-2 right-3 opacity-0 group-hover:opacity-100 bg-white flex items-center justify-center transition duration-500 ease-in-out cursor-pointer hover:bg-[#e9f5f5] hover:scale-110">
                              <AiOutlineHeart className='text-[#333] w-full h-full'/>
                            </div>


                        </div>
                    )
                })}
            </div>
        </div>
            
        <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <Modal
            handleClose={closeModal}
            className="m-auto w-[90%] sm:w-[80%] md:w-[70%] h-[70%] bg-white overflow-hidden"
          >
            <div className="w-full h-full flex flex-col p-[3rem] justify-between">
              <ModalContent/>
              <div className="w-full flex justify-end">
                <button
                  onClick={closeModal}
                  className="rounded-md text-[#FFF] font-[roboto] text-[1.25rem] bg-[#333] py-3 px-10"
                >
                  Close
                </button>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
       
    </div>
  );
};

export default Folio;
