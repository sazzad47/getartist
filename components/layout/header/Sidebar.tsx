import Link from "next/link";
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
            <Link className="text-2xl text-white flex items-center" href="/hire">
              Find Artists
            </Link>
          </li>
          <li className="mb-4">
            <a className="text-2xl text-white flex items-center" href="#">
              How It Works
            </a>
          </li>
          <li className="mb-4">
            <a
              className="text-2xl text-white flex items-center cursor-pointer"
              onClick={toggleSubmenu}
            >
               For Artists
              <FaChevronRight
                className={`ml-2 ${
                  submenuOpen ? "transform rotate-90" : "transform rotate-0"
                } transition-transform duration-300`}
              />
            </a>
            {submenuOpen && (
              <ul className="pl-4 mt-3">
                <li className="mb-2">
                  <a className="text-xl text-white" href="#">
                    Reasons to join
                  </a>
                </li>
                <li className="mb-2">
                  <Link className="text-xl text-white" href="/open-jobs">
                    Open jobs
                  </Link>
                </li>
              </ul>
            )}
          </li>
         
          <li className="mb-4">
            <a className="text-2xl text-white flex items-center" href="#">
              Reviews
            </a>
          </li>
          <li className="mb-4">
            <Link className="text-2xl text-white flex items-center" href="/discover">
              Discover
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
