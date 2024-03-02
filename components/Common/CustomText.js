"use client";

import { motion } from "framer-motion";
import { textVariant2 } from "../../utils/motion";

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-[400] text-3xl sm:text-4xl md:text-5xl  text-lightRed ${textStyles}`}
  >
    {title}
  </motion.h2>
);
