"use client";

import { motion } from "framer-motion";
import styles from "../../styles";
import { fadeIn, staggerContainer } from "../../utils/motion";
import Image from "next/image";

const ImpactinSlum = () => (
  <section
    className={` px-5 md:px-10 lg:px-16 py-32 bg-lightGray-color                                                                     `}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#dbaeae] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-[400] sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-black">
            Impact in Slums
          </h4>
        </div>

        <p className="mt-[24px] font-normal  text-[20px] text-black">
          In the heart of Nairobi's slums, we're making a difference. Through
          our Celestial Crafters Digital Skills Centre, we're reaching out to
          vulnerable communities in areas like Huruma, Korogocho, Mathare,
          Kariobangi, Dandora, and Kayole-Soweto. These are places where
          opportunities are scarce, and young women often find themselves
          trapped in cycles of poverty, crime, and exploitation
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src={"/girlslife.jpg"}
          alt="poor people"
          width={1000}
          height={1000}
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default ImpactinSlum;
