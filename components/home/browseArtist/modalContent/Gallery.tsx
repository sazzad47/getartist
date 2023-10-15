import React from "react";
import ImageSlider from "./ImageSlider";

const Gallery: React.FC = () => {

  return (
    <div className="w-[60%] relative overflow-hidden">
      <ImageSlider />
    </div>
  );
};

export default Gallery;
