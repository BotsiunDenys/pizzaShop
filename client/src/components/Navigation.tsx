import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";
import { logout, checkAuth } from "../store/slice/AuthSlice";
import { FaPizzaSlice } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineLogout,
  AiOutlineShoppingCart
} from "react-icons/ai";
import { MdOutlineFastfood } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import Footer from "./Footer";
import "../styles/nav.css";

const Navigation = () => {
  const isLogged = useAppSelector((state) => state.auth.isLogged);
  const roles = useAppSelector((state) => state.auth.user?.roles);
  const isAdmin = roles?.find((role) => role === "admin");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuth());
    }
  }, []);
  return (
    <>
      <nav className="bg-blue text-white h-20 md:flex justify-between relative items-center">
        <div className="after:absolute after:bg-blue after:h-full after:w-full after:z-20 md:hidden" />
        <header className="text-main font-bold flex items-center md:text-3xl text-2xl pl-10 md:py-0 py-5 md:z-auto z-20">
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
              <AiOutlineHome className="icon" />
              Home
            </Link>
          </li>
          <li className="li">
            <Link className="link" to="/menu">
              <MdOutlineFastfood className="icon" />
              Menu
            </Link>
          </li>
          <li className="li">
            <Link className="link" to="/about">
              <AiOutlineSearch className="icon" />
              About
            </Link>
          </li>
          {isAdmin && (
            <li className="li">
              <Link to="/adminpanel" className="link">
                <MdOutlineAdminPanelSettings className="icon" />
                Admin&nbsp;panel
              </Link>
            </li>
          )}
          <li className="li">
            {!isLogged && (
              <Link
                className="text-white md:bg-main md:px-3 md:py-2 md:rounded-md md:hover:bg-hoverMain md:hover:text-white md:focus:text-white transition-colors link"
                to="/login"
              >
                <BiLogIn className="icon" />
                Sign&nbsp;in
              </Link>
            )}
            {isLogged && (
              <button
                className="text-white md:bg-main md:px-3 md:py-2 md:rounded-md md:hover:bg-hoverMain md:hover:text-white md:focus:text-white transition-colors link"
                type="button"
                onClick={() => {
                  dispatch(logout());
                  navigate("/");
                }}
              >
                <AiOutlineLogout className="icon" />
                Logout
              </button>
            )}
          </li>
          {isLogged && (
            <li className="li">
              <Link to="/order" className="link">
                <AiOutlineShoppingCart className="text-3xl" />
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
