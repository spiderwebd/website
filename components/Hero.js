import React from "react"; 
import Navbar from "./Navbar";
import Image from "next/image";


const Hero = () => {
  return (
    <div className="container mx-auto my-10 ">
      <div className="bg-[#B6EADA] px-6 lg:px-16 py-10 rounded-3xl">
        <Navbar />
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
          <div className="flex flex-col gap-5 lg:gap-10">
            <p className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium  text-white		">
              Branding <br className="lg:flex hidden" /> on clothing apparel,
              cups,electronics and vehicles.
              <br className="lg:flex hidden" />
            </p>
            <button className="btn btn-sm lg:btn-lg bg-[#524fd5] text-white rounded-full border-none w-36 lg:w-44 capitalize">
            <a href=" https://wa.me/658808362" >  
            Get A Quote
            </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
