import React from "react";
import Hero from "./Hero";
import Featured from "./Featured";
import SubscribeSection from "./SubscribeSection";
import BrowseCategories from "./BrowseCategories";
import BrowseOrPost from "./BrowseOrPost";
import WhyArtist from "./WhyArtist";
import BlogSection from "./BlogSection";
import TrustedBy from "./TrustedBy";

const Home = () => {
  return (
    <div className="flex flex-col gap-[5rem]">
      <Hero />
      <div className="container flex flex-col gap-[5rem]">
        <TrustedBy/>
        <Featured />
        <BrowseCategories />
        <WhyArtist />
        <BrowseOrPost />
        <BlogSection />
        <SubscribeSection />
      </div>
    </div>
  );
};

export default Home;
