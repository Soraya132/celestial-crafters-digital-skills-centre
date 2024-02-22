import React from "react";
import { TitleText } from "./CustomText";
import styles from "@/styles";

import Image from "next/image";
const OurAsk = () => {
  return (
 
    <section
      className={` px-5 md:px-10 lg:px-16 py-32 bg-lightGray-color/70  shadow-sm                                                                    `}
    >
      <div
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
       <div className="relative  flex justify-center items-center">
          <Image
            src={"/children1.jpg"}
            alt="planet-09"
            width={1000}
            height={1000}
            className="w-full lg:h-[500px] h-auto min-h-[210px] object-cover rounded-md"
          />
        </div>
        <div className="flex justify-end flex-col gradient-05 sm:p-8 p-4  relative">
          <div className="feedback-gradient" />
          <div>
          <TitleText title={<>Road Map & Asks</>} textStyles="text-center" />
          </div>

          <p className="py-6 font-normal  text-[20px]">
            Celestial Crafters Digital skills centre has a vision of becoming
            the leading global institution that offers free and quality digital
            skills to the vulnerable women in the society.
          </p>
          <ul className="flex flex-col ">
          {[
            "Tailored coaching, mentorship and support clinics .",
            "Facilitation for financial support to aid in smooth running of the institution .",
            "Customers for celestial crafters tech company.",
          ].map((item,index) => {
            return <li className="py-2 font-[500]  text-[22px]"><span>{index+1}</span>{") "}{item}</li>;
          })}
        </ul>
        </div>

       
      </div>
    </section>
  );
};

export default OurAsk;
