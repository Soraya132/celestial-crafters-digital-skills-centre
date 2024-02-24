import React from "react";

const CommonHeader = ({ hero, title ,description}) => {
  return (
    <section
      className="bg-top bg-cover min-h-screen"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="header-gradient w-full min-h-screen flex flex-col items-center justify-center">
      
        <div className="  text-lightRed text-center">
        <h1 className=" text-4xl md:text-6xl mb-5 font-[500] capitalize">Celestial Crafters Digital <br/> Skills Centre</h1>
          <h2 className=" text-xl md:text-2xl text-brown-color font-[300] ">
          <p>{description}</p>
       {title}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CommonHeader;
