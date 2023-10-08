import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="bg-gray-100 pb-[5rem]">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
