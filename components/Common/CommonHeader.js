import React from "react";
import CTA from "./CTA";
import ButtonPages from "../Buttonpages";

const CommonHeader = ({ hero, title, description }) => {
  return (
    <section
      className="bg-top bg-cover"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="header-gradient w-full flex flex-col items-center justify-center px-6 md:px-10">
        <div className="  text-lightRed  w-full md:w-[90%] lg:w-[80%] bg-lightGray-color/50 p-10 py-20 mt-[180px] md:mt-[170px] lg:mt-36 mb-10">
          <h1 className=" text-4xl md:text-5xl mb-5 font-[500] capitalize">
            {title}
          </h1>
          <h2 className=" text-xl md:text-2xl text-brown-color font-[300] ">
            {description}
          </h2>

          <ButtonPages/>
        </div>
      </div>
    </section>
  );
};

export default CommonHeader;
