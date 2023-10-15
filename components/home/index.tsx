import React from "react";
import Hero from "./Hero";
import Featured from "./Featured";
import BrowseCategories from "./BrowseCategories";
import WhyArtist from "./WhyArtist";
import TrustedBy from "./TrustedBy";
import BrowseArtist from "./browseArtist";
import BrowseByLocation from "./browseByLocation";
import Guarantees from "./Guarantees";

const Home = () => {
  return (
    <div className="flex flex-col gap-[5rem]">
      <Hero />
      <div className="container flex flex-col gap-[5rem]">
        <TrustedBy/>
        <Featured />
        <WhyArtist />
        <BrowseArtist />
        <BrowseByLocation />
        <BrowseCategories />
        <Guarantees />
      </div>
    </div>
  );
};

export default Home;
