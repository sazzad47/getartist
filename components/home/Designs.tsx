import React from "react";
import Image from "next/image";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {AiOutlineSearch, AiOutlineHeart} from "react-icons/ai";

export default function MayLike() {
  const numItems = 10; 

  function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
      <div className="next bg-white border border-gray-400" onClick={onClick}>
        <BsArrowRightShort />
      </div>
    );
  }
  
  function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
      <div className="previous bg-white border border-gray-400" onClick={onClick}>
        <BsArrowLeftShort />
      </div>
    );
  }

  const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		adaptiveHeight: false,
		centerMode: false,
		arrows: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		dotsClass: "dots",
		speed: 900,
		autoplay: false,
		autoplaySpeed: 1700,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	};


  return (
    <div className="h-full flex flex-col justify-between px-[5rem]">
      <h1 className="text-2xl md:text-4xl font-bold mb-5 text-center px-0 md:px-[10rem]">
        Discover, hire, and complete original art projects, big or small.
      </h1>

      <div className="text-gray-900 mt-5">
       <Slider {...settings}>
          {Array.from({ length: numItems }).map((_, index) => (
              <div key={index} className="relative group">
                <div className="w-full h-[20rem] shadow-lg">
                  <Image
                    src={`/art-${index + 1}.jpg`}
                    alt={`design-${index}`}
                    fill
                    className="w-full"
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500 ease-in z-100 rounded-10">
                  <div className="p-5 rounded-full bg-white group-hover:bg-[#e9f5f5] group-hover:scale-[1.1] flex items-center justify-center m-10 transform translate-y-20 transition-all duration-500 ease-in cursor-pointer">
                    <AiOutlineSearch className="text-[2em]"/>
                  </div>
                  <div className="p-5 rounded-full bg-white group-hover:bg-[#e9f5f5] group-hover:scale-[1.1] flex items-center justify-center m-10 transform translate-y-20 transition-all duration-500 ease-in cursor-pointer">
                    <AiOutlineHeart className="text-[2em]"/>
                  </div>
                </div>
              </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
