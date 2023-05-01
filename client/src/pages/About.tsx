import React from "react";
import { motion } from "framer-motion";
import Counter from "../components/Counter";
import {
  aboutAnimation,
  imageAnimation,
} from "../components/animations/animations";

const About = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center mt-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
        className="flex gap-5"
      >
        <div className="flex flex-col items-end gap-5 mx-5">
          <motion.section
            variants={imageAnimation}
            custom={1}
            className="bg-about-1 bg-no-repeat bg-center bg-cover rounded-md md:h-[250px] md:w-[250px] h-[150px] w-[150px]"
          />
          <motion.section
            variants={imageAnimation}
            custom={2}
            className="bg-about-2 bg-no-repeat bg-center bg-cover rounded-md md:h-[200px] md:w-[200px] h-[100px] w-[100px]"
          />
        </div>
        <div className="flex flex-col items-start gap-5 mt-12">
          <motion.section
            variants={imageAnimation}
            custom={3}
            className="bg-about-4 bg-no-repeat bg-center bg-cover rounded-md md:h-[200px] md:w-[200px] h-[100px] w-[100px]"
          />
          <motion.section
            variants={imageAnimation}
            custom={4}
            className="bg-about-3 bg-no-repeat bg-center bg-cover rounded-md md:h-[250px] md:w-[250px] h-[150px] w-[150px]"
          />
        </div>
      </motion.div>
      <motion.main
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
        variants={aboutAnimation}
        custom={1}
        className="max-w-md self-center lg:m-16 m-5"
      >
        <header className="text-3xl font-dancing text-main">about us</header>
        <h1 className="text-3xl font-bold my-3">Welcome to Cho-cho pizza</h1>
        <p>
          Our chiefs are only using natural ingredients for tastiest pizza and
          other dishes created using unique receipts. There are positions for
          any taste and preferences. We always improves service quality and
          adding new interesting features and sales to make clients feel better
          visiting our restaurant.
        </p>
        <div className="flex md:flex-row flex-col gap-3 mt-4 justify-between">
          <section className="flex items-center">
            <Counter from={0} to={8} />
            <div className="ml-3 text-md">
              <p>Years of</p>
              <strong>Experience</strong>
            </div>
          </section>
          <section className="flex items-center">
            <Counter from={0} to={8000} />
            <div className="ml-3 text-md">
              <p>Happy clients</p>
              <strong>Every year</strong>
            </div>
          </section>
        </div>
      </motion.main>
    </div>
  );
};

export default About;
