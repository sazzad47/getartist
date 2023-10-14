import Link from 'next/link';
import React from 'react';
import {GiCloverSpiked} from "react-icons/gi";
import {MdLocationPin} from "react-icons/md";

const Hero: React.FC = () => {
  return (
    <section className="">

      <div className="px-6 py-12 text-center md:px-12 lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mt-12 lg:mt-0">
            
            <h1 className="mt-0 mb-16 text-4xl font-bold tracking-tight md:text-5xl xl:text-6 text-[hsl(221,14%,39%)]">
             Hire the best artist <br /><span className="text-[hsl(218,44%,28%)]">for your business</span>
           </h1>

            <div className="flex w-full justify-between bg-white rounded-full items-center p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                <div className="flex w-[40%] gap-2 items-center p-3"> <div className=" rounded-full bg-[#333] p-2"> <GiCloverSpiked className="w-[2rem] h-[2rem] text-white"/> </div> 
                 Looking for?
                </div>
                <div className="flex w-[35%] gap-2 items-center p-3"> <div className=" rounded-full bg-[#333] p-2"> <MdLocationPin className="w-[2rem] h-[2rem] text-white"/> </div> <input placeholder="Where?" className="border-none outline-none focus:outline-none bg-transparent" />  </div>
                <Link href="/hire">
                  <button className="btn-primary rounded-full whitespace-nowrap"> Search Now</button>
                </Link>
            </div>
       
            </div>
            <div className="mb-12 lg:mb-0">
              <img src="https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png"
                className="w-full rounded-lg shadow-lg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
