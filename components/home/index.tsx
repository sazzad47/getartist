import React from "react";
import Hero from "./Hero";
import Designs from "./Designs";
import SubscribeSection from "./SubscribeSection";
import GetArtist from "./GetArtist";
import BrowseOrPost from "./BrowseOrPost";
import WhyArtist from "./WhyArtist";
import BlogSection from "./BlogSection";
import TrustedBy from "./TrustedBy";

const Home = () => {
  return (
    <div className="flex flex-col gap-[5rem]">
      <Hero />
      <div className="container flex flex-col gap-[5rem]">
        <Designs />
        <GetArtist />
        <BrowseOrPost />
        <WhyArtist />
        <BlogSection />
        <TrustedBy/>
        <SubscribeSection />
      </div>
    </div>
  );
};

export default Home;
