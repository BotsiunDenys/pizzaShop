import React, { useEffect, useState, useMemo } from "react";
import ReactLoading from "react-loading";
import { ToastContainer, toast } from "react-toastify";
import { FaHamburger, FaPizzaSlice, FaCoffee } from "react-icons/fa";
import { GiCupcake } from "react-icons/gi";
import { CgMenuCake } from "react-icons/cg";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../store/store";
import { Product } from "../models/MenuModels";
import { getProducts } from "../store/slice/MenuSlice";
import { addProduct } from "../store/slice/OrderSlice";
import { blockAnimation } from "../components/animations/animations";
import "react-toastify/dist/ReactToastify.css";
import "../styles/menu.css";

const Menu = () => {
  const dispatch = useAppDispatch();
  const [menu, setMenu] = useState<Product[] | []>([]);
  const products = useAppSelector((state) => state.menu.products);
  const isLogged = useAppSelector((state) => state.auth.isLogged);
  const loading = useAppSelector((state) => state.menu.loading);
  const order = useAppSelector((state) => state.order.products);
  const burgers = useMemo(
    () => products.filter((product) => product.category === "burger"),
    [products]
  );
  const pizzas = useMemo(
    () => products.filter((product) => product.category === "pizza"),
    [products]
  );
  const beverages = useMemo(
    () => products.filter((product) => product.category === "beverage"),
    [products]
  );
  const desserts = useMemo(
    () => products.filter((product) => product.category === "dessert"),
    [products]
  );
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    setMenu(beverages);
  }, [beverages]);

  const toastWarning = () => {
    toast("Login to make an order");
  };

  if (loading)
    return (
      <div className="flex items-center justify-center mt-52">
        <ReactLoading type="bars" color="#616469" />
      </div>
    );

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={blockAnimation}
      custom={1}
      className="flex items-center flex-col mt-10"
    >
      <header className="md:text-[50px] text-[30px] text-main font-dancing">
        Food menu
      </header>
      <section>
        <ul className="md:flex grid grid-cols-3 md:gap-5 gap-3">
          <li onClick={() => setMenu(products)} className="menuLi">
            <CgMenuCake />
            <p className="text-blue fond-bold">All</p>
          </li>
          <li onClick={() => setMenu(burgers)} className="menuLi">
            <FaHamburger />
            <p className="text-blue fond-bold">Burgers</p>
          </li>
          <li onClick={() => setMenu(pizzas)} className="menuLi">
            <FaPizzaSlice />
            <p className="text-blue fond-bold">Pizza</p>
          </li>
          <li onClick={() => setMenu(beverages)} className="menuLi">
            <FaCoffee />
            <p className="text-blue fond-bold">Beverages</p>
          </li>
          <li onClick={() => setMenu(desserts)} className="menuLi">
            <GiCupcake />
            <p className="text-blue fond-bold">Desserts</p>
          </li>
        </ul>
      </section>
      <main className="grid md:grid-cols-2 grid-cols-1 gap-3 my-10 md:mx-5">
        {menu.map((item) => (
          <div
            className="border-2 rounded-md p-3 sm:max-w-lg max-w-[300px] animate-fade-in"
            key={item._id}
          >
            <div className="flex gap-3 mb-3">
              <input
                className="rounded-md sm:h-[150px] h-[100px] sm:w-[200px] w-[150px] cursor-default"
                type="image"
                src={item.img}
                alt={`${item.name} image`}
              />
              <div className="flex flex-col justify-around">
                <header className="sm:text-[20px] text-[18px] max-w-[200px] text-main">
                  {item.name}
                </header>
                <p className="font-bold">Price: {item.price}$</p>
                <button
                  onClick={() => {
                    if (isLogged) {
                      const isOrdered = order.find(
                        (product) => product._id === item._id
                      );
                      console.log(isOrdered);

                      if (!isOrdered) {
                        dispatch(addProduct(item));
                      }
                    } else {
                      toastWarning();
                    }
                  }}
                  className="sm:px-3 px-1 sm:py-2 py-1 bg-main rounded-sm text-white hover:bg-hoverMain max-w-fit transition-colors"
                >
                  Add to order
                </button>
              </div>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </main>
      <ToastContainer />
    </motion.div>
  );
};

export default Menu;
