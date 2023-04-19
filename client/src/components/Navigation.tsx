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

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <nav className="bg-blue text-white h-20 md:flex justify-between items-center">
        <div className="text-main flex text-3xl px-10 md:py-0 py-5">
          <FaPizzaSlice className="mr-[10px]" />
          Cho-cho pizza
        </div>
        <div
          onClick={() => setOpenNav(!openNav)}
          className="absolute text-3xl top-6 right-10 md:hidden cursor-pointer"
        >
          {openNav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <ul
          className={`md:flex items-center md:gap-10 text-lg bg-inherit px-10 md:z-auto z-[-1] md:border-none md:w-min w-full md:static absolute border-t-2 border-slate-500 transition-all ease-in ${
            openNav ? "top-20" : "top-[-500px]"
          }`}
        >
          <li className="li">
            <Link className="link" to=".">
              <AiOutlineHome
                className={`icon ${openNav ? "visible" : "hidden"}`}
              />
              Home
            </Link>
          </li>
          <li className="li">
            <Link className="link" to="/menu">
              <MdOutlineFastfood
                className={`icon ${openNav ? "visible" : "hidden"}`}
              />
              Menu
            </Link>
          </li>
          <li className="li">
            <Link className="link" to="/about">
              <AiOutlineSearch
                className={`icon ${openNav ? "visible" : "hidden"}`}
              />
              About
            </Link>
          </li>
          <li className="li">
            <Link
              className="link text-white md:bg-main md:px-3 md:py-2 md:rounded-md md:hover:bg-hoverMain transition-colors"
              to="/login"
            >
              <BiLogIn className={`icon ${openNav ? "visible" : "hidden"}`} />
              Sign&nbsp;up
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
