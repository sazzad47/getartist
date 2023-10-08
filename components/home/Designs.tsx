import React from "react";
import Carousel from "better-react-carousel";
import Image from "next/image";

const breakpoints = [
  {
    breakpoint: 400,
    cols: 2,
    rows: 1,
    gap: 2,
    loop: true,
  },
  {
    breakpoint: 1024,
    cols: 3,
    rows: 1,
    gap: 10,
    loop: true,
  },
  {
    breakpoint: 1280,
    cols: 3,
    rows: 1,
    gap: 10,
    loop: true,
  },
];

export default function MayLike() {
  const numItems = 10; // Number of items in the carousel

  return (
    <div className="h-full flex flex-col justify-between px-[5rem]">
      <h1 className="text-2xl md:text-4xl font-bold mb-5 text-center px-0 md:px-[10rem]">
        Discover, hire, and complete original art projects, big or small.
      </h1>

      <div className="text-gray-900">
        <Carousel responsiveLayout={breakpoints}>
          {Array.from({ length: numItems }).map((_, index) => (
            <Carousel.Item key={index}>
              <div className="bg-white rounded-lg shadow-lg">
                <div>
                  <Image
                    src={`/art-${index + 1}.jpg`}
                    alt={`design-${index}`}
                    width={400}
                    height={300}
                    className="w-full aspect-square"
                  />
                </div>
                <h4 className="p-5 text-start text-[1.8em] font-[700]">{`Art ${index + 1}`} </h4>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
