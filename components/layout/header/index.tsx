import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-between items-center px-5 py-3 bg-black">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={30} height={30} />
      </Link>
      <div className="flex gap-5 items-center">
        <Link href="/post-a-job">
          <button
            type="button"
            className="rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Post a post
          </button>
        </Link>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </div>
    </div>
  );
};

export default Header;
