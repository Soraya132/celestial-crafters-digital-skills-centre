"use client";

import { motion } from "framer-motion";
import { TitleText } from "../Common/CustomText";
import { fadeIn, staggerContainer } from "../../utils/motion";
import CTA from "@/components/Common/CTA";

const About = () => (
  <section className="px-5  py-20 relative z-10 bg-about min-h-[70vh] flex flex-col items-center justify-center">
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
        className="flex  items-center justify-center"
      >
        <CTA />
      </motion.div>
    </motion.div>
  </section>
);

export default About;
