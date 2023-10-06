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
        <button className="btn-primary">Post a job</button>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </div>
    </div>
  );
};

export default Header;
