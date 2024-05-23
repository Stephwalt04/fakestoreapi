import React from "react";
// import link
import { Link } from "react-router-dom";

const GeneralProductHero = () => {
  return (
    <section className="h-[800px] bg-product bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          {/* pretitle */}
          <div className="font-semibold flex items-center uppercase text-gray-300">
            <div className="w-10 h-[2px] bg-red-500 mr-3"> </div> General
            Products
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4 text-white">
            LOOK NO FURTHER <br />
            <span className="font-semibold"> OUR PRODUCT SECTION</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary text-red-500"
          >
            Discover More
          </Link>
        </div>
        {/* image */}
        <div className="hidden lg:block">
          <img src alt="" />
        </div>
      </div>
    </section>
  );
};

export default GeneralProductHero;
