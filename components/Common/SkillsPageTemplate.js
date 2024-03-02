import Image from "next/image";
import ButtonPages from "../Buttonpages";

const SkillsPageTemplate = ({ overview, skills, equipment, title }) => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="bg-secondary-color text-white py-20 px-5 md:px-10 ">
        <div className="text-center">
          <h2 className="text-5xl font-[500] mb-8">
            Celestial Crafters Digital Skills Centre
          </h2>
          <h2 className="text-3xl font-bold mb-6">{title} Workshop</h2>
          <p className="text-lg pb-5 w-full md:w-[60%] mx-auto">
            Your support can make a real difference in empowering women to
            express themselves creatively and pursue careers in {title}.
          </p>
          <ButtonPages/>
        </div>
      </div>

      {/* Main Content Section */}
      <div>
        <div>
          <section className="bg-lightGray-color h-auto flex items-center justify-center flex-col p-3 md:p-18 pt-24 sm:w-[100%]">
            <h1 className="text-black text-4xl font-extrabold w-[90%] md:w-[60%] text-center mb-8">
              Overview
            </h1>
            <p className="w-[90%] md:w-[60%] text-gray-900 font-[700] text-lg text-center mb-8 leading-relaxed tracking-wide">
              {overview}
            </p>
            <div className="flex flex-wrap justify-center mt-10 mx-4 sm:mx-10 md:mx-16 lg:mx-32 gap-5">
            {skills.map((item,index) => {
                return (
                    <article key={index} className="flex flex-col w-[250px]  mb-10 md:mx-4 border border-lightRed rounded-lg">
                        <img src={item.src} alt={title} className="h-40 w-full mb-3 object-cover rounded-t-lg" />
                        <div className="text-center px-2">
                            <h2 className="text-black font-extrabold mb-3 text-xl">{item.name}</h2>
                            <p className="text-[#757575] text-[1rem] max-w-[285px] mx-auto pb-10">{item.description}</p>
                        </div>
                    </article>
                );
            })}
        </div>
          </section>

          {/* Equipment & Materials Section */}
          <section className="mb-16 py-20 px-5 md:px-10 lg:px-20 bg-lightGray-color/90">
            <h2 className="text-2xl font-bold mb-4">Equipment & Materials</h2>
            <p className="text-lg font-[600]">{equipment}</p>
          </section>
        </div>
      </div>

      {/* Donor Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Support Our Cause
            </h2>
            <p className="text-lg text-gray-700">
              Your support can make a real difference in empowering women to
              express themselves creatively and pursue careers in design. Join
              us in our mission to provide free graphic design training to women
              in need.
            </p>
          </div>
          <div className="mt-8 text-center">
            <ButtonPages/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPageTemplate;
