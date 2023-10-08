import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineFlag } from "react-icons/ai";
import { BiSolidLocationPlus } from "react-icons/bi";
import {MdLocationPin} from "react-icons/md";
import Modal from "../../../ui/Modal";

const Location: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCountry(event.target.value);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div className="mt-[3rem]">
      <div className="flex flex-col">
        <label className="text-2xl font-bold text-gray-900 mb-3" id="country">
          Where are you located?
        </label>
        <div className="w-full flex gap-5">
          {selectedCountry && (
            <div className="text-green-600 w-[25%] rounded-md font-[roboto] text-[1.4em] border border-green-600 flex flex-col justify-center px-3 py-[3rem] gap-3 items-center">
              <AiOutlineFlag className="text-[1.6em]" />
              {selectedCountry}
            </div>
          )}
          {selectedCity && (
            <div className="text-green-600 w-[25%] rounded-md font-[roboto] text-[1.4em] border border-green-600 flex flex-col justify-center px-3 py-[3rem] gap-3 items-center">
              <MdLocationPin className="text-[1.6em]" />
              {selectedCity}
            </div>
          )}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={openModal}
            className="text-gray-900 w-[25%] rounded-md font-[roboto] text-[1.4em] border border-[#333] flex flex-col justify-center px-3 py-[3rem] gap-3 items-center"
          >
            <BiSolidLocationPlus className="text-[1.6em]" />
            Select
          </motion.button>
        </div>
      </div>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <Modal
            handleClose={closeModal}
            className="m-auto w-[90%] sm:w-[80%] md:w-[60%] h-[60%] bg-white"
          >
            <div className="w-full h-full flex flex-col p-[3rem]">
              <h2 className="mb-[2rem] text-3xl font-bold text-gray-900">
                My Location
              </h2>
              <div className="flex flex-col gap-[3rem]">
                <div className="flex flex-col gap-3">
                  <label
                    className="text-2xl font-bold text-gray-900"
                    id="full_address"
                  >
                    Full Address
                  </label>
                  <input
                    type="name"
                    className="w-full p-3 mt-3 bg-gray-100 border-2 rounded-lg border-gray-400 focus:outline-none focus:border-gray-600 font-medium text-2xl text-gray-900"
                    aria-labelledby="full_address"
                    placeholder="e.g UK, London"
                  />
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-1 flex-col gap-3">
                    <label
                      className="text-2xl font-bold text-gray-900"
                      id="country"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      value={selectedCountry || ""}
                      onChange={handleCountryChange}
                      className="w-full p-3 mt-3 bg-gray-100 border-2 rounded-lg border-gray-400 focus:outline-none focus:border-gray-600 font-medium text-2xl text-gray-900"
                      aria-labelledby="country"
                      placeholder="e.g UK"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3">
                    <label
                      className="text-2xl font-bold text-gray-900"
                      id="city"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      value={selectedCity || ""}
                      onChange={handleCityChange}
                      className="w-full p-3 mt-3 bg-gray-100 border-2 rounded-lg border-gray-400 focus:outline-none focus:border-gray-600 font-medium text-2xl text-gray-900"
                      aria-labelledby="city"
                      placeholder="e.g London"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex mt-auto justify-between">
                <button
                  onClick={closeModal}
                  className="rounded-md text-[#333] font-[roboto] text-[1.25rem] bg-[#E9E9E9] py-3 px-10"
                >
                  Cancel
                </button>
                <button
                  onClick={closeModal}
                  className="rounded-md text-[#FFF] font-[roboto] text-[1.25rem] bg-[#333] py-3 px-10"
                >
                  Continue
                </button>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Location;
