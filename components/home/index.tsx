import React from "react";
import Hero from "./Hero";
import Featured from "./Featured";
import BrowseCategories from "./BrowseCategories";
import WhyArtist from "./WhyArtist";
import TrustedBy from "./TrustedBy";

const Home = () => {
  return (
    <div className="flex flex-col gap-[5rem]">
      <Hero />
      <div className="container flex flex-col gap-[5rem]">
        <TrustedBy/>
        <Featured />
        <WhyArtist />
        <BrowseCategories />
      </div>
    </div>
  );
};

export default Home;
