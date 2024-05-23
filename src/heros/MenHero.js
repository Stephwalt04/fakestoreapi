import React from "react";
// import link
import { Link } from "react-router-dom";

const MenHero = () => {
  return (
    <section className="h-[800px] bg-men bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          {/* pretitle */}
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3 text-purple-600"></div>
            <span className="text-white font-bold"> New Trend </span>
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4 text-purple-600">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold text-purple-600"> MEN'S</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            <span className="text-white font-bold"> Discover More </span>
          </Link>
        </div>
        {/* image */}
        <div className="hidden lg:block"></div>
      </div>
    </section>
  );
};

export default MenHero;
