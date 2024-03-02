import CTA from "../Common/CTA";
const Hero = () => {
  return (
    <section className=" heroImage flex flex-col justify-center items-start">
      <div className="lg:pl-32 text-lightRed mt-[180px] md:mt-[170px] lg:mt-36 bg-lightGray-color/60 w-auto mx-3 lg:mx-5 mb-10 md:w-[90%] p-10 ">
        <h1 className="text-4xl md:text-6xl mb-5 font-[500] capitalize">
          Celestial Crafters Digital <br /> Skills Centre
        </h1>
        <p className="text-xl md:text-2xl text-brown-color font-[300] ">
          Transforming Lives in Nairobi's Slums, Empowering Women for
          <br /> a Digital Future with Celestial Crafters
        </p>
        <CTA />
      </div>
    </section>
  );
};

export default Hero;
