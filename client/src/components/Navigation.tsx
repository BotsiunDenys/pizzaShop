import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineSearch,
} from "react-icons/ai";
import { MdOutlineFastfood } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import "../styles/nav.css";
import Footer from "./Footer";

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <nav className="bg-blue text-white h-20 md:flex justify-between relative items-center">
        <div className="after:absolute after:bg-blue after:h-full after:w-full after:z-20 md:hidden" />
        <header className="text-main font-bold flex items-center sm:text-3xl text-2xl pl-10 md:py-0 py-5 md:z-auto z-20">
          <FaPizzaSlice className="mr-[10px] md:z-auto z-20 bg-blue" />
          <p className="md:z-auto z-20 bg-blue">Cho-cho pizza</p>
        </header>
        <div
          onClick={() => setOpenNav(!openNav)}
          className="absolute text-3xl top-6 right-10 md:hidden cursor-pointer md:z-auto z-20"
        >
          {openNav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <ul
          className={`md:flex items-center md:gap-10 text-lg bg-inherit px-10 md:border-none md:z-auto z-10 md:w-min w-full md:static absolute transition-all ease-in ${
            openNav ? "top-20" : "top-[-500px]"
          }`}
        >
          <li className="li">
            <Link className="link" to=".">
              <AiOutlineHome className={`icon`} />
              Home
            </Link>
          </li>
          <li className="li">
            <Link className="link" to="/menu">
              <MdOutlineFastfood className={`icon`} />
              Menu
            </Link>
          </li>
          <li className="li">
            <Link className="link" to="/about">
              <AiOutlineSearch className={`icon`} />
              About
            </Link>
          </li>
          <li className="li">
            <Link
              className="text-white md:bg-main md:px-3 md:py-2 md:rounded-md md:hover:bg-hoverMain md:hover:text-white md:focus:text-white transition-colors link"
              to="/login"
            >
              <BiLogIn className={`icon`} />
              Sign&nbsp;up
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
