import React from "react";
import { Link } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
import {
  AiFillPhone,
  AiOutlineMail,
  AiOutlineCopyright,
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-blue text-white mt-20">
      <div className="flex sm:flex-row flex-col sm:items-center items-start sm:ml-0 ml-10 justify-around py-5">
        <section>
          <h3 className="text-2xl text-main font-dancing">Contact Us</h3>
          <ul>
            <li className="flex items-center text-lg my-3">
              <HiLocationMarker className="mr-2" />
              <p>Keletska St. 666, Vinnytsia, Ukraine</p>
            </li>
            <li className="flex items-center text-lg my-3">
              <AiFillPhone className="mr-2" />
              <p>+38-123-456-7890</p>
            </li>
            <li className="flex items-center text-lg my-3">
              <AiOutlineMail className="mr-2" />
              <p>chochopizza@domain.com</p>
            </li>
          </ul>
        </section>
        <section>
          <h3 className="text-2xl text-main font-dancing">Opening</h3>
          <ul>
            <li className="flex items-start flex-col text-lg my-3">
              <p>Monday-Friday:</p>
              <p className="text-sm">09:00 - 21:00</p>
            </li>
            <li className="flex flex-col items-start text-lg my-3">
              <p>Saturday-Sunday:</p>
              <p className="text-sm">10:00 - 22:00</p>
            </li>
          </ul>
        </section>
      </div>
      <hr />
      <section className="flex sm:flex-row flex-col sm:gap-0 gap-5 sm:py-0 py-5 justify-between mx-10 items-center min-h-[50px]">
        <div className="flex items-center">
          <AiOutlineCopyright className="mr-2" />
          <p>Designed by HTML Codex</p>
        </div>
        <div className="flex items-center gap-5 text-xl">
          <Link
            className="text-white hover:text-hoverMain transition-colors"
            to="https://www.instagram.com/"
          >
            <AiFillInstagram />
          </Link>
          <Link
            className="text-white hover:text-hoverMain transition-colors"
            to="https://www.facebook.com/"
          >
            <AiFillFacebook />
          </Link>
          <Link
            className="text-white hover:text-hoverMain transition-colors"
            to="https://www.youtube.com/"
          >
            <AiFillYoutube />
          </Link>
          <Link
            className="text-white hover:text-hoverMain transition-colors"
            to="https://twitter.com/"
          >
            <AiFillTwitterCircle />
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
