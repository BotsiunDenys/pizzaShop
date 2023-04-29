import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { TbToolsKitchen, TbChefHat, TbShoppingCart } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { textAnimation, blockAnimation } from "./animations/animations";
import About from "./About";
import Menu from "./Menu";
import "../styles/home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
        className="bg-hero-pattern bg-no-repeat bg-cover bg-center w-full relative h-screen after:absolute after:w-full after:h-full after:bg-opBlue"
      >
        <main className="absolute text-white z-[2] h-full w-full flex lg:flex-row flex-col items-center lg:justify-around justify-center lg:gap-0 gap-40 lg:text-start text-center">
          <section>
            <motion.h1
              custom={1}
              variants={textAnimation}
              className="text-[50px] font-bold"
            >
              Enjoy your cho-cho pizza
            </motion.h1>
            <motion.button
              custom={2}
              variants={textAnimation}
              onClick={() => navigate("/menu")}
              className="text-3xl bg-main px-5 py-3 rounded-md mt-5 hover:bg-hoverMain transition-colors"
            >
              Choose
            </motion.button>
          </section>
          <section className="overflow-hidden">
            <div className="bg-pizza-rotating bg-no-repeat bg-cover bg-center w-[250px] h-[250px] sm:h-[400px] sm:w-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[700px] 2xl:h-[700px] animate-spin-slow" />
          </section>
        </main>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
        className="flex justify-center"
      >
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 my-20 gap-10">
          <motion.section
            variants={blockAnimation}
            custom={1}
            className="card delay-100"
          >
            <div className="cardImage">
              <TbChefHat />
            </div>
            <p className="cardHeader">Master chefs</p>
            <p>We employ only high-rated qualified chefs to cook for you</p>
          </motion.section>
          <motion.section variants={blockAnimation} custom={2} className="card">
            <div className="cardImage">
              <TbToolsKitchen />
            </div>
            <p className="cardHeader">Quality food</p>
            <p>Strong food quality control</p>
          </motion.section>
          <motion.section variants={blockAnimation} custom={3} className="card">
            <div className="cardImage">
              <TbShoppingCart />
            </div>
            <p className="cardHeader">Online service</p>
            <p>
              We basically work for online orders but there is an opportunity to
              pickup order by yourself
            </p>
          </motion.section>
          <motion.section
            variants={blockAnimation}
            custom={4}
            className="card delay-[400]"
          >
            <div className="cardImage">
              <RiCustomerService2Line />
            </div>
            <p className="cardHeader">Working 24/7</p>
            <p>Our service available 24 hours 7 days a week</p>
          </motion.section>
        </div>
      </motion.div>
      <About />
      <Menu />
    </>
  );
};

export default Home;
