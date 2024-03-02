import React from "react";
import { TitleText } from "../Common/CustomText";
import Image from "next/image";

const Solution = () => {
  return (
    <section className="min-h-screen p-5 md:p-16 relative z-50 bg-lightGray-color flex flex-col items-center justify-center">
      <div className="w-full md:w-[80%] flex flex-col gap pb-10 items-center justify-center">
        <TitleText title={<>Our Solution </>} textStyles="text-center" />
        <p className="font-normal  text-[20px]  text-center">
          Celestial Crafters Digital Skill Centre{" "}
          <span className="font-[800] text-lightRed">
            {" "}
            will offer free digital skills{" "}
          </span>
          to the vulnerable young girls and women by providing quality education
          in the field of Technology thus enhancing creation of job
          opportunities that will lead to eradication of poverty and economic
          growth in the Country . It will also aid in bridging the gender gap in
          the technology world.
        </p>
        <div className="gradient-04" />
      </div>
      <div className="flex gap-5 flex-wrap justify-center items-center">
        {["/solution.jpg", "/solution1.jpg", "/oursolution.jpg"].map((item) => {
          return (
            <div>
              <Image
                src={item}
                width={300}
                height={300}
                alt="image"
                className="w-[380px] h-[280px] rounded-lg object-cover"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Solution;
