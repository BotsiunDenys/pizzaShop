import React from "react";
import { FaHamburger, FaPizzaSlice, FaCoffee } from "react-icons/fa";
import { GiCupcake } from "react-icons/gi";

const Menu = () => {
  return (
    <div className="flex items-center flex-col">
      <header className="text-[50px] text-main font-dancing">Food menu</header>
      <section>
        <ul className="flex gap-5">
          <li className="flex items-center gap-2 text-2xl text-main hover:text-hoverMain transition-colors leading-10 cursor-pointer border-b-2 hover:border-main">
            <FaHamburger />
            <p className="text-blue fond-bold">Burgers</p>
          </li>
          <li className="flex items-center gap-2 text-2xl text-main hover:text-hoverMain transition-colors leading-10 cursor-pointer border-b-2 hover:border-main">
            <FaPizzaSlice />
            <p className="text-blue fond-bold">Pizza</p>
          </li>
          <li className="flex items-center gap-2 text-2xl text-main hover:text-hoverMain transition-colors leading-10 cursor-pointer border-b-2 hover:border-main">
            <FaCoffee />
            <p className="text-blue fond-bold">Beverages</p>
          </li>
          <li className="flex items-center gap-2 text-2xl text-main hover:text-hoverMain transition-colors leading-10 cursor-pointer border-b-2 hover:border-main">
            <GiCupcake />
            <p className="text-blue fond-bold">Desserts</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Menu;
