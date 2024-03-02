"use client";

import { motion } from "framer-motion";
import styles from "../../styles";
import { fadeIn } from "../../utils/motion";
import { TitleText } from "@/components/Common/CustomText";
import { startingFeatures } from "@/constants";
import StartSteps from "@/components/StartSteps";
import Image from "next/image";

const MarketResearch = () => (
  <section className={`px-2 md:px-10 lg:px-16 padding`}>
    <motion.div
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-[0.5] flex justify-center items-center"
      >
        <Image
          src={"/market1.jpg"}
          alt="poor people"
          width={1000}
          height={1000}
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-1  flex justify-end flex-col sm:p-8 py-4   relative"
      >
        <div className="feedback-gradient" />
        <div className="py-10">
          <TitleText title={<> Market Research</>} textStyles="text-center" />
        </div>

        <div className="flex flex-col gap ">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? "0" : ""} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default MarketResearch;
