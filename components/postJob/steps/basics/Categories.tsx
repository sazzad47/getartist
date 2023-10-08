import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlinePlus, AiOutlineCheckCircle } from "react-icons/ai";
import Modal from "../../../ui/Modal";

type Category = {
  id: number;
  name: string;
};

const categoryList: Category[] = [
  {
    id: 1,
    name: "Signwriters",
  },
  {
    id: 2,
    name: "Woodwork",
  },
  {
    id: 3,
    name: "Print Art",
  },
  {
    id: 4,
    name: "Glass Art",
  },
  {
    id: 5,
    name: "Stained Glass",
  },
  {
    id: 6,
    name: "Ceramic Art",
  },
  {
    id: 7,
    name: "Sculpture",
  },
  {
    id: 8,
    name: "Pottery",
  },
  {
    id: 9,
    name: "Workshops",
  },
];

const Categories: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const clearSelectedCategory = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="mt-[3rem]">
      <div className="flex flex-col">
        <label className="text-2xl font-bold text-gray-900 mb-3" id="password">
          Where do you want your ad displayed? *
        </label>
        <div className="flex gap-5">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={openModal}
            className="text-gray-900 rounded-md font-[roboto] text-[1.4em] border border-[#333] py-3 px-6 flex gap-3 items-center"
          >
            <AiOutlinePlus />
            Categories
          </motion.button>
          {selectedCategory && (
            <div className="text-green-600 rounded-md font-[roboto] text-[1.4em] border border-green-600 py-3 px-6 flex gap-3 items-center">
              <AiOutlineCheckCircle />
              {selectedCategory}
            </div>
          )}
        </div>
      </div>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <Modal
            handleClose={closeModal}
            className="m-auto w-[90%] sm:w-[70%] md:w-[50%] h-[50%] bg-white"
          >
            <div className="w-full h-full flex flex-col p-[3rem] justify-between">
              <div className="flex flex-wrap gap-5">
                {categoryList.map((item) => {
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleCategoryClick(item.name)}
                      className={`px-3 py-2 text-xl font-bold border border-gray-400 rounded-full cursor-pointer bg-transparent hover:bg-green-600 text-gray-900 hover:text-white ${
                        selectedCategory === item.name
                          ? "bg-green-600 text-white"
                          : ""
                      }`}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>
              <div className="w-full flex justify-between">
                <button
                  onClick={clearSelectedCategory}
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
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Categories;
