import React, { useContext, useEffect, useState } from "react";
// sidebar context
import { SidebarContext } from "../contexts/SidebarContext";

import "../index.css";
import { useMediaQuery } from "react-responsive";

// cart context
import { CartContext } from "../contexts/CartContext";

// import icons
import { BsBag } from "react-icons/bs";
// import Link
import { Link } from "react-router-dom";

//import logo
import Logo from "../img/thunderbolt.svg";

const Header = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  //header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={` ${
        isActive ? "bg-white py-3 shadow-md" : "bg-[#667fff] py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container flex mx-auto flexitems-center justify-between h-full">
        {/* Logo */}
        <Link
          to={"/"}
          className={`rounded font-bold ${isSmallScreen && "hidden-on-small"}`}
        >
          <div>
            <img className="w-[40px]" src={Logo} alt="" />
          </div>
        </Link>

        {/* Other Links */}
        <div className="flex flex-row gap-12 ">
          {/* General Products */}
          <Link to={"/all-products"} className="rounded font-bold">
            <div className="font-bold mt-2">
              <h1> Products</h1>
            </div>
          </Link>
          {/* Women Products */}
          <Link
            to={"/women-products"}
            className={`rounded font-bold ${
              isSmallScreen && "hidden-on-small rounded font-bold"
            }`}
          >
            <div className="font-bold mt-2">
              <h1> Women</h1>
            </div>
          </Link>
          {/* Men Products */}
          <Link
            to={"/men-products"}
            className={`rounded font-bold ${
              isSmallScreen && "hidden-on-small rounded font-bold"
            }`}
          >
            <div className="font-bold mt-2">
              <h1> Men </h1>
            </div>
          </Link>
          {/* Electronics */}
          <Link
            to={"/electronics"}
            className={`rounded font-bold ${
              isSmallScreen && "hidden-on-small rounded font-bold"
            }`}
          >
            <div className="font-bold mt-2">
              <h1> Electronics </h1>
            </div>
          </Link>
          {/* Jewelry */}
          <Link
            to={"/jewelries"}
            className={`rounded font-bold ${
              isSmallScreen && "hidden-on-small rounded font-bold"
            }`}
          >
            <div className="font-bold mt-2">
              <h1> Jewelry </h1>
            </div>
          </Link>
        </div>

        {/* Admin */}
        <div className="justify-end">
          <Link to={"/login"}>
            <div className="font-bold mt-2">
              <h1> Login </h1>
            </div>
          </Link>
        </div>

        {/* cart */}
        <div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
          >
            <BsBag className="text-2xl " />
            <div className="bg-red-500 absolute -right-2 -bottom-3 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center ">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
