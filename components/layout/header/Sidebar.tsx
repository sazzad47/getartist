import React, { useState } from "react";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa"; 

interface SidebarProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ showSidebar, setShowSidebar }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <>
      <AiOutlineMenuUnfold
        onClick={() => setShowSidebar(!showSidebar)}
        className="text-light text-[1.6em] cursor-pointer"
      />
      <div
        className={`top-0 right-0 w-[35vw] bg-black  p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <AiOutlineClose/>
        </button>
        <ul className="mt-8">
          <li className="mb-4">
            <a className="text-lg text-white flex items-center" href="#">
              Book An Artist
            </a>
          </li>
          <li className="mb-4">
            <a className="text-lg text-white flex items-center" href="#">
              Find Artists
            </a>
          </li>
          <li className="mb-4">
            <a
              className="text-lg text-white flex items-center cursor-pointer"
              onClick={toggleSubmenu}
            >
              How It Works
              <FaChevronRight
                className={`ml-2 ${
                  submenuOpen ? "transform rotate-90" : "transform rotate-0"
                } transition-transform duration-300`}
              />
            </a>
            {submenuOpen && (
              <ul className="pl-4">
                <li className="mb-2">
                  <a className="text-sm text-white" href="#">
                    Submenu Item 1
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-sm text-white" href="#">
                    Submenu Item 2
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="mb-4">
            <a className="text-lg text-white flex items-center" href="#">
              For Artists
            </a>
          </li>
          <li className="mb-4">
            <a className="text-lg text-white flex items-center" href="#">
              Reviews
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
