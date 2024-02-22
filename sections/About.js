"use client";

import { motion } from "framer-motion";
import { TitleText } from "../components/CustomText";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section
    className={`px-5  py-20 relative z-10 bg-about min-h-screen flex flex-col items-center justify-center`}
  >
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`2xl:max-w-[1280px] w-full mx-auto flex items-center justify-center flex-col `}
    >
      <TitleText
        title={<>Celestial Crafters Digital skills Center</>}
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="padding font-normal  text-[20px] text-secondary-white text-center "
      >
        Welcome to Celestial Crafters, where we're on a mission to revolutionize
        the tech industry and empower women, especially those in Nairobi's
        slums. Founded by Serah Kamau, our startup is dedicated to providing
        digital skills and opportunities to vulnerable girls and young women,
        transforming their lives and shaping the digital frontier
      </motion.p>
      <motion.div
        variants={fadeIn("up", "tween", 0.1)}
        className="flex  mt-10 items-center justify-center w-[70px] h-[70px] hover:scale-105 rounded-full bg-secondary-color"
      >
        <img
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain "
        />
      </motion.div>
    </motion.div>
  </section>
);

export default About;
